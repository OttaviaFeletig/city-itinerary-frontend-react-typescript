import { CityI } from "../../../@types/index";

export const GET_CITIES = "GET_CITIES";
export const ERROR_CITIES = "ERROR_CITIES";

export interface CityState {
  cities: CityI[];
  error: Error | null;
}

interface GetCitiesAction {
  type: typeof GET_CITIES;
  payload: CityI;
}

interface ErrorCitiesAction {
  type: typeof ERROR_CITIES;
  payload: Error;
}

export type CityActionTypes = GetCitiesAction | ErrorCitiesAction;
