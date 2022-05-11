import React from "react";
import HeaderText from "../../../components/careers/header_text/HeaderText";
import Overlaying_divs from "../../../components/careers/overlaying_divs/overlaying_divs";
import classes from "./styles.module.css";
const HeaderSection = () => {
  return (
    <div className={classes.headerContainer}>
      <Overlaying_divs />
      <HeaderText />
    </div>
  );
};

export default HeaderSection;
