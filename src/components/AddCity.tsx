import React, {
  useContext,
  FormEvent,
  ChangeEvent,
  ButtonHTMLAttributes,
  KeyboardEventHandler,
  FormEventHandler
} from "react";
import { Typography, Input, Button, Box, TextField } from "@material-ui/core";
import { modalStyle } from "../styles/Styles";
import { CitiesContext } from "../context/cities/CityContext";
import Autocomplete, {
  AutocompleteClassKey
} from "@material-ui/lab/Autocomplete";
import { ButtonBaseClassKey } from "@material-ui/core/ButtonBase";
const countries = require("countries-cities").getCountries();
let cities: Array<string> = [];
const AddCity: React.FC<FunctionProps> = ({ handleClose }) => {
  const { state, postCity } = useContext(CitiesContext);
  const { button, form } = modalStyle();
  const [values, setValues] = React.useState({
    name: "",
    country: "",
    picture: ""
  });
  const typeCountry = (e: ChangeEvent<any>): void => {
    setValues({ ...values, country: e.currentTarget.value });
  };
  const typeCity = (e: ChangeEvent<any>): void => {
    setValues({ ...values, name: e.currentTarget.value });
  };
  const selectCountry = (e: ChangeEvent<any>) => {
    if (e.currentTarget.type === "button") {
      console.log("button type");
      setValues({ ...values, country: "" });
    } else {
      console.log("here");
      // console.log(e.currentTarget.type);
      const value: string = e.currentTarget.innerHTML;
      setValues({ ...values, country: value });
      cities = require("countries-cities").getCities(value);
    }
  };
  const selectCity = (e: ChangeEvent<any>) => {
    if (e.currentTarget.type === "button") {
      setValues({ ...values, name: "" });
    } else {
      const value: string = e.currentTarget.innerHTML;
      setValues({ ...values, name: value });
    }
  };
  const handlePictureChange = (e: ChangeEvent<any>) => {
    setValues({ ...values, picture: e.currentTarget.value });
  };
  const handleSubmit = (): void => {
    const {
      name,
      country,
      picture
    }: { name: string; country: string; picture: string } = values;
    const newCity: CityI = { name, country, picture };
    postCity(newCity);
    handleClose();
  };

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h5" component="h5">
        Add a new city
      </Typography>
      <Box className={form}>
        <Autocomplete
          id="country"
          options={countries}
          getOptionLabel={(option: any) => option}
          style={{ width: 300 }}
          onChange={selectCountry}
          clearOnEscape={true}
          renderInput={params => (
            <TextField
              {...params}
              name="country"
              label="Select a country"
              variant="outlined"
              fullWidth
              onChange={typeCountry}
              inputProps={{
                ...params.inputProps,
                value: values.country
              }}
            />
          )}
        />
        <Autocomplete
          id="cities"
          options={cities}
          getOptionLabel={(option: any) => option}
          style={{ width: 300 }}
          onChange={selectCity}
          clearOnEscape={true}
          renderInput={params => (
            <TextField
              {...params}
              name="city"
              label="Select a city"
              variant="outlined"
              fullWidth
              onChange={typeCity}
              inputProps={{
                ...params.inputProps,
                value: values.name
              }}
            />
          )}
        />
        <Input
          placeholder="picture"
          name="picture"
          type="text"
          value={values.picture}
          onChange={handlePictureChange}
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
