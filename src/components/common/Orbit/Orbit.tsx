import React from "react";
import classes from "./Orbit.module.scss";

const Orbit: React.FC = () => (
  <div className={classes.orbit}>
    <div className={classes.planet}></div>
  </div>
);

export default Orbit;
