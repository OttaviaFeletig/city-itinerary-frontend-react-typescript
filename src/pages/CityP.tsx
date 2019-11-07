import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import City from "../components/City";
import { pageStyle } from "../styles/Styles";

const CityP: React.FC = () => {
  const cities: Array<string> = [
    "https://www.visitberlin.de/system/files/styles/visitberlin_teaser_single_visitberlin_mobile_1x/private/image/Fernsehturm_iStock_c_bluejayphoto_DL_PPT_0.jpg?h=cbc5e7bf&itok=MfN7PE-c",
    "https://gdkfiles.visitdenmark.com/files/382/192117_Superkilen_MartinHeiberg.jpg?width=1024",
    "https://runnerbeantours.com/wp-content/uploads/2015/08/houses-in-el-raval-barcelona-880x587.jpg"
  ];
  const { page } = pageStyle();
  return (
    <Box className={page}>
      <Card>
        {cities.map((city: string, index: number) => {
          return <City city={city} key={index} />;
        })}
      </Card>
    </Box>
  );
};
export default CityP;
