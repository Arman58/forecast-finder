import React, { useState } from "react";
import Header from "../Header/Header";
import classes from "./Main.module.css";
import axios from "axios";
import Content from "../Content/Content";
import WeatherSearch from "../WeatherSearch/WeatherSearch";
import WeatherData from "../WeatherData/WeatherData";
import Context from "../../Context";
import Error from "../Error.js/Error";
import DateTime from "../DateTime/DateTime";
import Tagline from "../Tagline/Tagline";
import Footer from "../Footer/Footer";

const city = "london";
const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (!location) {
      return setError("Please enter the name of the city."), setWeather(null);
    }
    const url = `https://goweather.herokuapp.com/weather/${location}`;
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data);
    setCity(location);
    setError(null);
  };
  weather && console.log(weather);
  return (
    <div className={classes.main}>
      <Header />
      <Content>
        <DateTime />
        <Tagline />
        <Context.Provider value={{ api_call, weather, city }}>
          <WeatherSearch />
          {weather && <WeatherData />}
          {error && <Error error={error} />}
        </Context.Provider>
        <Footer />
      </Content>
    </div>
  );
};

export default Main;
