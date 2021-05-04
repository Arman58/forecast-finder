import React, { useContext } from "react";
import Context from "../../Context";
// import WeatherSearch from "../WeatherSearch/WeatherSearch";
import classes from "./WeatherData.module.css";

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  console.log(weather);
  const { description, temperature, wind } = weather;
  return (
    <div className={classes.weather_data}>
      <p className={classes.weather__tagline}>
        Weather forecast for{" "}
        <span className={classes.weather_data__city}>{city}</span>
      </p>
      <div className={classes.weather_data__box}>
        <span className={classes.weather_data__property}>
          <p className={classes.weather_data__title}>Temperature</p>
          <p className={classes.weather_data__value}>{temperature}</p>
        </span>
        <span className={classes.weather_data__property}>
          <p className={classes.weather_data__title}>description</p>
          <p className={classes.weather_data__value}>{description}</p>
        </span>
        <span className={classes.weather_data__property}>
          <p className={classes.weather_data__title}>Wind</p>
          <p className={classes.weather_data__value}>{wind}</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
