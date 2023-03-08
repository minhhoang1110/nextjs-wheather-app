import { SearchedCityObject } from "@/types/search";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const CurrentWheather: React.FC = () => {
  const searchedValue: SearchedCityObject = useSelector(
    (state: any) => state.searchedCityDataReducer
  );
  useEffect(() => {
    if (searchedValue.label && searchedValue.value) {
      console.log(searchedValue);
    }
  }, [searchedValue]);
  return <div></div>;
};
export default CurrentWheather;
