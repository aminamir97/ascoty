import React from "react";
import BlogMobile from "../../components/BlogMobileView";
import BTN from "../../components/button";
import classes from "./style/BlogHomeMobile.module.css";
export default function BlogHomeMobile() {
  return (
    <div className={classes.container}>
      <div className="max-w-[100rem] m-auto  my-3 ">
        <div className="">
          <div className="grid justify-center text-center	">
            <p className={classes.blog}>OUR BLOG</p>
            <p className={classes.title}>FEATURED ARTICLES</p>
          </div>
          <div className={classes.bg}>
            <BlogMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
