export interface GeoDBCitiesParams {
  minPopulation: number;
  namePrefix: string;
}
export interface GeoDBCity {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  type: string;
  wikiDataId: string;
}
export interface WeatherParams {
  lat: number;
  lon: number;
  appid: string;
  units: "standard" | "metric" | "imperial";
}
export interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface WindData {
  speed: number;
  deg: number;
  gust: number;
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface WeatherData {
  coord: { lon: number; lat: number };
  weather: Weather[];
  base: string;
  main: MainData;
  visibility: number;
  wind: WindData;
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
interface City {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export interface ForecastItem {
  dt: number;
  main: MainData;
  weather: Weather[];
  clouds: { all: number };
  wind: WindData;
  visibility: number;
  pop: number;
  sys: { pod: string };
  dt_txt: string;
}
export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}
