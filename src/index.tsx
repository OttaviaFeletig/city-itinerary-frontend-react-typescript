import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import CitiesContextProvider from "./context/cities/CityContext";
import EventContextProvider from "./context/events/EventContext";
ReactDOM.render(
  // <Provider store={store}>

  // <CitiesContextProvider>
  <EventContextProvider>
    <App />
  </EventContextProvider>,
  // </CitiesContextProvider>,
  // </Provider>
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
