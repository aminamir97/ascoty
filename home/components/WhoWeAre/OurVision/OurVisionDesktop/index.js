import React from "react";
import classes from "./styles.module.css";

function OurVisionDesktop() {
  return (
    <div className={classes.container}>
      <div className={classes.containerOverLay}>
        <div className={classes.son1}></div>
        <div className={classes.son2}></div>
      </div>
      <div className={classes.cont}>
        <div className={classes.title}>OUR VISION</div>
        <div className={classes.desc}>
          Become the leading Information Technology player in the MENA region by
          touching and improving people's lives through continuous innovation
          and the introduction of disruptive technologies, taking into
          consideration the language and the culture of our society.
        </div>
      </div>
    </div>
  );
}

export default OurVisionDesktop;
