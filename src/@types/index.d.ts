//city
interface CityI {
  name: string;
  country: string;
  picture: any;
}
type CitiesT = Array<CityI>;

//event
type CoordinatesT = Array<number>;
interface LocationI {
  type: string;
  coordinates: CoordinatesT;
}
interface EventI {
  name: string;
  city: CityI;
  picture: string;
  description: string;
  date: Date;
  duration: number;
  cost: number;
  category: string;
  location: LocationI;
}
type EventsT = Array<EventI>;

//context
interface InitCitiesI {
  cities: CitiesT | [];
  error: Error | null;
}
interface InitEventsI {
  events: EventsT | [];
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
interface GoogleProps {
  google: google;
}
