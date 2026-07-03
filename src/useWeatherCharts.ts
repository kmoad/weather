import { useCallback, useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { computeNightRanges, rainConfig, tempConfig, windConfig, type ChartRange } from './charts';
import type { Forecast } from './types';

/**
 * Builds and manages the three synchronized Chart.js instances for a forecast.
 * Returns canvas refs to mount, plus a `setTimeRange` to snap the visible window.
 *
 * `onManualRange` fires whenever the user changes the visible x-range directly
 * (zoom, pan, pinch, or arrow keys) — but not when `setTimeRange` is called —
 * so the caller can clear any active preset selection.
 */
export function useWeatherCharts(
  forecast: Forecast | null,
  numHours: number,
  titleSize: number,
  onManualRange?: () => void,
) {
  const tempRef = useRef<HTMLCanvasElement>(null);
  const rainRef = useRef<HTMLCanvasElement>(null);
  const windRef = useRef<HTMLCanvasElement>(null);
  const chartsRef = useRef<Chart[]>([]);
  const isUpdatingRef = useRef(false);
  const onManualRangeRef = useRef(onManualRange);
  onManualRangeRef.current = onManualRange;

  useEffect(() => {
    if (!forecast) return;
    const canvases = [tempRef.current, rainRef.current, windRef.current];
    if (canvases.some((c) => c === null)) return;

    // Mirror one chart's x-range onto the others.
    const syncFrom = (sourceIdx: number, range: ChartRange, isZoom: boolean) => {
      if (isUpdatingRef.current) return;
      // Only a zoom changes the visible span; a pan keeps the same time range,
      // so the active preset should survive panning.
      if (isZoom) onManualRangeRef.current?.();
      isUpdatingRef.current = true;
      chartsRef.current.forEach((chart, i) => {
        if (i !== sourceIdx) {
          chart.options.scales!.x!.min = range.min;
          chart.options.scales!.x!.max = range.max;
          chart.update('none');
        }
      });
      isUpdatingRef.current = false;
    };

    const nightRanges = computeNightRanges(
      forecast.series.startTime,
      forecast.location.lat,
      forecast.location.lon,
    );
    const shared = { forecast, numHours, titleSize, nightRanges };
    const configs = [
      tempConfig({ ...shared, showXTicks: false, onRange: (r, z) => syncFrom(0, r, z) }),
      rainConfig({ ...shared, showXTicks: false, onRange: (r, z) => syncFrom(1, r, z) }),
      windConfig({ ...shared, showXTicks: true, onRange: (r, z) => syncFrom(2, r, z) }),
    ];
    const charts = canvases.map((canvas, i) => new Chart(canvas!, configs[i]));
    chartsRef.current = charts;

    // Arrow-key zoom/pan: Left/Right pan the time axis, Up/Down zoom it.
    // Applying the action to the first chart triggers its onPan/onZoom
    // callback, which calls syncFrom to mirror the new range onto the rest.
    const PAN_PX = 50;
    const ZOOM_FACTOR = 1.1;
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const active = document.activeElement as HTMLElement | null;
      const isTyping = (el: HTMLElement | null) => el?.tagName === 'INPUT' || el?.tagName === 'TEXTAREA';
      if (isTyping(target) || isTyping(active)) return;

      const [chart] = chartsRef.current;
      if (!chart) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          chart.pan({ x: PAN_PX });
          break;
        case 'ArrowRight':
          event.preventDefault();
          chart.pan({ x: -PAN_PX });
          break;
        case 'ArrowUp':
          event.preventDefault();
          chart.zoom({ x: ZOOM_FACTOR });
          break;
        case 'ArrowDown':
          event.preventDefault();
          chart.zoom({ x: 1 / ZOOM_FACTOR });
          break;
        default:
          return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      charts.forEach((c) => c.destroy());
      chartsRef.current = [];
    };
  }, [forecast, numHours, titleSize]);

  const setTimeRange = useCallback((hours: number) => {
    for (const chart of chartsRef.current) {
      chart.options.scales!.x!.min = 0;
      chart.options.scales!.x!.max = hours;
      chart.update('none');
    }
  }, []);

  return { tempRef, rainRef, windRef, setTimeRange };
}
