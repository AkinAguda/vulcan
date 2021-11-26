import React from "react";
import { mergeClasses } from "@vulcan/utility/helpers";
import { Grid, Orbit } from "@vulcan/common";
import classes from "./Syntax.module.scss";

const Syntax: React.FC = () => (
  <div className={mergeClasses("container", classes.container)}>
    <div className={mergeClasses("wrapper", classes.wrapper)}>
      <div className={classes.left}>
        <h3
          className={mergeClasses(
            classes.heading,
            "subheading",
            "text-vulcan-white-3"
          )}
        >
          Symbols and HTML entities
        </h3>
        <p className="paragraph">
          If you want a dollar sign you have to escape it like so: $, you can
          also use html entities like so: → or π or, if you&apos;re using Juno
          for instance, you can use \pi[TAB] to insert the symbol as is: π (it
          will be converted to a html entity)
        </p>
        <p className={mergeClasses("paragraph", classes.paragraph2)}>
          If you want to show a backslash, just use it like so: \ ; if you want
          to force a line break, use a \\ like so (this is on a new line).
        </p>
        <p className="paragraph">Footnotes are nice too:</p>
        <p className={classes.footnote}>
          This is the text for the first footnote, you can style all this
          looking at .fndef elements; note that the whole footnote definition is
          expected to be on the same line
        </p>
      </div>
      <div className={classes.right}>
        <div className={classes.gridWrapper}>
          <Grid />
        </div>
        <div className={classes.orbit}>
          <Orbit />
        </div>
        <div className={classes.sphere1}></div>
        <div className={classes.sphere2}></div>
        <div className={classes.sphere3}></div>
        <div className={classes.sphere4}></div>
      </div>
    </div>
  </div>
);

export default Syntax;
