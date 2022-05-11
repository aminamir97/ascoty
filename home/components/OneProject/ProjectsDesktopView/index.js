import React from "react";
import classes from "./styles.module.css";
import BTN from "../button";
import CustomBtnComponent from "../../../assets/buttonCustom";

export const ProjectsDesktopView = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.containerOverLay}>
        <div className={classes.son1}></div>
        <div className={classes.son2}></div>
      </div>
      <div className={classes.cont}>
        {!props.isProjPage && <>
          <div className={classes.smallHead}>OUR PROJECT</div>
        <div className={classes.title}>HIGHLIGHTED PROJECTS</div></>}
        
        <div className={classes.subHead}>{props.title}</div>
        <div className={classes.desc}>{props.description}</div>
        <div className={classes.btn}>
          {/* <BTN text="Discover More" color="#6D2E88" /> */}
          <CustomBtnComponent txt="Discover More" txtColor="#6D2E88"  />
        </div>
      </div>
    </div>
  );
};
