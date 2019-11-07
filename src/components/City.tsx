import React, { ReactNode } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
interface Props {
  city: string;
}
const City: React.FC<Props> = ({ city }) => {
  return (
    <div>
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </div>
  );
};
export default City;
