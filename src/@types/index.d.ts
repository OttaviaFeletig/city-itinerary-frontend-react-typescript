//city
interface CityI {
  name: string;
  country: string;
  picture: string;
}
type CitiesT = Array<CityI>;
//context
interface InitCitiesI {
  cities: CitiesT | [];
  error: Error | null;
}
//props
interface StyleProps {
  form?: string;
  button?: string;
}
interface CityProps {
  city: CityI;
}
interface FunctionProps {
  handleClose: Function;
}
