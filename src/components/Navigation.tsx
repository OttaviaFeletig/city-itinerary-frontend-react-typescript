import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, LocationCity } from "@material-ui/icons";
import { navigationStyle } from "../styles/Styles";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const { banner, icons } = navigationStyle();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation className={banner} value={value} onChange={handleChange}>
      <BottomNavigationAction
        component={Link}
        to="/"
        className={icons}
        label="Home"
        value="home"
        icon={<Home />}
      />
      <BottomNavigationAction
        component={Link}
        to="/cities"
        className={icons}
        label="Cities"
        value="cities"
        icon={<LocationCity />}
      />
    </BottomNavigation>
  );
};
export default Navigation;
