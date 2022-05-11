import React from "react";
import CustomBtnComponent from "../../../assets/buttonCustom";
import BTN from "../../OneProject/button";
import classes from "./style.module.css";

const AboutUsMobileView = () => {
  //about page
  return (
    <div className="m-[1rem]">
      <div className={classes.container}>
        <div className={classes.cont}>
          <div className={classes.smallHead}>ABOUT ASCOT</div>
          <div className={classes.title}>OUR VISION</div>
        </div>
        <div className={classes.containerOverLay}>
          <div className={classes.son1}></div>
          <div className={classes.son2}></div>
        </div>
        <div className={classes.contDesc}>
          <div className={classes.desc}>
            Become the leading Information Technology player in the MENA region
            by touching and improving people's lives through continuous
            innovation and the introduction of disruptive technologies, taking
            into consideration the language and the culture of our society.
          </div>
          <div className={classes.btn}>
            <CustomBtnComponent
              txt="Read More"
              txtColor="#6D2E88"
              link="/about"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMobileView;
