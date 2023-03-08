import { convertParams } from "@/helpers/apiParam";
import { GeoDBCitiesParams } from "@/types/api";
import axios, { AxiosRequestConfig } from "axios";
const getList = (params: GeoDBCitiesParams) => {
  const options: AxiosRequestConfig<any> = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_GEODB_API_URI}/cities${convertParams(
      params
    )}`,
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
    },
  };
  // const res = await axios.request(options);
  return axios.request(options);
};
const geoDBCitiesApis = { getList };
export default geoDBCitiesApis;
