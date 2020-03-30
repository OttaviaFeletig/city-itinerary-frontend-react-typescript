import React, { createContext, useState, useReducer, Props } from "react";
import axios, { AxiosResponse } from "axios";
import CitiesReducer from "./CityReducers";
import { CityContextActionTypes } from "../type";

const citiesContext: CitiesContextI = {
  cities: [],
  error: null,

  getCities: () => {
    throw new Error("getCities not implemented");
  },
  postCity: () => {
    throw new Error("postCities not implemented");
  }
};
interface CitiesContextI {
  cities: CitiesT;
  error: Error | null;
  getCities(): void;
  postCity(newCity: CityI): void;
}

export const CitiesContext = createContext<CitiesContextI>(citiesContext);

const CitiesContextProvider = (props: { children: React.ReactNode }) => {
  // const [state, dispatch] = useReducer(CitiesReducer, citiesContext);
  const [cities, setCities] = useState<CitiesT>(citiesContext.cities);
  const [error, setError] = useState<Error | null>(citiesContext.error);
  //   const [getCities, setGetCities] = useState(initCities.getCities);
  // const [getState, setState] = useState(initCities);
  // // const [initCities, dispatch] = useReducer(CitiesReducer, []);
  const getCities = async () => {
    try {
      const res: AxiosResponse<CitiesT> = await axios.get(
        "http://localhost:5000/api/cities/"
      );
      const { data }: { data: CitiesT } = res;
      setCities(data);
      // dispatch({
      //   type: CityContextActionTypes.GET_CITIES,
      //   payload: data
      // });
    } catch (error) {
      setError(error);
      // dispatch({
      //   type: CityContextActionTypes.ERROR_CITIES,
      //   payload: error
      // });
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
      // dispatch({
      //   type: CityContextActionTypes.POST_CITY,
      //   payload: data
      // });
      const newCitiesData = {
        ...cities,
        data
      };
      setCities(newCitiesData);
    } catch (error) {
      setError(error);
      // dispatch({
      //   type: CityContextActionTypes.ERROR_CITIES,
      //   payload: error
      // });
    }
  };
  return (
    <CitiesContext.Provider value={{ cities, error, getCities, postCity }}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesContextProvider;
