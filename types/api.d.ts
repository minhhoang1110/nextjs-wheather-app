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
