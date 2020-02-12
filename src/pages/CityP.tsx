import React, { useEffect, useContext, ChangeEvent } from "react";
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
  // const test = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then(function(stream) {
  //       /* use the stream */
  //       console.log(stream);
  //     })
  //     .catch(function(err) {
  //       /* handle the error */
  //     });
  // };
  // const picChange = (e: ChangeEvent<any>) => {
  //   console.log("e", e.target.files);
  // };
  return (
    <Box className={page}>
      {/* <div onClick={test}>click me</div> */}
      {/* <input type="file" accept="image/*" onChange={picChange} /> */}
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
