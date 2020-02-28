import React, { Props, useEffect } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import Box from "@material-ui/core/Box";
import googleMapsApiKey from "../Google/index";
const currentLocationIcon = require("../assets/person-icon-blue-18.png");
const HomeP: React.FC<GoogleProps> = props => {
  const [activeMarker, setActiveMarker] = React.useState();
  const [selectedPlace, setSelectedPlace] = React.useState();
  const [showInfoWindow, setShowInfoWindow] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState({
    lat: 0,
    lng: 0
  });

  const myPlaces = [
    { id: "place1", pos: { lat: 53, lng: 13 } },
    { id: "place2", pos: { lat: 39.10894664788252, lng: -94.57926449532226 } },
    { id: "place3", pos: { lat: 39.07602397235644, lng: -94.5184089401211 } }
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setCurrentLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
    });
  }, []);

  const onClose = () => {
    if (showInfoWindow) {
      setShowInfoWindow(false);
      setActiveMarker(undefined);
    }
  };
  return (
    <Box height="92%" width="100%" position="absolute">
      <Map
        google={props.google}
        zoom={14}
        initialCenter={currentLocation}
        centerAroundCurrentLocation={true}
      >
        <Marker
          position={currentLocation}
          cursor="pointer"
          icon={currentLocationIcon}
        />
        {myPlaces.map(place => (
          <Marker
            onClick={(props, marker, event) => {
              setActiveMarker(marker);
              setSelectedPlace(props);
              setShowInfoWindow(true);
            }}
            position={place.pos}
            key={place.id}
            title={place.id}
          />
        ))}

        <InfoWindow
          onClose={onClose}
          visible={showInfoWindow}
          marker={activeMarker}
        >
          <div
            style={{
              opacity: 0.75,
              padding: `12px`
            }}
          >
            {selectedPlace !== undefined && <h4>{selectedPlace.title}</h4>}
          </div>
        </InfoWindow>
      </Map>
    </Box>
  );
};
export default GoogleApiWrapper(props => ({
  apiKey: googleMapsApiKey
}))(HomeP);
