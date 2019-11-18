import React from "react";
import { Typography, Input, Button, Box } from "@material-ui/core";
import { modalStyle } from "../styles/Styles";
import { postCity } from "../store/actions/cityAction";
import { CityI } from "../@types/city";
import { useDispatch } from "react-redux";
const AddCity: React.FC = () => {
  const dispatch = useDispatch();
  const { button, form } = modalStyle();
  const [values, setValues] = React.useState({
    name: "",
    country: "",
    picture: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (): void => {
    const {
      name,
      country,
      picture
    }: { name: string; country: string; picture: string } = values;
    const newCity: CityI = { name, country, picture };
    console.log("newCity", newCity);
    dispatch(postCity(newCity));
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
          onChange={handleChange}
          required
        />
        <Input
          placeholder="country"
          name="country"
          type="text"
          value={values.country}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="picture"
          name="picture"
          type="text"
          value={values.picture}
          onChange={handleChange}
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
