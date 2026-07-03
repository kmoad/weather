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

const NOON_LINE_COLOR = 'rgba(245, 158, 11, 0.55)'; // amber — sun overhead
const MIDNIGHT_LINE_COLOR = 'rgba(49, 46, 129, 0.35)'; // subtle indigo — dead of night

const NOON_MIDNIGHT_PLUGIN = {
  id: 'noonMidnightLines',
  beforeDatasetsDraw(chart: Chart) {
    const {
      ctx,
      chartArea,
      scales: { x },
    } = chart;
    const labels = chart.data.labels as Date[] | undefined;
    if (!labels || !labels.length) return;
    ctx.save();
    for (let i = 0; i < labels.length; i++) {
      const hour = labels[i].getHours();
      if (hour !== 0 && hour !== 12) continue;
      const isNoon = hour === 12;
      ctx.lineWidth = isNoon ? 1.25 : 1;
      const px = Math.round(x.getPixelForValue(i)) + 0.5;
      if (px < chartArea.left || px > chartArea.right) continue;
      ctx.strokeStyle = isNoon ? NOON_LINE_COLOR : MIDNIGHT_LINE_COLOR;
      ctx.beginPath();
      ctx.moveTo(px, chartArea.top);
      ctx.lineTo(px, chartArea.bottom);
      ctx.stroke();
    }
    ctx.restore();
  },
};

Chart.register(
  chartjsPluginAnnotation,
  chartjsPluginZoom,
  NIGHT_SHADING_PLUGIN,
  NOON_MIDNIGHT_PLUGIN,
  ...registerables,
);

// Shared visual language for all three charts.
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

/** Legend/unit descriptor for the compact HTML legend rendered above each chart. */
export interface ChartMeta {
  unit: string;
  series: { label: string; color: string }[];
}

export const CHART_META: Record<'temp' | 'rain' | 'wind', ChartMeta> = {
  temp: {
    unit: '°F',
    series: [
      { label: 'Temp', color: SERIES.temperature },
      { label: 'Apparent', color: SERIES.apparent },
    ],
  },
  rain: {
    unit: '%',
    series: [
      { label: 'Humidity', color: SERIES.humidity },
      { label: 'Precip', color: SERIES.precipitation },
      { label: 'Clouds', color: SERIES.cloud },
    ],
  },
  wind: {
    unit: 'mph',
    series: [{ label: 'Wind', color: SERIES.wind }],
  },
};

Chart.defaults.color = MUTED;
Chart.defaults.borderColor = GRID;
Chart.defaults.font.family = "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export function detectMobile(): boolean {
  // 0) Explicit override via ?mobile=1 / ?mobile=0 — lets us force either layout
  //    for testing (e.g. Playwright, which reports a desktop client hint).
  const override = new URLSearchParams(window.location.search).get('mobile');
  if (override === '1' || override === 'true') return true;
  if (override === '0' || override === 'false') return false;
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
  // `isZoom` distinguishes a zoom (span changed) from a pan (span unchanged).
  onRange: (range: ChartRange, isZoom: boolean) => void;
  // The three charts share one time axis; only the bottom one draws x labels.
  showXTicks: boolean;
}

const TENSION = 0.4;
const POINT_RADIUS = 2.5;

type LineConfig = ChartConfiguration<'line', (number | null)[], Date>;

function baseOptions({ forecast, numHours, nightRanges, onRange, showXTicks }: BaseOptions): LineConfig['options'] {
  const { startTime } = forecast.series;
  const emitRange = (isZoom: boolean) => (context: { chart: Chart }) =>
    onRange({ min: context.chart.scales.x.min, max: context.chart.scales.x.max }, isZoom);
  return {
    maintainAspectRatio: false,
    // Tap/hover anywhere to read every series at that hour.
    interaction: { mode: 'index', intersect: false },
    plugins: {
      nightShading: { ranges: nightRanges },
      legend: { display: false }, // replaced by a compact HTML legend
      title: { display: false },
      tooltip: {enabled: false,},
      zoom: {
        zoom: {
          wheel: { enabled: true, speed: 0.05 },
          pinch: { enabled: true },
          mode: 'x',
          onZoom: emitRange(true),
        },
        pan: { enabled: true, mode: 'x', onPan: emitRange(false) },
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
          display: showXTicks,
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

/** Shared y-axis styling so all three charts match. Unit lives in the HTML legend. */
function yScale(min: number, max: number, stepSize: number) {
  // Pin the axis width so all three plots start at the same x and stay
  // time-aligned, even though "110" is wider than "10".
  const fontSize = typeof Chart.defaults.font.size === 'number' ? Chart.defaults.font.size : 12;
  const axisWidth = fontSize * 2 + 14;
  return {
    min,
    max,
    afterFit: (scale: { width: number }) => {
      scale.width = axisWidth;
    },
    grid: { color: GRID },
    border: { color: GRID },
    ticks: { color: MUTED, stepSize, autoSkip: false, maxTicksLimit: 20 },
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
        y: yScale(min, max, 5),
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
        y: yScale(0, 100, 10),
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
        y: yScale(0, max, 2),
      },
    },
  };
}
