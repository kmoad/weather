import convert from 'convert';
import type { Coords, Forecast, ForecastSeries, GridValue } from './types';

const unitConvert = convert as unknown as (
  value: number,
  unit: string,
) => { to: (unit: string) => number };

export async function getPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

/** Expand an NWS ISO8601 interval (e.g. "2024-01-01T00:00:00+00:00/PT3H") into its hourly start times. */
function expandTimeRange(timeRange: string): Date[] {
  const [timeString, validRange] = timeRange.split('/');
  const startDt = new Date(timeString);
  const numHours = parseInt(validRange.slice(2, -1));
  const rangeStarts: Date[] = [];
  for (let i = 0; i < numHours; i++) {
    rangeStarts.push(new Date(startDt.getTime() + i * (1000 * 60 * 60)));
  }
  return rangeStarts;
}

/** Flatten an NWS grid property into per-hour start times and values, dropping past hours. */
function expandGridSeries(gridProperty: GridValue[]): {
  startTimes: Date[];
  values: (number | null)[];
} {
  const curTime = new Date();
  curTime.setMinutes(0, 0, 0); // Include current hour
  const startTimes: Date[] = [];
  const values: (number | null)[] = [];
  for (const entry of gridProperty) {
    for (const rangeStart of expandTimeRange(entry.validTime)) {
      if (rangeStart >= curTime) {
        startTimes.push(rangeStart);
        values.push(entry.value);
      }
    }
  }
  return { startTimes, values };
}

const toFahrenheit = (p: number | null): number | null =>
  p === null ? p : unitConvert(p, 'celsius').to('fahrenheit');

const kmToMile = (p: number | null): number | null =>
  p === null ? p : unitConvert(p, 'kilometer').to('mile');

export async function getData(lat: number, lon: number): Promise<Forecast> {
  const NWSLocURL = `https://api.weather.gov/points/${lat},${lon}`;
  const NWSLocResponse = await fetch(NWSLocURL);
  const NWSLocData = await NWSLocResponse.json();
  const gridResponse = await fetch(NWSLocData.properties.forecastGridData);
  const gridData = await gridResponse.json();
  const gridProps = gridData.properties;

  const tempSeries = expandGridSeries(gridProps.temperature.values);
  const series: ForecastSeries = {
    startTime: tempSeries.startTimes,
    temperature: tempSeries.values.map(toFahrenheit),
    heatIndex: expandGridSeries(gridProps.heatIndex.values).values.map(toFahrenheit),
    apparentTemperature: expandGridSeries(gridProps.apparentTemperature.values).values.map(
      toFahrenheit,
    ),
    humidity: expandGridSeries(gridProps.relativeHumidity.values).values,
    precipitation: expandGridSeries(gridProps.probabilityOfPrecipitation.values).values,
    skyCover: expandGridSeries(gridProps.skyCover.values).values,
    windSpeed: expandGridSeries(gridProps.windSpeed.values).values.map(kmToMile),
    windGust: expandGridSeries(gridProps.windGust.values).values.map(kmToMile),
    windDirection: expandGridSeries(gridProps.windDirection.values).values,
  };

  // Truncate every series to the temperature series' length
  const length = series.startTime.length;
  for (const key of Object.keys(series) as (keyof ForecastSeries)[]) {
    series[key].length = length;
  }

  return {
    location: {
      city: NWSLocData.properties.relativeLocation.properties.city,
      state: NWSLocData.properties.relativeLocation.properties.state,
      lat,
      lon,
    },
    series,
  };
}

export async function geocodeLocation(query: string): Promise<Coords> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    query,
  )}&format=json&limit=1&countrycodes=us`;
  const resp = await fetch(url);
  const data = await resp.json();
  if (!data.length) {
    throw new Error(`No results for "${query}"`);
  }
  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon),
  };
}
