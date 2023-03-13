import { weatherApis } from "@/apis";
import { ForecastData, ForecastItem, WeatherParams } from "@/types/api";
import { SearchedCityObject } from "@/types/search";
import { useEffect, useState } from "react";

const useForecast = (searchedValue: SearchedCityObject) => {
  const [forecastLoading, setForecastLoading] = useState<boolean>(true);
  const [forecast, setForecast] = useState<ForecastData>();
  const loadForecast = async (value: string) => {
    const params: WeatherParams = {
      lat: parseInt(value.split(" ")[0]),
      lon: parseInt(value.split(" ")[1]),
      appid: String(process.env.NEXT_PUBLIC_OPEN_WHEATHER_KEY),
      units: "metric",
    };
    const res = await weatherApis.getForecast(params);
    const data: ForecastData = res.data;
    const list: ForecastItem[] = data.list.slice(0, 20);
    setForecast({ ...data, list });
    setForecastLoading(false);
  };
  useEffect(() => {
    if (searchedValue.label && searchedValue.value) {
      loadForecast(searchedValue.value);
    }
  }, [searchedValue]);
  return {
    forecast,
    setForecast,
    forecastLoading,
    setForecastLoading,
  };
};
export default useForecast;
