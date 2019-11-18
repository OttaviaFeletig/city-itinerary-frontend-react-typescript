import {
  GetCitiesAction,
  ErrorCitiesAction,
  PostCitiesAction
} from "../../@types/store/city";
import { GET_CITIES, ERROR_CITIES, POST_CITY } from "../constants";
import { CityI, CitiesT } from "../../@types/city";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import axios, { AxiosResponse } from "axios";
const getCitiesAction = (cities: CitiesT): GetCitiesAction => {
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
const postCityAction = (city: CityI): PostCitiesAction => {
  return {
    type: POST_CITY,
    payload: city
  };
};
export const getCities = (): ThunkAction<
  void,
  {},
  null,
  Action<string>
> => async dispatch => {
  try {
    const res: AxiosResponse<CitiesT> = await axios.get(
      "http://localhost:5000/api/cities/"
    );
    const { data }: { data: CitiesT } = res;
    // let {data}: CitiesT = await res;
    console.log("data", data);
    dispatch(getCitiesAction(data));
  } catch (error) {
    dispatch(errorCitiesAction(error));
  }
};
export const postCity = (
  newCity: CityI
): ThunkAction<void, {}, null, Action<string>> => async dispatch => {
  try {
    const res = await axios.post("http://localhost:5000/api/cities/", newCity);
    let { data }: { data: CityI } = await res;
    console.log("data", data);
    dispatch(postCityAction(data));
  } catch (error) {
    dispatch(errorCitiesAction(error));
  }
};
