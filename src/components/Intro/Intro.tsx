import React from "react";
import { mergeClasses } from "@vulcan/utility/helpers";
import { Grid, Fragment, MagnifyingGlass } from "@vulcan/common";
import classes from "./Intro.module.scss";

const Intro: React.FC = () => (
  <div className={mergeClasses("container", classes.container)}>
    <div className={classes.mobRight}>
      <Grid />
    </div>
    <div className={mergeClasses("wrapper", classes.wrapper)}>
      <div className={classes.left}>
        <h1 className={mergeClasses("text-vulcan-white-1", classes.header)}>
          Welcome to Vulcan, your favourite Julia template
        </h1>
        <p className="text-vulcan-white-3">
          This is a template that is focused on providing you with a more
          flexible, intuitve and just downright beautiful interface when
          building with Julia
        </p>
        <button className={classes.button}>Get Template</button>
      </div>

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
  </div>
);

export default Intro;
