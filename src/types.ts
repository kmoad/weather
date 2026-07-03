export interface Coords {
  lat: number;
  lon: number;
}

export interface ForecastLocation extends Coords {
  city: string;
  state: string;
}

export interface ForecastSeries {
  startTime: Date[];
  temperature: (number | null)[];
  heatIndex: (number | null)[];
  apparentTemperature: (number | null)[];
  humidity: (number | null)[];
  precipitation: (number | null)[];
  skyCover: (number | null)[];
  windSpeed: (number | null)[];
  windGust: (number | null)[];
  windDirection: (number | null)[];
}

export interface Forecast {
  location: ForecastLocation;
  series: ForecastSeries;
}

/** A single value from an NWS forecast grid property. */
export interface GridValue {
  validTime: string;
  value: number | null;
}
