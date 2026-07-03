import uPlot from 'uplot';
import * as SunCalc from 'suncalc';
import type { Forecast } from './types';

export function detectMobile(): boolean {
  // 1) Client Hints
  const uaData = (navigator as Navigator & { userAgentData?: { mobile?: boolean } }).userAgentData;
  if (uaData && typeof uaData.mobile === 'boolean') {
    return uaData.mobile;
  }
  // 2) Pointer/Touch
  if (window.matchMedia('(pointer: coarse)').matches) {
    return true;
  }
  // 3) Screen size
  if (Math.min(window.innerWidth, window.innerHeight) <= 768) {
    return true;
  }
  // 4) UA string fallback
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/** Draw an upward-pointing arrow onto a canvas, used as a wind-direction point marker. */
export function makeArrowIcon(size = 20, color = 'purple'): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;

  const shaftWidth = 2;
  const headLength = size * 0.25;
  const headWidth = headLength * 0.8;
  const centerX = size / 2;
  const tipY = 2;
  const shaftEndY = tipY + headLength;

  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = shaftWidth;

  // Shaft
  ctx.beginPath();
  ctx.moveTo(centerX, shaftEndY);
  ctx.lineTo(centerX, size - 2);
  ctx.stroke();

  // Arrowhead
  ctx.beginPath();
  ctx.moveTo(centerX, tipY);
  ctx.lineTo(centerX - headWidth / 2, shaftEndY);
  ctx.lineTo(centerX + headWidth / 2, shaftEndY);
  ctx.closePath();
  ctx.fill();

  return c;
}

/** Index ranges [start, end) over startTimes that fall during night, for shading. */
export function computeNightRanges(startTimes: Date[], lat: number, lon: number): [number, number][] {
  const ranges: [number, number][] = [];
  let nightStart: number | null = null;
  for (let i = 0; i < startTimes.length; i++) {
    const t = startTimes[i];
    const times = SunCalc.getTimes(t, lat, lon);
    const sunrise = times.sunrise;
    const sunset = times.sunset;
    const isNight =
      !sunrise || !sunset || isNaN(sunrise.getTime()) || isNaN(sunset.getTime())
        ? t.getHours() < 6 || t.getHours() >= 18
        : t < sunrise || t >= sunset;
    if (isNight && nightStart === null) {
      nightStart = i;
    } else if (!isNight && nightStart !== null) {
      ranges.push([nightStart, i]);
      nightStart = null;
    }
  }
  if (nightStart !== null) {
    ranges.push([nightStart, startTimes.length]);
  }
  return ranges;
}

/** Round `value` up or down to the nearest multiple of `multiple`. */
export function roundToMultiple(value: number, multiple: number, direction: 'up' | 'down' = 'up'): number {
  if (multiple === 0) {
    throw new RangeError('multiple cannot be zero');
  }
  return direction === 'up'
    ? multiple * Math.ceil(value / multiple)
    : multiple * Math.floor(value / multiple);
}

const DAY_LETTERS = ['U', 'M', 'T', 'W', 'R', 'F', 'S'];

function makeLabel(date: Date): string {
  const day = DAY_LETTERS[date.getDay()];
  const hour = date.getHours().toString().padStart(2, '0');
  return `${day}-${hour}`;
}

/** Convert the forecast's `Date[]` start times into uPlot's x axis (unix seconds). */
export function toUnixSeconds(startTimes: Date[]): number[] {
  return startTimes.map((d) => Math.round(d.getTime() / 1000));
}

// ---- Plugins ---------------------------------------------------------------

/** Grey translucent background bands over nighttime hours (index ranges into xs). */
function nightShadingPlugin(xs: number[], ranges: [number, number][]): uPlot.Plugin {
  const halfStep = xs.length > 1 ? (xs[1] - xs[0]) / 2 : 1800;
  return {
    hooks: {
      drawClear: (u: uPlot) => {
        if (!ranges.length) return;
        const { ctx } = u;
        const { top, height } = u.bbox;
        const clipLeft = u.bbox.left;
        const clipRight = u.bbox.left + u.bbox.width;
        ctx.save();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        for (const [s, e] of ranges) {
          const xStart = u.valToPos(xs[s] - halfStep, 'x', true);
          const xEnd = u.valToPos(xs[e - 1] + halfStep, 'x', true);
          const clampedStart = Math.max(xStart, clipLeft);
          const clampedEnd = Math.min(xEnd, clipRight);
          if (clampedEnd > clampedStart) {
            ctx.fillRect(clampedStart, top, clampedEnd - clampedStart, height);
          }
        }
        ctx.restore();
      },
    },
  };
}

/** Per-point arrow markers on the wind series, rotated by wind direction. */
function windArrowPlugin(
  xs: number[],
  speed: (number | null)[],
  direction: (number | null)[],
): uPlot.Plugin {
  const icon = makeArrowIcon(30);
  return {
    hooks: {
      draw: (u: uPlot) => {
        const { ctx } = u;
        const dpr = uPlot.pxRatio;
        const sizeDev = 30 * dpr;
        const half = sizeDev / 2;
        const clipLeft = u.bbox.left;
        const clipRight = u.bbox.left + u.bbox.width;
        ctx.save();
        for (let i = 0; i < xs.length; i++) {
          const v = speed[i];
          if (v == null) continue;
          const x = u.valToPos(xs[i], 'x', true);
          if (x < clipLeft || x > clipRight) continue;
          const y = u.valToPos(v, 'y', true);
          const rot = ((direction[i] ?? 0) - 180) * (Math.PI / 180);
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rot);
          ctx.drawImage(icon, -half, -half, sizeDev, sizeDev);
          ctx.restore();
        }
        ctx.restore();
      },
    },
  };
}

/** Wheel zoom on the x scale, mirrored to all synced charts via `onXScale`. */
function wheelZoomPlugin(onXScale: (min: number, max: number) => void): uPlot.Plugin {
  const factor = 0.9;
  return {
    hooks: {
      ready: (u: uPlot) => {
        u.over.addEventListener(
          'wheel',
          (e: WheelEvent) => {
            e.preventDefault();
            const { min, max } = u.scales.x;
            if (min == null || max == null) return;
            const rect = u.over.getBoundingClientRect();
            const cursorX = e.clientX - rect.left;
            const xVal = u.posToVal(cursorX, 'x');
            const zoom = e.deltaY < 0 ? factor : 1 / factor;
            const nMin = xVal - (xVal - min) * zoom;
            const nMax = xVal + (max - xVal) * zoom;
            onXScale(nMin, nMax);
          },
          { passive: false },
        );
      },
    },
  };
}

// ---- Options builders ------------------------------------------------------

export interface ChartInputs {
  forecast: Forecast;
  xs: number[];
  numHours: number;
  titleSize: number;
  fontSize: number;
  nightRanges: [number, number][];
  syncKey: string;
  /** Mirror an x-range change onto every synced chart. */
  onXScale: (min: number, max: number) => void;
}

interface SeriesDef {
  label: string;
  color: string;
  data: (number | null)[];
}

const SPLINE = uPlot.paths.spline!();

function baseOptions(
  inputs: ChartInputs,
  yLabel: string,
  yRange: [number, number],
  seriesDefs: SeriesDef[],
  extraPlugins: uPlot.Plugin[] = [],
  showPoints = true,
): { opts: uPlot.Options; data: uPlot.AlignedData } {
  const { xs, titleSize, fontSize, nightRanges, syncKey, onXScale } = inputs;
  const tickFont = `${fontSize}px monospace`;
  const labelFont = `700 ${titleSize}px sans-serif`;

  const opts: uPlot.Options = {
    width: 100,
    height: 100,
    // Mount without the default legend; keep the plot area clean like Chart.js.
    legend: { show: false },
    cursor: {
      sync: { key: syncKey, setSeries: false },
      drag: { x: true, y: false },
    },
    scales: {
      x: {
        time: true,
        // Pass requested limits through so zoom/pan/buttons drive the window.
        range: (_u, min, max) => [min, max],
      },
      y: {
        range: () => yRange,
      },
    },
    axes: [
      {
        scale: 'x',
        font: tickFont,
        // Tick at the first sample and every 3rd hour.
        splits: () =>
          xs.filter((x, i) => i === 0 || new Date(x * 1000).getHours() % 3 === 0),
        values: (_u, splits) => splits.map((s) => makeLabel(new Date(s * 1000))),
      },
      {
        scale: 'y',
        font: tickFont,
        label: yLabel,
        labelFont,
        labelSize: titleSize + 12,
      },
    ],
    series: [
      {},
      ...seriesDefs.map(
        (d): uPlot.Series => ({
          label: d.label,
          stroke: d.color,
          width: 2,
          paths: SPLINE,
          points: { show: showPoints, size: 5, stroke: d.color, fill: d.color, width: 0 },
        }),
      ),
    ],
    plugins: [
      nightShadingPlugin(xs, nightRanges),
      wheelZoomPlugin(onXScale),
      ...extraPlugins,
    ],
    hooks: {
      setScale: [
        (u: uPlot, key: string) => {
          if (key !== 'x') return;
          const { min, max } = u.scales.x;
          if (min == null || max == null) return;
          onXScale(min, max);
        },
      ],
    },
  };

  const data: uPlot.AlignedData = [xs, ...seriesDefs.map((d) => d.data)];
  return { opts, data };
}

export function tempOptions(inputs: ChartInputs) {
  const { series } = inputs.forecast;
  const min = roundToMultiple(
    Math.min(...(series.temperature as number[]), ...(series.apparentTemperature as number[])),
    5,
    'down',
  );
  const max = roundToMultiple(
    Math.max(...(series.temperature as number[]), ...(series.apparentTemperature as number[])),
    5,
    'up',
  );
  return baseOptions(inputs, 'Temperature [F]', [min, max], [
    { label: 'Temperature', color: 'red', data: series.temperature },
    { label: 'Apparent', color: 'orange', data: series.apparentTemperature },
  ]);
}

export function rainOptions(inputs: ChartInputs) {
  const { series } = inputs.forecast;
  return baseOptions(inputs, '%', [0, 100], [
    { label: 'Humidity', color: 'brown', data: series.humidity },
    { label: 'Precipitation', color: 'blue', data: series.precipitation },
    { label: 'Cloud Cover', color: 'grey', data: series.skyCover },
  ]);
}

export function windOptions(inputs: ChartInputs) {
  const { series } = inputs.forecast;
  const max = roundToMultiple(Math.max(...(series.windSpeed as number[])), 2, 'up');
  return baseOptions(
    inputs,
    'Speed [mph]',
    [0, max],
    [{ label: 'Speed', color: 'purple', data: series.windSpeed }],
    [windArrowPlugin(inputs.xs, series.windSpeed, series.windDirection)],
    false, // arrows stand in for the point markers
  );
}
