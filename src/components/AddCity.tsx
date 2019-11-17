import React from "react";
import { Typography, Input } from "@material-ui/core";

const AddCity: React.FC = () => {
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h5" component="h5">
        Add a new city
      </Typography>
      <Input></Input>
    </React.Fragment>
  );
};
export default AddCity;
