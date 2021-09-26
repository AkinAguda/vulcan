import React from "react";
import { mergeClasses } from "../../../utility/helpers";
import classes from "./MagnifyingGlass.module.scss";

const MagnifyingGlass: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  ...rest
}) => (
  <div className={mergeClasses(classes.container, className || "")} {...rest}>
    <div className={classes.circle} />
    <div className={classes.glare} />
    <div className={classes.handle} />
  </div>
);

export default MagnifyingGlass;
