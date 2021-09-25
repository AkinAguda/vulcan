import React from "react";
import classes from "./MagnifyingGlass.module.scss";

const MagnifyingGlass: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.circle} />
    <div className={classes.glare} />
    <div className={classes.handle} />
  </div>
);

export default MagnifyingGlass;
