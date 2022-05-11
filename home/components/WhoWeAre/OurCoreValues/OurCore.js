import React from 'react';
import classes from "./styles.module.css";

function OurCore(props) {
  return (
    <div key={props.id} className={classes.oneCore}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.description}> {props.description} </p>
    </div>
  )
}

export default OurCore