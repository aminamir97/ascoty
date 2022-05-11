import React from "react";
import classes from "./style/contactus.module.css";


function ContactUsTitle(props) {
  return (
    <div className={classes.titleContainer}>
      <h1 className={classes.styleConnectTitle}>{props.title}</h1>
      <h1 className={classes.styleConnectContent}>{props.content}</h1>
    </div>
  );
}

export default ContactUsTitle;
