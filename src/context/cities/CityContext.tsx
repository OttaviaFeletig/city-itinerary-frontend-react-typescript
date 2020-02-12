import React, { createContext, useState, useReducer, Props } from "react";
import axios, { AxiosResponse } from "axios";
import CitiesReducer from "./CityReducers";
import { CityContextActionTypes } from "../type";

const initCities: InitCitiesI = {
  cities: [],
  error: null
};
// interface CitiesContextI {
//   initCities: InitCitiesI;
//   getCities(): void;
// }
export const CitiesContext = createContext<InitCitiesI | any>({ initCities });

const CitiesContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(CitiesReducer, initCities);
  //   const [cities, setCities] = useState<CitiesT>(initCities.cities);
  //   const [error, setError] = useState<Error | null>(initCities.error);
  //   const [getCities, setGetCities] = useState(initCities.getCities);
  // const [getState, setState] = useState(initCities);
  // // const [initCities, dispatch] = useReducer(CitiesReducer, []);
  const getCities = async () => {
    try {
      const res: AxiosResponse<CitiesT> = await axios.get(
        "http://localhost:5000/api/cities/"
      );
      const { data }: { data: CitiesT } = res;

      dispatch({
        type: CityContextActionTypes.GET_CITIES,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: CityContextActionTypes.ERROR_CITIES,
        payload: error
      });
    }
  };
  const postCity = async (newCity: CityI) => {
    try {
      console.log("here");
      console.log(newCity);
      const res = await axios.post(
        "http://localhost:5000/api/cities/",
        newCity
      );
      console.log(res);
      let { data }: { data: CityI } = await res;
      console.log("data", data);
      dispatch({
        type: CityContextActionTypes.POST_CITY,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: CityContextActionTypes.ERROR_CITIES,
        payload: error
      });
    }
  };
  return (
    <CitiesContext.Provider value={{ state, getCities, postCity }}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesContextProvider;
