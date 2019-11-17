import {
  CityActionTypes,
  GetCitiesAction,
  ErrorCitiesAction
} from "../../@types/store/city";
import { GET_CITIES, ERROR_CITIES } from "../constants";
import { CityI } from "../../@types/city";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
const getCitiesAction = (cities: Array<CityI>): GetCitiesAction => {
  console.log("cities in get cities action", cities);
  return {
    type: GET_CITIES,
    payload: cities
  };
};
const errorCitiesAction = (error: Error): ErrorCitiesAction => {
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
    dispatch(getCitiesAction(data));
  } catch (error) {
    dispatch(errorCitiesAction(error));
  }
};
