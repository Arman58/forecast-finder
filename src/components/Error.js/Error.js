import React from "react";
import classes from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <div>
      <h1 className={classes.error}>{error}</h1>
    </div>
  );
};

export default Error;
