import { mergeClasses } from "@vulcan/utility/helpers";
import React from "react";
import classes from "./Grid.module.scss";

export interface GridInterface {
  squares?: number;
  columns?: number;
  rows?: number;
  className?: string;
}

const Grid: React.FC<GridInterface> = ({
  squares = 16,
  columns = 4,
  rows = 4,
  className,
}) => (
  <div
    className={mergeClasses(classes.container, className || "")}
    style={{
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gridTemplateRows: `grid-template-rows: repeat(${rows}, minmax(0, 1fr))`,
    }}
  >
    {Array(squares)
      .fill("")
      .map((_, index) => (
        <div key={index} className={classes.cell} />
      ))}
  </div>
);

export default Grid;
