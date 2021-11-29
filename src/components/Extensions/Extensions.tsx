import React from "react";
import { mergeClasses } from "@vulcan/utility/helpers";
import ExtensionCard from "./ExtensionCard";
import classes from "./Extensions.module.scss";

const Extensions: React.FC = () => (
  <div className={mergeClasses("container", classes.container)}>
    <div className={mergeClasses("wrapper", classes.wrapper)}>
      <h3
        className={mergeClasses(
          classes.heading,
          "subheading",
          "text-vulcan-white-3"
        )}
      >
        Basic Franklin Extensions
      </h3>
      <div className={classes.extensions}>
        <ExtensionCard
          title="Divs"
          desc="It is sometimes useful to have a short way to make a part of the page belong to a div so that it can be styled separately."
          cardStyles={{
            background: "#FDB927",
            trackColor: "rgba(10, 10, 10, 0.4)",
            thumbColor: "#0A0A0A",
            gridTheme: "dark",
          }}
        />
        <ExtensionCard
          title="LaTeX and Maths"
          desc="Definitions can be introduced in the page or in the config.md (in which case they're available everywhere)."
          cardStyles={{
            background: "#00AEFF",
            trackColor: "rgba(255, 255, 255, 0.4)",
            thumbColor: "#FFFFFF",
            gridTheme: "light",
          }}
        />
      </div>
    </div>
  </div>
);

export default Extensions;
