import React from "react";
import classes from "./style/ascot.module.css";

function CardItem(props) {
  return (
    <div key={props.id} className={classes.styleCard}>
      <div className={classes.styleImage}>
        <img src={props.image} />
      </div>
      
      <div className={classes.styleDescription}>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CardItem;
