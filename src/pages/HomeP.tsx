import React, { Props, useEffect, useContext } from "react";
import { EventContext } from "../context/events/EventContext";

import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import Box from "@material-ui/core/Box";
import googleMapsApiKey from "../Google/index";
import AddButton from "../components/AddButton";
const currentLocationIcon = require("../assets/person-icon-blue-18.png");

const HomeP: React.FC<GoogleProps> = props => {
  const { state, getEventsByRadius } = useContext(EventContext);
  const { events }: { events: EventsT } = state;
  console.log("events", events);
  const { error }: { error: Error | null } = state;
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
    navigator.geolocation.watchPosition(pos => {
      console.log("pos", pos);
      setCurrentLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
      getEventsByRadius(pos.coords.longitude, pos.coords.latitude, 5000);
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
      <AddButton />
      <Map
        google={props.google}
        zoom={14}
        initialCenter={currentLocation}
        centerAroundCurrentLocation={true}
        styles={[
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          { featureType: "transit", stylers: [{ visibility: "off" }] }
        ]}
        // onClick={(props, marker, event) => {
        //   console.log("props", props);
        //   // myPlaces.push({
        //   //   id: "",
        //   //   pos: {lat: props.}
        //   // })
        // }}
      >
        <Marker
          position={currentLocation}
          cursor="pointer"
          icon={
            (props.google.maps.Symbol = {
              path: props.google.maps.SymbolPath.CIRCLE,
              scale: 5,
              fillColor: "#3080B3",
              strokeColor: "#3080B3",
              fillOpacity: 1
            })
          }
          // animation={props.google.maps.Animation.BOUNCE}
          // onClick={}
        />
        {events.length !== 0 &&
          events.map((oneEvent, index) => {
            const position = {
              lat: oneEvent.location.coordinates[1],
              lng: oneEvent.location.coordinates[0]
            };
            return (
              <Marker
                onClick={(props, marker, event) => {
                  setActiveMarker(marker);
                  setSelectedPlace(props);
                  setShowInfoWindow(true);
                }}
                position={position}
                key={index}
                title={oneEvent.name}
              />
            );
          })}
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
