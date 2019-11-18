import { CityI } from "../city";
import { Action } from "redux";
import { GET_CITIES, ERROR_CITIES, POST_CITY } from "../../store/constants";
export interface CityState {
  cities: Array<CityI>;
  error: Error | null;
}

export interface GetCitiesAction {
  type: typeof GET_CITIES;
  payload: Array<CityI>;
}

export interface ErrorCitiesAction {
  type: typeof ERROR_CITIES;
  payload: Error;
}

export interface PostCitiesAction {
  type: typeof POST_CITY;
  payload: CityI;
}

export type CityActionTypes =
  | GetCitiesAction
  | ErrorCitiesAction
  | PostCitiesAction;
