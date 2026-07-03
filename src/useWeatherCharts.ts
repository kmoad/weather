import { useCallback, useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { computeNightRanges, rainConfig, tempConfig, windConfig, type ChartRange } from './charts';
import type { Forecast } from './types';

/**
 * Builds and manages the three synchronized Chart.js instances for a forecast.
 * Returns canvas refs to mount, plus a `setTimeRange` to snap the visible window.
 */
export function useWeatherCharts(forecast: Forecast | null, numHours: number, titleSize: number) {
  const tempRef = useRef<HTMLCanvasElement>(null);
  const rainRef = useRef<HTMLCanvasElement>(null);
  const windRef = useRef<HTMLCanvasElement>(null);
  const chartsRef = useRef<Chart[]>([]);
  const isUpdatingRef = useRef(false);

  useEffect(() => {
    if (!forecast) return;
    const canvases = [tempRef.current, rainRef.current, windRef.current];
    if (canvases.some((c) => c === null)) return;

    // Mirror one chart's x-range onto the others.
    const syncFrom = (sourceIdx: number, range: ChartRange) => {
      if (isUpdatingRef.current) return;
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
      tempConfig({ ...shared, onRange: (r) => syncFrom(0, r) }),
      rainConfig({ ...shared, onRange: (r) => syncFrom(1, r) }),
      windConfig({ ...shared, onRange: (r) => syncFrom(2, r) }),
    ];
    const charts = canvases.map((canvas, i) => new Chart(canvas!, configs[i]));
    chartsRef.current = charts;

    return () => {
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
