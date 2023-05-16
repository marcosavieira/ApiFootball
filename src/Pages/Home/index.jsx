import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { API } from "../../services/api";
import style from "./style.module.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

export const Home = () => {
 const { control, handleSubmit } = useForm();
 const [countriesList, setCountriesList] = useState([]);
 const [selectedCountry, setSelectedCountry] = useState("");
 const apiKey = localStorage.getItem("apiKey");

 const getCountries = async () => {
  try {
   const response = await API.get("/countries", {
    headers: {
     "x-rapidapi-key": `${apiKey}`,
     "x-rapidapi-host": "v3.football.api-sports.io",
    },
   });
   setCountriesList(response.data.response);
   return response.data;
  } catch (error) {
   console.log("", error);
  }
 };
 useEffect(() => {
  getCountries();
  setSelectedCountry(/* updatedOptions */ "Brazil");
 }, []);

 const getLeagues = async (country) => {
  try {
   const response = await API.get(`/leagues?country=${country}`, {
    headers: {
     "x-rapidapi-key": `${apiKey}`,
     "x-rapidapi-host": "v3.football.api-sports.io",
    },
   });
   return response.data;
  } catch (error) {
   console.log("", error);
  }
 };
 useEffect(() => {
  getLeagues(selectedCountry.toLocaleLowerCase());
 });
 const handleChangeCountry = (event, value) => {
  const updatedOptions = countriesList.map((option) => ({
   ...option,
   selected: option.name === value?.name,
  }));

  setSelectedCountry(/* updatedOptions */ "Brazil");
  //if (selectedCountry !== "") {
  getLeagues(selectedCountry);
  // }
 };

 const onSubmit = (data) => {
  console.log(data);
 };

 return (
  <div className={style.container}>
   <form onSubmit={handleSubmit(onSubmit)}>
    <Autocomplete
     id="country-select-demo"
     sx={{ width: 300 }}
     options={countriesList}
     autoHighlight
     getOptionLabel={(option) => option.name}
     onChange={handleChangeCountry}
     renderOption={(props, option) => (
      <Box
       component="li"
       sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
       {...props}
      >
       <img
        loading="lazy"
        width="20"
        src={option.flag}
        srcSet={option.flag}
        alt=""
       />
       {option.name}
      </Box>
     )}
     renderInput={(params) => (
      <TextField
       {...params}
       label="Selecione o país"
       inputProps={{
        ...params.inputProps,
       }}
      />
     )}
    />
    <label>Leagues</label>
    <Controller
     name="leagues"
     render={({ field }) => (
      <Select
       {...field}
       options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
       ]}
      />
     )}
     control={control}
     defaultValue=""
    />
   </form>
  </div>
 );
};
