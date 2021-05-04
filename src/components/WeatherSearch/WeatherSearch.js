import React, { useContext } from "react";
import classes from "./WeatherSearch.module.css";
import Context from "../../Context";

const WeatherSearch = () => {
  const { api_call } = useContext(Context);

  return (
    <div className={classes.weather_search}>
      <form onSubmit={api_call} className={classes.weather_search__form}>
        <input
          name="location"
          autoComplete="off"
          className={classes.weather_search__input}
          type="text"
        />
        <div className={classes.weather_search__submit}>
          <button className={classes.weather_search__button}>&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
