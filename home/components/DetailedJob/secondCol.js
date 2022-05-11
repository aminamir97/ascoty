import React from "react";
import classes from "./styleSecond.module.css";
import BTN from "../OneProject/button";
import JobItem from "../careers/positionItem/jobItem";
import CustomBtnComponent from "../../assets/buttonCustom";

export const Second = () => {
  return (//
    <div className={classes.colContainer}>
      <div className={classes.title}>APPLY FOR THE JOB</div>
      <hr className={classes.horDivider} />
      <div className={classes.btnMargins}>
        {/* <BTN color="#6D2E88" text="Apply now" /> */}
        <CustomBtnComponent txtColor="#6D2E88" txt="Apply now" />
      </div>
      <div className={classes.title}>JOB DETAILS</div>
      <hr className={classes.horDivider} />
      <div className={classes.btnMargins}>
        <div className={classes.jobHeads}>
          <h5>Location</h5>
          <p className={classes.desc}>Amman-jordan</p>
        </div>
        <div className={classes.jobHeads}>
          <h5>Employment Type</h5>
          <p className={classes.desc}>Full Time</p>
        </div>
        <div className={classes.jobHeads}>
          <h5>Years of Experience</h5>
          <p className={classes.desc}>+3</p>
        </div>
        <div className={classes.jobHeads}>
          <h5>Date Posted</h5>
          <p className={classes.desc}>03 March 2022</p>
        </div>
      </div>
      <div className={classes.title}>OTHER JOBS</div>
      <hr className={classes.horDivider} />
      <div className={classes.otherJobsSection}>
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
    </div>
  );
};
