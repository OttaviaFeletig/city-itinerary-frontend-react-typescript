import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import City from "../components/City";
import { pageStyle } from "../styles/Styles";
import { getCities } from "../store/actions/cityAction";
import { CityI } from "../@types/city";

const CityP: React.FC = () => {
  const { page } = pageStyle();
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.cities);
  const { cities } = state;
  console.log("cities", cities);
  console.log("state", state.cities);
  useEffect(() => {
    dispatch(getCities());
  }, []);
  return (
    <Box className={page}>
      <Card>
        {cities &&
          cities.map((city: CityI, index: number) => {
            return <City city={city} key={index} />;
          })}
      </Card>
    </Box>
  );
};
export default CityP;
