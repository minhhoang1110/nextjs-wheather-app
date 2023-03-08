import { SearchedCityObject } from "./search";

export interface Action {
  type: string;
  payload: SearchedCityObject;
}
