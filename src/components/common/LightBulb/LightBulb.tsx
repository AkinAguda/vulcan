import React from "react";
import classes from "./LightBulb.module.scss";

const LightBulb: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.bulb}>
      <div className={classes.wire} />
      <div className={classes.lampHolder} />
      <div className={classes.bulbCurves} />
      <div className={classes.bulbGlass} />
    </div>
  </div>
);

export default LightBulb;
