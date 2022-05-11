import React from "react";
import CustomBtnComponent from "../../assets/buttonCustom";
import BlogSwiper from "../../components/BlogSwiper";
import BTN from "../../components/OneProject/button";
import classes from "./style/blogSwiper.module.css";
export default function BlogSwiperHome({ blogsRef }) {
  return (
    <div className={classes.container} ref={blogsRef}>
      <div className={classes.allPage}>
        <div className="grid justify-center">
          <BlogSwiper />
        </div>
        <div className={classes.center}>
          {/* <BTN text="View Our Blog" color="#6D2E88" link="/blog" /> */}
          <CustomBtnComponent txt="View Our Blog" txtColor="#6D2E88" link="/blog"  />
        </div>
      </div>
    </div>
  );
}
