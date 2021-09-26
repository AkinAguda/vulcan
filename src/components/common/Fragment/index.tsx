import React from "react";
import classes from "./Fragment.module.scss";

const Fragment: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  ...rest
}) => (
  <div
    className={`${classes.container}${className ? ` ${className}` : ""}`}
    {...rest}
  >
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
