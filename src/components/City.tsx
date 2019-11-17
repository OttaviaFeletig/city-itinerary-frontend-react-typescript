import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CityProps, CityI } from "../@types/city";
const City: React.FC<CityProps> = ({ city }) => {
  const {
    name,
    picture
  }: { name: CityI["name"]; picture: CityI["picture"] } = city;
  return (
    <Box>
      <CardActionArea>
        <CardMedia component="img" alt={name} title={name} image={picture} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Box>
  );
};
export default City;
