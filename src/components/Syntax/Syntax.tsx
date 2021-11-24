import React from "react";
import { mergeClasses } from "@vulcan/utility/helpers";
import { Grid, Orbit } from "@vulcan/common";
import classes from "./Syntax.module.scss";

const Syntax: React.FC = () => (
  <div className={mergeClasses("container", classes.container)}>
    <div className={mergeClasses("wrapper")}>
      <div className={classes.right}>
        <div className={classes.gridWrapper}>
          <Grid />
        </div>
        <div className={classes.orbit}>
          <Orbit />
        </div>
        <div className={classes.sphere1}></div>
        <div className={classes.sphere2}></div>
        <div className={classes.sphere3}></div>
        <div className={classes.sphere4}></div>
      </div>
    </div>
  </div>
);

export default Syntax;
