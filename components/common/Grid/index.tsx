import React from "react";
import classes from "./Grid.module.scss";

const Grid: React.FC = () => (
  <div className={classes.container}>
    {Array(16)
      .fill("")
      .map((_, index) => (
        <div key={index} className={classes.cell} />
      ))}
  </div>
);

export default Grid;
