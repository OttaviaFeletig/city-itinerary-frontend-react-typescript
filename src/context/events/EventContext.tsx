import React, { createContext, useState, useReducer, Props } from "react";
import axios, { AxiosResponse } from "axios";
import EventReducer from "./EventReducer";
import { EventContextActionTypes } from "../type";

const initEvents: InitEventsI = {
  events: [],
  error: null
};

export const EventContext = createContext<any>({ initEvents });

const EventContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(EventReducer, initEvents);

  const getEventsByRadius = async (
    lng: number,
    lat: number,
    radius: number
  ) => {
    // const { lng, lat } = currentLocation;
    console.log("lng", lng);
    try {
      const res: AxiosResponse<EventsT> = await axios.get(
        `http://localhost:5000/api/events/${lng}/${lat}/${radius}`
      );
      const { data }: { data: EventsT } = res;
      console.log("data", data);
      dispatch({
        type: EventContextActionTypes.GET_EVENTS_FROM_RADIUS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: EventContextActionTypes.ERROR_EVENTS,
        payload: error
      });
    }
  };
  //   const postCity = async (newCity: CityI) => {
  //     try {
  //       console.log("here");
  //       console.log(newCity);
  //       const res = await axios.post(
  //         "http://localhost:5000/api/cities/",
  //         newCity
  //       );
  //       console.log(res);
  //       let { data }: { data: CityI } = await res;
  //       console.log("data", data);
  //       dispatch({
  //         type: CityContextActionTypes.POST_CITY,
  //         payload: data
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: CityContextActionTypes.ERROR_CITIES,
  //         payload: error
  //       });
  //     }
  //   };
  return (
    <EventContext.Provider value={{ state, getEventsByRadius }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
