import { Action } from "@/types/redux";
import { SearchedCityObject } from "@/types/search";
const initState: SearchedCityObject = {
  label: "",
  value: "",
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
