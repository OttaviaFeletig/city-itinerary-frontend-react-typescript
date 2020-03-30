import axios, { AxiosResponse } from "axios";
import { EventContextActionTypes } from "../type";

const EventReducer = (state: InitEventsI, action: any) => {
  switch (action.type) {
    case EventContextActionTypes.GET_EVENTS_FROM_RADIUS:
      return {
        ...state,
        events: action.payload
      };
    case EventContextActionTypes.ERROR_EVENTS:
      return {
        ...state,
        error: action.payload
      };
    // case CityContextActionTypes.POST_CITY:
    //   console.log("in post city reducer");
    //   return {
    //     ...state,
    //     cities: [...state.cities, action.payload]
    //   };
    default:
      return state;
  }
};
export default EventReducer;
