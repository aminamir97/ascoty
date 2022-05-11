import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../../components/BlogComponents/BlogCard";
import Search from "../../components/BlogComponents/Search";
import Category from "../../components/BlogComponents/Category";
import classes from "./style/blogPage.module.css";
import Topics from "../../components/BlogComponents/topics";
export default function BlogCardsSection() {
  const arr = [
    {
      id: 365453,
      day: "15",
      month: "March",
      image:
        "https://static.ascot.ws/assets/Images/topics1.jpg",
    },
    {
      id: 33336,
      day: "12",
      month: "March",
      image:
        "https://static.ascot.ws/assets/Images/topics2.jpg",
    },
    {
      id: 443543533,
      day: "01",
      month: "March",
      image:
        "https://static.ascot.ws/assets/Images/topics3.jpg",
    },
    {
      id: 3324433,
      day: "26",
      month: "Feb",
      image:
        "https://static.ascot.ws/assets/Images/topics2.jpg",
    },
  ];
  return (
    <div>
      <div className={classes.allPage}>
        <div className={classes.grid}>
          <div>
            {arr.map((item) => (
              <div key={item.id.toString()}>
                <div className="">
                  <BlogCard data={item} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <Search />
            <Category />
            <Topics />
          </div>
        </div>
      </div>
    </div>
  );
}
