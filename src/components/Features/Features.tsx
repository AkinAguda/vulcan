import React from "react";
import { mergeClasses } from "@vulcan/utility/helpers";
import FeatureCard from "./FeatureCard";
import classes from "./Features.module.scss";

const Features: React.FC = () => (
  <div className={mergeClasses("container", classes.container)}>
    <div className={mergeClasses("wrapper", classes.wrapper)}>
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </div>
  </div>
);

export default Features;
