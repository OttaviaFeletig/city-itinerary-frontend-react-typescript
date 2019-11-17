export interface CityI {
  name: string;
  country: string;
  picture: string;
}
export type CitiesT = Array<CityI>;
export interface CityProps {
  city: CityI;
}
