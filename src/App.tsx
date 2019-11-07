import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeP from "./pages/HomeP";
import CityP from "./pages/CityP";
import { pageStyle } from "./styles/Styles";
const App: React.FC = () => {
  const { bottom } = pageStyle();
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomeP} />
        <Route exact path="/cities" component={CityP} />
        <Navigation />
      </Router>
    </div>
  );
};

export default App;
