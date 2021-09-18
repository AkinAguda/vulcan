import React from "react";
import classes from "./Fragment.module.scss";

const Fragment: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className }) => (
  <div className={`${classes.container}${className ? ` ${className}` : ""}`}>
    <div className={classes.tag}>
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className={classes.bar} />
  </div>
);

export default Fragment;
