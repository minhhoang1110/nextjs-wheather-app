import { combineReducers } from "@reduxjs/toolkit";
import searchedCityDataReducer from "./searchedCityData";
const reducers = combineReducers({
  searchedCityDataReducer,
});
export default reducers;
