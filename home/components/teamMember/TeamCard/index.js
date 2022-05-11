import React from "react";
import classes from "./style/styles.module.css";

function TeamCard(props) {
  return (
    <div key={props.id} className={classes.container}>
      <img className={classes.img} src={props.image} />
      <div className={classes.name}>{props.name}</div>
      <div className={classes.role}>{props.title}</div>
      <div className={classes.desc}>{props.brief}</div>
    </div>
  );
}

export default TeamCard;
