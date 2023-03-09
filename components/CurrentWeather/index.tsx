import { SearchedCityObject } from "@/types/search";
import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/CurrentWeather.module.css";
import { WeatherData, WeatherParams } from "@/types/api";
import { weatherApis } from "@/apis";
const CurrentWeather: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [weather, setWeater] = useState<WeatherData>();
  const searchedValue: SearchedCityObject = useSelector(
    (state: any) => state.searchedCityDataReducer
  );
  useEffect(() => {
    const loadWeather = async (value: string) => {
      const params: WeatherParams = {
        lat: parseInt(value.split(" ")[0]),
        lon: parseInt(value.split(" ")[1]),
        appid: String(process.env.NEXT_PUBLIC_OPEN_WHEATHER_KEY),
        units: "metric",
      };
      const res = await weatherApis.getList(params);
      const data = res.data;
      setWeater(data);
      setLoading(false);
    };
    if (searchedValue.label && searchedValue.value) {
      loadWeather(searchedValue.value);
    }
  }, [searchedValue]);
  if (loading) return <></>;
  return (
    <div className={styles.currentWeatherContainer}>
      <Card className={styles.currentWeather}>
        <div className={styles.cityName}>{searchedValue.label}</div>
        <div className={styles.weather}>
          {weather && weather.weather[0].main},{" "}
          {weather && weather.weather[0].description}
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.degree}>
            {weather && Math.round(weather.main.temp)}°C
          </div>
          <div>
            <div className={styles.detailTitle}>Details</div>
            <div>
              <div className={styles.infomationWrapper}>
                <p className={styles.infomationKey}>Feel like</p>
                <p className={styles.infomationValue}>
                  {weather && weather.main.feels_like}°C
                </p>
              </div>
              <div className={styles.infomationWrapper}>
                <p className={styles.infomationKey}>Min temperature</p>
                <p className={styles.infomationValue}>
                  {weather && weather.main.temp_min}°C
                </p>
              </div>
              <div className={styles.infomationWrapper}>
                <p className={styles.infomationKey}>Max temperature</p>
                <p className={styles.infomationValue}>
                  {weather && weather.main.temp_max}°C
                </p>
              </div>
              <div className={styles.infomationWrapper}>
                <p className={styles.infomationKey}>Wind</p>
                <p className={styles.infomationValue}>
                  {weather && weather.wind.speed} m/s
                </p>
              </div>
              <div className={styles.infomationWrapper}>
                <p className={styles.infomationKey}>Humidity</p>
                <p className={styles.infomationValue}>
                  {weather && weather.main.humidity}%
                </p>
              </div>
              <div className={styles.infomationWrapper}>
                <p className={styles.infomationKey}>Pressure</p>
                <p className={styles.infomationValue}>
                  {weather && weather.main.pressure}hPa
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default CurrentWeather;
