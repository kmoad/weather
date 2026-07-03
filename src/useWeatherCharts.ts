import { useCallback, useEffect, useRef } from 'react';
import uPlot from 'uplot';
import {
  computeNightRanges,
  rainOptions,
  tempOptions,
  toUnixSeconds,
  windOptions,
  type ChartInputs,
} from './charts';
import type { Forecast } from './types';

let syncCounter = 0;

/**
 * Builds and manages the three synchronized uPlot instances for a forecast.
 * Returns container refs to mount, plus a `setTimeRange` to snap the visible window.
 */
export function useWeatherCharts(
  forecast: Forecast | null,
  numHours: number,
  titleSize: number,
  fontSize: number,
) {
  const tempRef = useRef<HTMLDivElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);
  const windRef = useRef<HTMLDivElement>(null);
  const chartsRef = useRef<uPlot[]>([]);
  const xsRef = useRef<number[]>([]);

  useEffect(() => {
    if (!forecast) return;
    const containers = [tempRef.current, rainRef.current, windRef.current];
    if (containers.some((c) => c === null)) return;

    const xs = toUnixSeconds(forecast.series.startTime);
    xsRef.current = xs;

    // Mirror any x-range change onto every chart, guarded against feedback loops.
    let ready = false;
    let syncing = false;
    const applyXScale = (min: number, max: number) => {
      if (syncing || !ready) return;
      syncing = true;
      for (const chart of chartsRef.current) {
        chart.setScale('x', { min, max });
      }
      syncing = false;
    };

    const nightRanges = computeNightRanges(
      forecast.series.startTime,
      forecast.location.lat,
      forecast.location.lon,
    );
    const syncKey = `weather-sync-${syncCounter++}`;
    uPlot.sync(syncKey);

    const shared: ChartInputs = {
      forecast,
      xs,
      numHours,
      titleSize,
      fontSize,
      nightRanges,
      syncKey,
      onXScale: applyXScale,
    };

    const builders = [tempOptions, rainOptions, windOptions];
    const charts = containers.map((container, i) => {
      const { opts, data } = builders[i](shared);
      const rect = container!.getBoundingClientRect();
      opts.width = Math.max(rect.width, 1);
      opts.height = Math.max(rect.height, 1);
      return new uPlot(opts, data, container!);
    });
    chartsRef.current = charts;
    ready = true;

    // Default view: first `numHours` hours from the series start.
    applyXScale(xs[0], xs[Math.min(numHours - 1, xs.length - 1)]);

    // Keep uPlot sized to its (flex/grid) container.
    const observers = containers.map((container, i) => {
      const ro = new ResizeObserver(() => {
        const rect = container!.getBoundingClientRect();
        charts[i].setSize({ width: Math.max(rect.width, 1), height: Math.max(rect.height, 1) });
      });
      ro.observe(container!);
      return ro;
    });

    return () => {
      observers.forEach((ro) => ro.disconnect());
      charts.forEach((c) => c.destroy());
      chartsRef.current = [];
    };
  }, [forecast, numHours, titleSize, fontSize]);

  const setTimeRange = useCallback((hours: number) => {
    const xs = xsRef.current;
    if (!xs.length) return;
    const min = xs[0];
    const max = xs[Math.min(hours - 1, xs.length - 1)];
    for (const chart of chartsRef.current) {
      chart.setScale('x', { min, max });
    }
  }, []);

  return { tempRef, rainRef, windRef, setTimeRange };
}
