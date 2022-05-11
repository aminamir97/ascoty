import React from "react";
import classes from "./style/btn.module.css";
import CtaButton from "../../assets/buttonAssets/button";
import Link from "next/link";

function BTN({ text, color, link = "#" }) {
  return (
    <div className="allComponent">
      <div className={classes.container}>
        <Link href={link}>
          <a>
            <div
              className={classes.circle}
              style={{ border: `1px solid ${color}` }}
            >
              <CtaButton color={color} />
            </div>
            <p style={{ color: `${color}` }}>{text}</p>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BTN;
