import {
  CityActionTypes,
  CityState,
  GetCitiesAction,
  ErrorCitiesAction
} from "../../@types/store/city";
import { GET_CITIES, ERROR_CITIES } from "../constants";

const initState: CityState = {
  cities: [],
  error: null
};

const cityReducer = (state = initState, action: CityActionTypes): CityState => {
  console.log("action", action.payload);
  console.log("state", state);
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload
      };
    case "ERROR_CITIES":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default cityReducer;
