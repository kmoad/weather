import { useEffect, useRef, useState } from 'react';
import 'uplot/dist/uPlot.min.css';
import { detectMobile } from './charts';
import { useWeatherCharts } from './useWeatherCharts';
import { geocodeLocation, getData, getPosition } from './weather';
import type { Coords, Forecast } from './types';
import './App.css';

const NUM_HOURS = 24;
const TIME_OPTIONS = [24, 48, 72];

const mobile = detectMobile();
const FONT_SIZE = mobile ? 28 : 16;
const TITLE_SIZE = mobile ? 40 : 24;

export default function App() {
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [title, setTitle] = useState('Getting location');
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const lastLocationTitle = useRef('');

  const { tempRef, rainRef, windRef, setTimeRange } = useWeatherCharts(
    forecast,
    NUM_HOURS,
    TITLE_SIZE,
    FONT_SIZE,
  );

  const loadForecast = async (coords: Coords) => {
    setTitle('Fetching forecast');
    const fcst = await getData(coords.lat, coords.lon);
    lastLocationTitle.current = `${fcst.location.city}, ${fcst.location.state}`;
    setTitle(lastLocationTitle.current);
    setError('');
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

  return (
    <div id="main">
      <div id="title">
        <div id="title-text">{title}</div>
        {error && <div id="status-text">{error}</div>}
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
        <button id="location-go" onClick={submitQuery}>
          Go
        </button>
        <button id="location-gps" onClick={useLocalLocation}>
          Local
        </button>
        {TIME_OPTIONS.map((hours) => (
          <div key={hours}>
            <button className="time-select" onClick={() => setTimeRange(hours)}>
              {hours}hr
            </button>
          </div>
        ))}
      </div>
      <div id="charts">
        <div className="chart-container" ref={tempRef} />
        <div className="chart-container" ref={rainRef} />
        <div className="chart-container" ref={windRef} />
      </div>
    </div>
  );
}
