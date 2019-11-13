import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Props } from "../@types/index";
const City: React.FC<Props> = ({ city }) => {
  return (
    <Box>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="berlin"
          height="140"
          title="Contemplative Reptile"
          image={city}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            city name
          </Typography>
        </CardContent>
      </CardActionArea>
    </Box>
  );
};
export default City;
