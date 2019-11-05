import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, LocationCity } from "@material-ui/icons";
import { navigationStyle } from "../styles/Styles";
const Navigation: React.FC = () => {
  const { banner, icons } = navigationStyle();
  return (
    <BottomNavigation className={banner}>
      <BottomNavigationAction
        className={icons}
        label="Home"
        value="home"
        icon={<Home />}
      />
      <BottomNavigationAction
        className={icons}
        label="Cities"
        value="cities"
        icon={<LocationCity />}
      />
    </BottomNavigation>
  );
};
export default Navigation;
