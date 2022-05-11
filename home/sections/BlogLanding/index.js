import React from "react";
import classes from "./style/blogLanding.module.css";
import LandingImage from "../../components/LandingBlog/LandingImage";
import Search from "../../components/BlogComponents/Search";
import Category from "../../components/BlogComponents/Category";
import Topics from "../../components/BlogComponents/topics";
import Tags from "../../components/Tags";
import Icons from "../../components/Icons";
import Comment from "../../components/Comments";
import BTN from "../../components/OneProject/button";
import LeaveComment from "../../components/Comments/LeaveComment";
import CustomBtnComponent from "../../assets/buttonCustom";
export default function Landing() {
  return (
    <div className={classes.container}>
      <div className={classes.gridContainer}>
        <div className={classes.firstGrid}>
          <LandingImage />
        </div>
        <div>
          <Search />
          <Category />
          <Topics />
          <Tags />
        </div>
      </div>
      <div>
        <Icons />
      </div>
      <div className={classes.gridContainer}>
        <Comment />
      </div>
      <div className={classes.iconsDiv}>
        {/* <BTN text="View All COMMENTS" color="#6D2E88" /> */}
        <CustomBtnComponent txt="View All COMMENTS" txtColor="#6D2E88" />
      </div>
      <div className={classes.iconsDiv}>
        <LeaveComment />
        <div></div>
      </div>
    </div>
  );
}
