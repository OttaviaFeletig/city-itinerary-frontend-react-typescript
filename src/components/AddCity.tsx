import React from "react";
import { Typography, Input, Button, Box } from "@material-ui/core";
import { modalStyle } from "../styles/Styles";
const AddCity: React.FC = () => {
  const { button, form } = modalStyle();
  const [values, setValues] = React.useState({
    name: "",
    country: "",
    picture: ""
  });
  const handleChange = (e: any): any => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    console.log("values", values);
  };
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h5" component="h5">
        Add a new city
      </Typography>
      <Box className={form}>
        <Input
          placeholder="name"
          name="name"
          type="text"
          value={values.name}
          onChange={e => handleChange(e)}
          required
        />
        <Input
          placeholder="country"
          name="country"
          type="text"
          value={values.country}
          onChange={e => handleChange(e)}
          required
        />
        <Input
          placeholder="picture"
          name="picture"
          type="text"
          value={values.picture}
          onChange={e => handleChange(e)}
          required
        />
        <Button className={button} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </React.Fragment>
  );
};
export default AddCity;
