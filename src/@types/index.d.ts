interface CityI {
  name: string;
  country: string;
  picture: string;
}
type CitiesT = Array<CityI>;
interface CityProps {
  city: CityI;
}
interface InitCitiesI {
  cities: CitiesT | [];
  error: Error | null;
}
interface StyleProps {
  form?: string;
  button?: string;
}
