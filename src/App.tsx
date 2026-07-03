import { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import { CHART_META, detectMobile, type ChartMeta } from './charts';
import { useWeatherCharts } from './useWeatherCharts';
import { geocodeLocation, getData, getPosition } from './weather';
import type { Coords, Forecast } from './types';
import './App.css';

const NUM_HOURS = 24;
const TIME_OPTIONS = [24, 48, 72];

const mobile = detectMobile();
Chart.defaults.font.size = mobile ? 15 : 12;
const TITLE_SIZE = mobile ? 40 : 24;

/** Compact legend rendered above each chart: colored dots + labels, unit on the right. */
function ChartLegend({ meta }: { meta: ChartMeta }) {
  return (
    <div className="chart-legend">
      <div className="legend-items">
        {meta.series.map((s) => (
          <span className="legend-item" key={s.label}>
            <i className="legend-dot" style={{ background: s.color }} />
            {s.label}
          </span>
        ))}
      </div>
      <span className="legend-unit">{meta.unit}</span>
    </div>
  );
}

export default function App() {
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [title, setTitle] = useState('Getting location');
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  // `null` means the visible window no longer matches any preset (user zoomed/panned).
  const [range, setRange] = useState<number | null>(NUM_HOURS);
  const lastLocationTitle = useRef('');

  const { tempRef, rainRef, windRef, setTimeRange } = useWeatherCharts(
    forecast,
    NUM_HOURS,
    TITLE_SIZE,
    () => setRange(null),
  );

  const loadForecast = async (coords: Coords) => {
    setTitle('Fetching forecast');
    const fcst = await getData(coords.lat, coords.lon);
    lastLocationTitle.current = `${fcst.location.city}, ${fcst.location.state}`;
    setTitle(lastLocationTitle.current);
    setError('');
    setRange(NUM_HOURS);
    setForecast(fcst);
  };

  const submitQuery = async () => {
    const q = query.trim();
    if (!q) return;
    try {
      setTitle(`Looking up "${q}"`);
      const coords = await geocodeLocation(q);
      await loadForecast(coords);
      setQuery('');
    } catch (err) {
      setError(`Forecast lookup failed: ${(err as Error).message || 'unknown error'}`);
      setTitle(lastLocationTitle.current || 'Enter a location');
    }
  };

  const useLocalLocation = async () => {
    try {
      setTitle('Getting location');
      const pos = await getPosition();
      await loadForecast({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    } catch {
      setError('Forecast lookup failed: could not get location');
      setTitle(lastLocationTitle.current || 'Enter a location');
    }
  };

  // Default to local weather on first load.
  useEffect(() => {
    (async () => {
      try {
        setTitle('Getting location');
        const pos = await getPosition();
        await loadForecast({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      } catch {
        setTitle('Enter a location');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectRange = (hours: number) => {
    setRange(hours);
    setTimeRange(hours);
  };

  return (
    <div id="main">
      <header id="topbar">
        <div className="topbar-row">
          <h1 id="title-text">{title}</h1>
          <div className="segmented" role="group" aria-label="Forecast range">
            {TIME_OPTIONS.map((hours) => (
              <button
                key={hours}
                className={hours === range ? 'active' : ''}
                aria-pressed={hours === range}
                onClick={() => selectRange(hours)}
              >
                {hours}h
              </button>
            ))}
          </div>
        </div>
        <div className="search-row">
          <input
            id="location-input"
            type="text"
            placeholder="City, State or ZIP"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submitQuery();
            }}
          />
          <button className="btn btn-go" onClick={submitQuery}>
            Go
          </button>
          <button className="btn btn-gps" onClick={useLocalLocation}>
            Local
          </button>
        </div>
        {error && <div id="status-text">{error}</div>}
      </header>
      <div id="charts">
        <div className="chart-container">
          <ChartLegend meta={CHART_META.temp} />
          <div className="chart-canvas">
            <canvas ref={tempRef} />
          </div>
        </div>
        <div className="chart-container">
          <ChartLegend meta={CHART_META.rain} />
          <div className="chart-canvas">
            <canvas ref={rainRef} />
          </div>
        </div>
        <div className="chart-container">
          <ChartLegend meta={CHART_META.wind} />
          <div className="chart-canvas">
            <canvas ref={windRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
