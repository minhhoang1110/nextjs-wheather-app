import { convertParams } from "@/helpers/apiParam";
import { WeatherParams } from "@/types/api";
import axios, { AxiosRequestConfig } from "axios";
const getList = (params: WeatherParams) => {
  const options: AxiosRequestConfig<any> = {
    method: "GET",
    url: `${
      process.env.NEXT_PUBLIC_OPEN_WHEATHER_API_URI
    }/weather${convertParams(params)}`,
  };
  return axios.request(options);
};
const getForecast = (params: WeatherParams) => {
  const options: AxiosRequestConfig<any> = {
    method: "GET",
    url: `${
      process.env.NEXT_PUBLIC_OPEN_WHEATHER_API_URI
    }/forecast${convertParams(params)}`,
  };
  return axios.request(options);
};
const weatherApis = { getList, getForecast };
export default weatherApis;
