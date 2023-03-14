import { SearchedCityObject } from "@/types/search";
import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/CurrentWeather.module.css";
import { useCurrentWeather } from "@/hooks";
import WeatherIcon from "../WeatherIcon";
import moment from "moment-timezone";
import { DEFAULT_TIMEZONE, TIME_FORMAT } from "@/configs/constants";
const CurrentWeather: React.FC = () => {
  const searchedValue: SearchedCityObject = useSelector(
    (state: any) => state.searchedCityDataReducer
  );
  const { weather, weatherLoading } = useCurrentWeather(searchedValue);
  const infomationWrapper = (
    key: string,
    unit: string,
    value: string | number
  ): JSX.Element => {
    return (
      <div className={styles.infomationWrapper}>
        <p className={styles.infomationKey}>{key}</p>
        <p className={styles.infomationValue}>
          {value}
          {unit}
        </p>
      </div>
    );
  };
  if (weatherLoading) return <></>;
  return (
    <div className={styles.currentWeatherContainer}>
      <Card className={styles.currentWeather}>
        <div className={styles.cityName}>{searchedValue.label}</div>
        <div className={styles.weather}>
          {weather && weather.weather[0].main},{" "}
          {weather && weather.weather[0].description}
        </div>
        <div className={styles.dateTime}>
          {moment
            .unix(weather?.dt || 0)
            .tz(DEFAULT_TIMEZONE)
            .format(TIME_FORMAT)}
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.degree}>
            <div>{weather && Math.round(weather.main.temp)}°C</div>
            <div className={styles.weatherIconWrapper}>
              <WeatherIcon icon={weather?.weather[0].icon || ""} />
            </div>
          </div>
          <div>
            <div>
              {infomationWrapper(
                "Feel like",
                "°C",
                (weather && weather.main.feels_like) || ""
              )}
              {infomationWrapper(
                "Min temperature",
                "°C",
                (weather && weather.main.temp_min) || ""
              )}
              {infomationWrapper(
                "Max temperature",
                "°C",
                (weather && weather.main.temp_max) || ""
              )}
              {infomationWrapper(
                "Wind",
                "m/s",
                (weather && weather.wind.speed) || ""
              )}
              {infomationWrapper(
                "Humidity",
                "%",
                (weather && weather.main.humidity) || ""
              )}
              {infomationWrapper(
                "Pressure",
                "hPa",
                (weather && weather.main.pressure) || ""
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default CurrentWeather;
