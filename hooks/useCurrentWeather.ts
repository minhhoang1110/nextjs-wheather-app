import { weatherApis } from "@/apis";
import { WeatherData, WeatherParams } from "@/types/api";
import { SearchedCityObject } from "@/types/search";
import { useEffect, useState } from "react";

const useCurrentWeather = (searchedValue: SearchedCityObject) => {
  const [weatherLoading, setWeatherLoading] = useState<boolean>(true);
  const [weather, setWeather] = useState<WeatherData>();
  const loadWeather = async (value: string) => {
    const params: WeatherParams = {
      lat: parseInt(value.split(" ")[0]),
      lon: parseInt(value.split(" ")[1]),
      appid: String(process.env.NEXT_PUBLIC_OPEN_WHEATHER_KEY),
      units: "metric",
    };
    const res = await weatherApis.getList(params);
    const data = res.data;
    setWeather(data);
    setWeatherLoading(false);
  };
  useEffect(() => {
    if (searchedValue.label && searchedValue.value) {
      loadWeather(searchedValue.value);
    }
  }, [searchedValue]);
  return {
    weather,
    setWeather,
    weatherLoading,
    setWeatherLoading,
    loadWeather,
  };
};
export default useCurrentWeather;
