import { CityI } from "../city";

export interface CityState {
  cities: Array<CityI>;
  error: Error | null;
}

interface GetCitiesAction {
  type: typeof GET_CITIES;
  payload: Array<CityI>;
}

interface ErrorCitiesAction {
  type: typeof ERROR_CITIES;
  payload: Error;
}

export type CityActionTypes = GetCitiesAction | ErrorCitiesAction;
