import React from "react";
import { mergeClasses } from "@vulcan/utility/helpers";
import { Grid, MagnifyingGlass } from "@vulcan/common";
import classes from "./Syntax.module.scss";

const Syntax: React.FC = () => (
  <div className={mergeClasses("container", classes.container)}>
    <div className={mergeClasses("wrapper")}>
      <div className={classes.right}>
        <div className={classes.gridWrapper}>
          <Grid />
        </div>
        <div className={classes.orbit}>
          <div className={classes.planet}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Syntax;
