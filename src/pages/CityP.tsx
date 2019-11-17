import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import City from "../components/City";
import { pageStyle } from "../styles/Styles";
import { getCities } from "../store/actions/cityAction";
import { CityI, CitiesT } from "../@types/city";
import { AppStore } from "../@types/store/index";
import { CityState } from "../@types/store/city";
import AddButton from "../components/AddButton";
const CityP: React.FC = () => {
  const { page } = pageStyle();
  const dispatch = useDispatch();
  const cityState: CityState = useSelector((state: AppStore) => state.cities);
  const { cities }: { cities: CitiesT } = cityState;
  const { error }: { error: CityState["error"] } = cityState;
  useEffect(() => {
    dispatch(getCities());
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
