import React from "react";
import classes from "./style/hero.module.css";

function HeroBanner(props) {
  return (
    <div className={classes.hero} ref={props.heroRef}>
      <div className={classes.imageContainer}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default HeroBanner;
