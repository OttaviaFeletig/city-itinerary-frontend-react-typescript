//city
interface CityI {
  name: string;
  country: string;
  picture: any;
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
interface GoogleProps {
  google: google;
}
interface MapPropsN extends google.maps.MapOptions {
  google: GoogleAPI;
  loaded?: boolean;
  bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
  centerAroundCurrentLocation?: boolean;
  initialCenter?: google.maps.LatLngLiteral;
  style?: object;
  visible?: boolean;

  onReady?: mapEventHandler;
  onClick?: mapEventHandler;
  onDragend?: mapEventHandler;
  onRecenter?: mapEventHandler;
  onBoundsChanged?: mapEventHandler;
  onCenterChanged?: mapEventHandler;
  onDblclick?: mapEventHandler;
  onDragstart?: mapEventHandler;
  onHeadingChange?: mapEventHandler;
  onIdle?: mapEventHandler;
  onMaptypeidChanged?: mapEventHandler;
  onMousemove?: mapEventHandler;
  onMouseover?: mapEventHandler;
  onMouseout?: mapEventHandler;
  onProjectionChanged?: mapEventHandler;
  onResize?: mapEventHandler;
  onRightclick?: mapEventHandler;
  onTilesloaded?: mapEventHandler;
  onTiltChanged?: mapEventHandler;
  onZoomChanged?: mapEventHandler;
}

// class Map extends React.Component<MapPropsN, any> {}

type markerEventType = (
  props: MarkerPropsN,
  marker: google.maps.MarkerN,
  event: any
) => any;
interface MarkerPropsN extends Partial<google.maps.MarkerOptions> {
  mapCenter?: google.maps.LatLng | google.maps.LatLngLiteral;

  onClick?: markerEventType;
  onDblclick?: markerEventHandler;
  onDragend?: markerEventHandler;
  onMousedown?: markerEventHandler;
  onMouseout?: markerEventHandler;
  onMouseover?: markerEventHandler;
  onMouseup?: markerEventHandler;
  onRecenter?: markerEventHandler;
  name?: string;
}
// class Marker<
//   P extends MarkerPropsN = MarkerPropsN,
//   S = any
// > extends React.Component<P, S> {
//   marker?: google.maps.MarkerN;

//   renderMarker(): void;
//   getMarker(): Promise<google.maps.MarkerN>;
// }
interface InfoWindowPropsN extends Partial<google.maps.InfoWindowOptions> {
  google?: typeof google;
  map?: google.maps.Map;
  marker?: google.maps.MarkerN;

  mapCenter?: google.maps.LatLng | google.maps.LatLngLiteral;
  visible?: boolean;

  onOpen?: () => void;
  onClose?: () => void;
}
// class InfoWindow<
//   P extends InfoWindowPropsN = InfoWindowPropsN,
//   S = any
// > extends React.Component<P, S> {
//   renderInfoWindow(): void;
//   openWindow(): void;
//   updatePosition(): void;
//   updateContent(): void;
//   closeWindow(): void;
//   renderChildren(): void;
// }
