import React from "react";
import classes from "./style.module.css";

function ProjCard(props) {
  return (
    <div key={props.id} className={classes.projectCardContainer}>
      <div className={classes.styleImage}>
        <img className={classes.styleImage} src={props.image} />
      </div>

      <div className={classes.styleTitle}>
        <h5>{props.title}</h5>
      </div>
    </div>
  );
}

export default ProjCard;
