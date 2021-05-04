import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.header__title}>Forecast finder</h1>
    </div>
  );
};

export default Header;
