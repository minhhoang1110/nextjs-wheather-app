import { SearchedCityObject } from "@/types/search";
import React from "react";
import { useSelector } from "react-redux";
import { useForecast } from "@/hooks";
import { Collapse } from "antd";
import { MainData, Weather, WindData } from "@/types/api";
import styles from "../../styles/Forecast.module.css";
import WeatherIcon from "../WeatherIcon";
const { Panel } = Collapse;
const Forecast: React.FC = () => {
  const searchedValue: SearchedCityObject = useSelector(
    (state: any) => state.searchedCityDataReducer
  );
  const { forecast, forecastLoading } = useForecast(searchedValue);
  const showPanelHeader = (
    time: string,
    data: MainData,
    weather: Weather
  ): JSX.Element => {
    return (
      <div className={styles.panelHeader}>
        <div>
          <div className={styles.weatherIconWrapper}>
            <WeatherIcon icon={weather.icon || ""} size="small" />
          </div>
          <span className={styles.timeLabel}>{time}</span>
        </div>
        <div>
          <span
            className={styles.weatherDesciption}
          >{`${weather.main} (${weather.description})`}</span>
          <span
            className={styles.temp}
          >{`${data.temp_min}°C/${data.temp_max}°C`}</span>
        </div>
      </div>
    );
  };
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
  const showPanelBody = (main: MainData, wind: WindData): JSX.Element => {
    return (
      <div className={styles.panelBody}>
        {infomationWrapper("Temperature", "°C", main.temp)}
        {infomationWrapper("Feel like", "°C", main.feels_like)}
        {infomationWrapper("Humidity", "%", main.humidity)}
        {infomationWrapper("Pressure", "hPa", main.pressure)}
        {infomationWrapper("Sea Level", "hPa", main.sea_level)}
        {infomationWrapper("Wind", "m/s", wind.speed)}
      </div>
    );
  };
  if (forecastLoading) return <></>;
  return (
    <Collapse accordion className={styles.forecastContainer}>
      {forecast &&
        forecast.list.length > 0 &&
        forecast.list.map((item, index) => (
          <Panel
            key={index}
            header={showPanelHeader(item.dt_txt, item.main, item.weather[0])}
          >
            {showPanelBody(item.main, item.wind)}
          </Panel>
        ))}
    </Collapse>
  );
};
export default Forecast;
