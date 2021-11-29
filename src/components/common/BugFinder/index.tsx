import React from "react";
import { Bug } from "@vulcan/common";
import { mergeClasses } from "@vulcan/utility/helpers";
import classes from "./BugFinder.module.scss";

const BugFinder: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  ...rest
}) => (
  <div className={mergeClasses(classes.container, className || "")} {...rest}>
    <div className={classes.circle} />
    <div className={classes.crosshairs}>
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className={classes.bugWrapper}>
      <Bug />
    </div>
    <div className={classes.handle}>
      <div className={classes.base} />
    </div>
  </div>
);

export default BugFinder;
