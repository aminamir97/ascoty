import React from "react";
import classes from "./style/btn.module.css";
import CtaButton from "../../../assets/buttonAssets/button";

function BTN({ text, color }) {
  return (
    <div className={classes.container}>
      <div className={classes.circle} style={{ border: `1px solid ${color}` }}>
        <CtaButton color={color} />
      </div>
      <p style={{ color: `${color}` }}>{text}</p>
    </div>
  );
}

export default BTN;
