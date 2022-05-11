import React from "react";
import classes from "./header.module.css";

const HeaderText = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headerTitle}>JOIN OUR TEAM</div>
      <div className={classes.headerDesc}>
        Each member of our team takes responsibility for creating a culture that
        enables exceptional outcomes. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  );
};

export default HeaderText;
