import { GET_CITIES, ERROR_CITIES, CityActionTypes } from "../types/city/index";
import { CityI } from "../../@types/index";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Action } from "redux";
const getCitiesAction = (cities: CityI): CityActionTypes => {
  return {
    type: GET_CITIES,
    payload: cities
  };
};
const errorCitiesAction = (error: Error): CityActionTypes => {
  return {
    type: ERROR_CITIES,
    payload: error
  };
};
export const getCities = (): ThunkAction<
  void,
  {},
  null,
  Action<string>
> => async dispatch => {
  try {
    const res = await fetch("http://localhost:5000/api/cities/");
    let data = await res.json();
    console.log("data", data);
    getCitiesAction(data);
  } catch (error) {
    errorCitiesAction(error);
  }
};
