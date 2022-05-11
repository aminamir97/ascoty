import Image from "next/image";
import React from "react";
import classes from "./jobItem.module.css";
import { PButton } from "../pampyButton/PButton";

const JobItem = () => {
  return (
    <div className={classes.boxContainer}>
      <div className={classes.jobTitle}>Android developer</div>
      <div className={classes.jobTime}>full time</div>
      <div className={classes.descBox}>
        <div className={classes.positions}>3 posiitons </div>
        <div className={classes.verticalLine}></div>
        <div className={classes.dateBox}>
          <Image src="https://static.ascot.ws/assets/Icons/Date.svg" height={20} width={20} />
          <div className={classes.dateText}>30 March 2022</div>
        </div>
      </div>
      <PButton />
    </div>
  );
};

export default JobItem;
