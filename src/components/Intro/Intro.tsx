import React from "react";
import { mergeClasses } from "../../utility/helpers";
import Grid from "../common/Grid";
import Fragment from "../common/Fragment";
import MagnifyingGlass from "../common/MagnifyingGlass";
import classes from "./Intro.module.scss";

const Intro: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.right}>
      <div className={classes.gridWrapper}>
        <Grid />
      </div>
      <div className={mergeClasses("caption", classes.caption1)}>
        # Welcome to Ifihan’s Julia template
      </div>
      <div className={mergeClasses("caption", classes.caption2)}>#Q</div>
      <div className={mergeClasses("caption", classes.caption3)}>
        # Designed with care, built witth wonder
      </div>
      <div className={classes.circles}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <Fragment className={classes.fragment} />
      <MagnifyingGlass className={classes.magnifyingGlass} />
    </div>
  </div>
);

export default Intro;
