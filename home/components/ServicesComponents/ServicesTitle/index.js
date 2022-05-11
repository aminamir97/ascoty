import React from "react";
import classes from "./style/services.module.css";

function ServiceTitle({ heading }) {
  return (
      <div className={classes.title}>
        {!heading && <h5>OUR SERVICRS</h5>}

        <h1 className={classes.text}>
          Our expertise in strategy, transformation, data, and technology
          unlocks opportunities. Let's explore how Ascot can help you reach your
          goals
        </h1>
      </div>
  );
}

export default ServiceTitle;
