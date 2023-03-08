import React, { useState } from "react";
import styles from "../../styles/SearchCities.module.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoDBCitiesApis } from "@/apis";
import { GeoDBCitiesParams, GeoDBCity } from "@/types/api";
import { MIN_POPULATION } from "@/configs/constants";
import { SearchedCityObject } from "@/types/search";
import { useDispatch } from "react-redux";
import { searchedCityDataAction } from "@/actions";
const SearchCities: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<SearchedCityObject | null>(null);
  const loadOptions = async (inputValue: string) => {
    const params: GeoDBCitiesParams = {
      minPopulation: MIN_POPULATION,
      namePrefix: inputValue,
    };
    const res = await geoDBCitiesApis.getList(params);
    const cities: GeoDBCity[] = res.data.data as GeoDBCity[];
    return {
      options: cities.map((city: GeoDBCity) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData: SearchedCityObject | null) => {
    setSearch(searchData);
    if (searchData) dispatch(searchedCityDataAction.setValue(searchData));
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
