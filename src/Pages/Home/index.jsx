import { useState, useEffect } from "react";
import { API } from "../../services/api";
import style from "./style.module.css";
import { useForm, Controller } from "react-hook-form";
import AsyncSelect, { useAsync } from "react-select/async";

export const Home = () => {
 const { control, handleSubmit } = useForm();
 const [countriesList, setCountriesList] = useState([]);
 const [selectedCountry, setSelectedCountry] = useState("");
 const apiKey = localStorage.getItem("apiKey");

 const getCountries = async () => {
  //fake: demo7870822.mockable.io
  //correct: v3.football.api-sports.io
  try {
   const response = await API.get("/countries", {
    headers: {
     "x-rapidapi-key": `${apiKey}`,
     "x-rapidapi-host": "demo7870822.mockable.io",
    },
   });
   const data = response.data.response;
   setCountriesList(data);
   const options = data.map((item) => ({
    value: item.name,
    label: item.name,
   }));
   return options;
  } catch (error) {
   console.log("", error);
  }
 };
 useEffect(() => {
  getCountries();
 }, []);

 const { isLoading, data, error } = useAsync(getCountries);
 return (
  <div className={style.container}>
   <div className={style.navBarCountries}>
    <label>Países</label>
    <AsyncSelect
     cacheOptions
     defaultOptions
     loadOptions={getCountries}
     isLoading={isLoading}
     options={data}
     isClearable
    />
   </div>
  </div>
 );
};
