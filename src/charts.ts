import {
  Chart,
  registerables,
  type ChartConfiguration,
  type ChartType,
  type Scale,
} from 'chart.js';
import chartjsPluginAnnotation from 'chartjs-plugin-annotation';
import chartjsPluginZoom from 'chartjs-plugin-zoom';
import * as SunCalc from 'suncalc';
import type { Forecast } from './types';

// Let charts read per-instance night-shading ranges off their plugin options.
declare module 'chart.js' {
  interface PluginOptionsByType<TType extends ChartType> {
    nightShading?: { ranges?: [number, number][] };
    // Keep TType referenced so the augmentation stays generic-compatible.
    _nightShadingMarker?: TType;
  }
}

const NIGHT_SHADING_PLUGIN = {
  id: 'nightShading',
  beforeDatasetsDraw(chart: Chart, _args: unknown, options: { ranges?: [number, number][] }) {
    const ranges = options.ranges;
    if (!ranges || !ranges.length) return;
    const {
      ctx,
      chartArea,
      scales: { x },
    } = chart;
    ctx.save();
    ctx.fillStyle = 'rgba(37, 61, 99, 0.07)';
    const halfStep = (x.getPixelForValue(1) - x.getPixelForValue(0)) / 2;
    for (const [s, e] of ranges) {
      const xStart = x.getPixelForValue(s) - halfStep;
      const xEnd = x.getPixelForValue(e - 1) + halfStep;
      const clampedStart = Math.max(xStart, chartArea.left);
      const clampedEnd = Math.min(xEnd, chartArea.right);
      if (clampedEnd > clampedStart) {
        ctx.fillRect(clampedStart, chartArea.top, clampedEnd - clampedStart, chartArea.bottom - chartArea.top);
      }
    }
    ctx.restore();
  },
};

Chart.register(chartjsPluginAnnotation, chartjsPluginZoom, NIGHT_SHADING_PLUGIN, ...registerables);

// Shared visual language for all three charts.
const INK = '#0b1220';
const MUTED = '#5b6b7f';
const GRID = '#e7edf4';

const SERIES = {
  temperature: '#e11d48', // rose
  apparent: '#f59e0b', // amber
  humidity: '#0d9488', // teal
  precipitation: '#2563eb', // blue
  cloud: '#94a3b8', // slate
  wind: '#7c3aed', // violet
};

Chart.defaults.color = MUTED;
Chart.defaults.borderColor = GRID;
Chart.defaults.font.family = "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
Chart.defaults.plugins.legend.labels.color = INK;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.boxWidth = 8;
Chart.defaults.plugins.legend.labels.boxHeight = 8;

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

/** x-axis tick formatter: label the first tick and every 3rd hour. */
function makeTick(this: Scale, value: string | number): string | undefined {
  const date = this.getLabelForValue(value as number) as unknown as Date;
  if (value === 0 || date.getHours() % 3 === 0) {
    return makeLabel(date);
  }
  return undefined;
}

export interface ChartRange {
  min: number;
  max: number;
}

interface BaseOptions {
  forecast: Forecast;
  numHours: number;
  titleSize: number;
  nightRanges: [number, number][];
  onRange: (range: ChartRange) => void;
}

const TENSION = 0.4;
const POINT_RADIUS = 2.5;

type LineConfig = ChartConfiguration<'line', (number | null)[], Date>;

function baseOptions({ forecast, numHours, nightRanges, onRange }: BaseOptions): LineConfig['options'] {
  const { startTime } = forecast.series;
  const syncRange = (context: { chart: Chart }) =>
    onRange({ min: context.chart.scales.x.min, max: context.chart.scales.x.max });
  return {
    maintainAspectRatio: false,
    plugins: {
      nightShading: { ranges: nightRanges },
      title: { display: false },
      zoom: {
        zoom: {
          wheel: { enabled: true, speed: 0.05 },
          pinch: { enabled: true },
          mode: 'x',
          onZoom: syncRange,
        },
        pan: { enabled: true, mode: 'x', onPan: syncRange },
      },
    },
    scales: {
      x: {
        // Faithful to the original: category labels are Date objects.
        min: startTime[0] as unknown as number,
        max: startTime[numHours - 1] as unknown as number,
        grid: { color: GRID },
        border: { color: GRID },
        ticks: {
          color: MUTED,
          font: { family: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
          maxRotation: 0,
          autoSkipPadding: 12,
          callback: makeTick,
        },
      },
    },
  };
}

/** Shared y-axis styling so all three charts match. */
function yScale(text: string, min: number, max: number) {
  return {
    title: { display: true, text, color: MUTED, font: { weight: 600 } },
    min,
    max,
    grid: { color: GRID },
    border: { color: GRID },
    ticks: { color: MUTED },
  };
}

export function tempConfig(opts: BaseOptions): LineConfig {
  const { series } = opts.forecast;
  const base = baseOptions(opts)!;
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
  return {
    type: 'line',
    data: {
      labels: series.startTime,
      datasets: [
        { label: 'Temperature', data: series.temperature, fill: false, borderColor: SERIES.temperature, backgroundColor: SERIES.temperature, tension: TENSION, pointRadius: POINT_RADIUS },
        { label: 'Apparent', data: series.apparentTemperature, fill: false, borderColor: SERIES.apparent, backgroundColor: SERIES.apparent, tension: TENSION, pointRadius: POINT_RADIUS },
      ],
    },
    options: {
      ...base,
      scales: {
        ...base.scales,
        y: yScale('Temperature [F]', min, max),
      },
    },
  };
}

export function rainConfig(opts: BaseOptions): LineConfig {
  const { series } = opts.forecast;
  const base = baseOptions(opts)!;
  return {
    type: 'line',
    data: {
      labels: series.startTime,
      datasets: [
        { label: 'Humidity', data: series.humidity, fill: false, borderColor: SERIES.humidity, backgroundColor: SERIES.humidity, tension: TENSION, pointRadius: POINT_RADIUS },
        { label: 'Precipitation', data: series.precipitation, fill: false, borderColor: SERIES.precipitation, backgroundColor: SERIES.precipitation, tension: TENSION, pointRadius: POINT_RADIUS },
        { label: 'Cloud Cover', data: series.skyCover, fill: false, borderColor: SERIES.cloud, backgroundColor: SERIES.cloud, tension: TENSION, pointRadius: POINT_RADIUS },
      ],
    },
    options: {
      ...base,
      scales: {
        ...base.scales,
        y: yScale('%', 0, 100),
      },
    },
  };
}

export function windConfig(opts: BaseOptions): LineConfig {
  const { series } = opts.forecast;
  const base = baseOptions(opts)!;
  const windPointerIcon = makeArrowIcon(30, SERIES.wind);
  const max = roundToMultiple(Math.max(...(series.windSpeed as number[])), 2, 'up');
  return {
    type: 'line',
    data: {
      labels: series.startTime,
      datasets: [
        {
          label: 'Speed',
          data: series.windSpeed,
          borderColor: SERIES.wind,
          backgroundColor: SERIES.wind,
          tension: TENSION,
          pointStyle: windPointerIcon,
          pointRotation: series.windDirection.map((d) => (d ?? 0) - 180),
        },
      ],
    },
    options: {
      ...base,
      scales: {
        ...base.scales,
        y: yScale('Speed [mph]', 0, max),
      },
    },
  };
}
