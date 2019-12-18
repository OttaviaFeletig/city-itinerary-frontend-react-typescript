import axios, { AxiosResponse } from "axios";
import { CityContextActionTypes } from "../type";

const CitiesReducer = (state: any, action: any) => {
  switch (action.type) {
    case CityContextActionTypes.GET_CITIES:
      return {
        ...state,
        cities: action.payload
      };
    case CityContextActionTypes.ERROR_CITIES:
      return {
        ...state,
        error: action.payload
      };
    case CityContextActionTypes.POST_CITY:
      return {
        ...state,
        cities: [...state.cities, action.payload]
      };
    default:
      return state;
  }
};
export default CitiesReducer;
// const getCitiesAjax = async () => {
//   try {
//     const res: AxiosResponse<CitiesT> = await axios.get(
//       "http://localhost:5000/api/cities/"
//     );
//     const { data }: { data: CitiesT } = res;
//     return data;
//   } catch (error) {
//     return error;
//   }
// };
