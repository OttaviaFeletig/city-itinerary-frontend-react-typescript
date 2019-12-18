import React, { useContext } from "react";
import { Typography, Input, Button, Box, TextField } from "@material-ui/core";
import { modalStyle } from "../styles/Styles";
// import { postCity } from "../store/actions/cityAction";
// import { CityI } from "../@types/city";
import { CitiesContext } from "../context/cities/CityContext";

import { useDispatch } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
const countries = require("countries-cities").getCountries();
// console.log(countries);
const AddCity: React.FC = () => {
  // const dispatch = useDispatch();
  const { state, postCity } = useContext(CitiesContext);

  const { button, form } = modalStyle();
  const [values, setValues] = React.useState({
    name: "",
    country: "",
    picture: ""
  });
  // const allCountries = csc.getAllCountries(); //.map(country => country.name);
  const typeCountry = (e: any): void => {
    console.log(e.currentTarget.value);
    setValues({ ...values, country: e.currentTarget.value });
  };
  const selectCountry = (e: any) => {
    console.log("e.currentTarget", e.currentTarget);
    if (e.currentTarget.type === "button") {
      setValues({ ...values, country: "" });
    } else {
      const value: string = e.currentTarget.innerHTML;
      setValues({ ...values, country: value });
      const cities = require("countries-cities").getCities(value);
      console.log("cities", cities);
    }
  };
  const handleSubmit = (): void => {
    const {
      name,
      country,
      picture
    }: { name: string; country: string; picture: string } = values;
    const newCity: CityI = { name, country, picture };
    console.log("newCity", newCity);
    postCity();
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
          id="name"
          options={countries}
          getOptionLabel={(option: any) => option}
          style={{ width: 300 }}
          onChange={selectCountry}
          renderInput={params => (
            <TextField
              {...params}
              name="country"
              label="Select a city"
              variant="outlined"
              fullWidth
            />
          )}
        />
        {/* <Input
          placeholder="picture"
          name="picture"
          type="text"
          value={values.picture}
          onChange={handleChange}
          required
        /> */}
        <Button className={button} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </React.Fragment>
  );
};
export default AddCity;
