import React, { useEffect, useState } from "react";
import styles from "../../styles/SearchCities.module.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoDBCitiesApis } from "@/apis";
import { GeoDBCitiesParams } from "@/types/api";
const SearchCities: React.FC = () => {
  const [search, setSearch] = useState(null);
  const loadOptions = async (inputValue: any) => {
    const params: GeoDBCitiesParams = {
      minPopulation: "1000000",
      namePrefix: inputValue,
    };
    const res = await geoDBCitiesApis.getList(params);
    return {
      options: res.data.data.map((city: any) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className={styles.select}
    />
  );
};
export default SearchCities;
