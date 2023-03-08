import { Action } from "@/types/redux";
import { SearchedCityObject } from "@/types/search";

const setValue = (value: SearchedCityObject): Action => {
  return { type: "SETVALUE", payload: value };
};
const searchedCityDataAction = { setValue };
export default searchedCityDataAction;
