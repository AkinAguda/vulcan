import React from "react";
import { LightBulb } from "@vulcan/common";
import classes from "./FeatureCard.module.scss";

const FeatureCard: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.icon}>
      <LightBulb />
    </div>
  </div>
);

export default FeatureCard;
