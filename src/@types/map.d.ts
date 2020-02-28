export class Map extends React.Component<MapPropsN, any> {}
export class Marker<
  P extends MarkerPropsN = MarkerPropsN,
  S = any
> extends React.Component<P, S> {
  marker?: google.maps.MarkerN;

  renderMarker(): void;
  getMarker(): Promise<google.maps.MarkerN>;
}
export class InfoWindow<
  P extends InfoWindowPropsN = InfoWindowPropsN,
  S = any
> extends React.Component<P, S> {
  renderInfoWindow(): void;
  openWindow(): void;
  updatePosition(): void;
  updateContent(): void;
  closeWindow(): void;
  renderChildren(): void;
}
