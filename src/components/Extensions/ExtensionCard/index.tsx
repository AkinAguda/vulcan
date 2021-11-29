import React from "react";
import { Grid, MagnifyingGlass, BugFinder } from "@vulcan/common";
import classes from "./ExtensionCard.module.scss";

export interface CardStyles {
  background: string;
  trackColor: string;
  thumbColor: string;
  gridTheme: "light" | "dark";
}

export interface ExtensionCardProps {
  title: string;
  desc: string;
  cardStyles: CardStyles;
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({
  title,
  desc,
  cardStyles: { background, trackColor, thumbColor, gridTheme },
}) => (
  <div className={classes.container} style={{ backgroundColor: background }}>
    <p className={classes.title}>{title}</p>
    <p className={classes.paragraph}>{desc}</p>

    <div>
      <div className={classes.track} style={{ backgroundColor: trackColor }}>
        <div
          className={classes.translateRight}
          style={{ backgroundColor: thumbColor }}
        />
      </div>
      <div className={classes.gridWrapper}>
        <MagnifyingGlass className={classes.magnifyingGlass} />
        <BugFinder className={classes.bugFinder} />
        <Grid
          squares={6}
          columns={3}
          rows={2}
          className={classes[`grid-${gridTheme}`]}
        />
      </div>
      <div className={classes.track} style={{ backgroundColor: trackColor }}>
        <div
          className={classes.translateLeft}
          style={{ backgroundColor: thumbColor }}
        />
      </div>
    </div>
  </div>
);

export default ExtensionCard;
