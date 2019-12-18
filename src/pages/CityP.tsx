import React, { useEffect, useContext } from "react";
import { CitiesContext } from "../context/cities/CityContext";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import City from "../components/City";
import { pageStyle } from "../styles/Styles";
import AddButton from "../components/AddButton";
const CityP: React.FC = () => {
  const { page } = pageStyle();
  const { state, getCities } = useContext(CitiesContext);
  const { cities }: { cities: CitiesT } = state;
  const { error }: { error: Error | null } = state;
  useEffect(() => {
    getCities();
  }, []);
  console.log(state);
  return (
    <Box className={page}>
      <AddButton />
      <Card>
        {error === null &&
          cities.map((city: CityI, index: number) => {
            return <City city={city} key={index} />;
          })}
      </Card>
    </Box>
  );
};
export default CityP;
