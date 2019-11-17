import { CityI } from "../city";
import { Action } from "redux";
import { GET_CITIES, ERROR_CITIES } from "../../store/constants";
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

export type CityActionTypes = GetCitiesAction | ErrorCitiesAction;
