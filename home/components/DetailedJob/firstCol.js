import React from "react";
import classes from "./style.module.css";
import BTN from "../OneProject/button";
import CustomBtnComponent from "../../assets/buttonCustom";

const First = () => {
  return (
    <>
      <div className={classes.colContainer}>
        <div className={`  ${classes.textBox}  `}>
          <div className={classes.header}>JOB DESCRIPTION</div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit
          </p>
          <p>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur
          </p>
        </div>

        <div className={`  ${classes.textBox}   `}>
          <div className={classes.header}>QUALIFICATION:</div>
          <div className={classes.listItem}>
            <img src="https://static.ascot.ws/assets/Icons/liIcon.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className={classes.listItem}>
            <img src="https://static.ascot.ws/assets/Icons/liIcon.svg" />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={classes.listItem}>
            <img src="https://static.ascot.ws/assets/Icons/liIcon.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>

        <div className={`  ${classes.textBox}   `}>
          <div className={classes.header}>REQUIREMENTS:</div>
          <div className={classes.listItem}>
            <img src="https://static.ascot.ws/assets/Icons/liIcon.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className={classes.listItem}>
            <img src="https://static.ascot.ws/assets/Icons/liIcon.svg" />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={classes.listItem}>
            <img src="https://static.ascot.ws/assets/Icons/liIcon.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <hr className={classes.horDivider} />
        <div className={classes.applyNowSection}>
          {/* <BTN color="#6D2E88" text="Apply now" /> */}
          <CustomBtnComponent txtColor="#6D2E88" txt="Apply now" />

          <div className={classes.iconsRow}>
            <img className={classes.socialMediaIcon} src="https://static.ascot.ws/assets/Icons/linkedinBlack.svg" />
            <img className={classes.socialMediaIcon} src="https://static.ascot.ws/assets/Icons/facebookBlack.svg" />
            <img className={classes.socialMediaIcon} src="https://static.ascot.ws/assets/Icons/twitterBlack.svg"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
