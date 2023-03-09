import { convertParams } from "@/helpers/apiParam";
import { WeatherParams } from "@/types/api";
import axios, { AxiosRequestConfig } from "axios";
const getList = (params: WeatherParams) => {
  const options: AxiosRequestConfig<any> = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_OPEN_WHEATHER_API_URI}${convertParams(
      params
    )}`,
  };
  return axios.request(options);
};
const weatherApis = { getList };
export default weatherApis;
