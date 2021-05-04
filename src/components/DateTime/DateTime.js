import React from "react";
import classes from "./DateTime.module.css";

const DateTime = () => {
  const date = new Date();
  return (
    <div
      className={classes.date_time}
    >{`${date.toLocaleDateString()}-${date.toLocaleTimeString()}`}</div>
  );
};

export default DateTime;
