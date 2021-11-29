import React from "react";
import classes from "./Bug.module.scss";

const Bug: React.FC = () => (
  <div className={classes.bug}>
    <div className={classes.head} />
    <div className={classes.body}>
      <div className={classes.shell} />
      <div className={classes.partition} />
    </div>
    <div className={classes.toe1} />
    <div className={classes.toe2} />
    <div className={classes.toe3} />
    <div className={classes.toe4} />
  </div>
);

export default Bug;
