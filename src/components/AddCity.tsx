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
import axios from "axios";
import firebase from "firebase/app";
const storage = require("../Firebase/index");
const countries = require("countries-cities").getCountries();
let citiesList: Array<string> = [];

const AddCity: React.FC<FunctionProps> = ({ handleClose }) => {
  const { cities, error, postCity } = useContext(CitiesContext);
  const { button, form } = modalStyle();
  const [values, setValues] = React.useState({
    name: "",
    country: "",
    picture: {},
    progress: 0
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
      const value: string = e.currentTarget.innerHTML;
      setValues({ ...values, country: value });
      citiesList = require("countries-cities").getCities(value);
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

  const handlePictureChange = async (e: ChangeEvent<any>) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    handlePictureUpload(file);
  };
  const handlePictureUpload = async (file: any) => {
    const storageService = firebase.storage().ref();

    const uploadTask = storageService.child(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setValues({ ...values, progress });
      },
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(`${file.name}`)
          .getDownloadURL()
          .then(url => {
            setValues({ ...values, picture: url });
          });
      }
    );
  };
  const handleSubmit = async () => {
    const {
      name,
      country,
      picture
    }: { name: string; country: string; picture: object } = values;
    const newCity: CityI = { name, country, picture };
    console.log("newCity", newCity);
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
        {/* <Input
          placeholder="picture"
          name="picture"
          type="text"
          value={values.picture}
          onChange={handlePictureChange}
          required
        /> */}
        <Input
          id="image-input"
          // className={classes.input}
          // accept="image/*"
          type="file"
          // multiple
          // {...input}
          onChange={handlePictureChange}
        />
        <div className="row">
          <progress value={values.progress} max="100" className="progress" />
        </div>
        <Button className={button} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </React.Fragment>
  );
};
export default AddCity;
