import React from "react";
import classes from "./style/btn.module.css";
import CtaButton from "../../../assets/buttonAssets/button";
import Link from "next/link";
function BTN({ text, color, link = "#" }) {
  return (
    <div className={classes.container}>
      <Link href={link}>
        <div
          className={classes.circle}
          style={{ border: `1px solid ${color}` }}
        >
          <CtaButton color={color} />
        </div>
      </Link>
        <p style={{ color: `${color}` }}>{text}</p>
    </div>
  );
}

export default BTN;
