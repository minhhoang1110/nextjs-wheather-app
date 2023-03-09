import { DEFAULT_CITY, DEFAULT_LAT, DEFAULT_LON } from "@/configs/constants";
import { Action } from "@/types/redux";
import { SearchedCityObject } from "@/types/search";
const initState: SearchedCityObject = {
  value: `${DEFAULT_LAT} ${DEFAULT_LON}`,
  label: DEFAULT_CITY,
};
const searchedCityDataReducer = (
  state: SearchedCityObject = initState,
  action: Action
) => {
  switch (action.type) {
    case "SETVALUE":
      return action.payload;
    default:
      return state;
  }
};
export default searchedCityDataReducer;
