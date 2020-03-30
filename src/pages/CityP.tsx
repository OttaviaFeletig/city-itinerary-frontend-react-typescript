import React, { useEffect, useContext, ChangeEvent } from "react";
import { CitiesContext } from "../context/cities/CityContext";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import City from "../components/City";
import { pageStyle } from "../styles/Styles";
import AddButton from "../components/AddButton";
const CityP: React.FC = () => {
  const { page } = pageStyle();
  const { cities, error, getCities } = useContext(CitiesContext);
  // const { cities }: { cities: CitiesT } = initCities;
  // const { error }: { error: Error | null } = initCities;
  useEffect(() => {
    getCities();
  }, []);

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
