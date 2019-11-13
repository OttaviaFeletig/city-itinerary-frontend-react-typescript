import {
  GET_CITIES,
  ERROR_CITIES,
  CityActionTypes,
  CityState
} from "../types/city/index";
import { CityI } from "../../@types/index";

const initState: CityState = {
  cities: [],
  error: null
};

const cityReducer = (state = initState, action: CityActionTypes): CityState => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: [...state.cities, action.payload]
      };
    case ERROR_CITIES:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default cityReducer;
