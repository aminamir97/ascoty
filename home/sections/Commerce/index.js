import React from "react";
import BlogCard from "../../components/BlogComponents/BlogCard";
import classes from "./style/commerce.module.css";

export default function ECommerce() {
  const arr = [
    {
      id: 998,
      day: "10",
      month: "March",
      image: "https://static.ascot.ws/assets/Images/topics1.jpg",
    },
    {
      id: 98,
      day: "09",
      month: "March",
      image: "https://static.ascot.ws/assets/Images/topics2.jpg",
    },
    {
      id: 928,
      day: "05",
      month: "March",
      image: "https://static.ascot.ws/assets/Images/topics3.jpg",
    },
    {
      id: 995,
      day: "01",
      month: "March",
      image: "https://static.ascot.ws/assets/Images/topics1.jpg",
    },
    {
      id: 55,
      day: "28",
      month: "Feb",
      image: "https://static.ascot.ws/assets/Images/topics3.jpg",
    },
    {
      id: 212,
      day: "15",
      month: "Feb",
      image: "https://static.ascot.ws/assets/Images/topics2.jpg",
    },
    {
      id: 154,
      day: "29",
      month: "Jan",
      image: "https://static.ascot.ws/assets/Images/topics3.jpg",
    },
    {
      id: 997868,
      day: "21",
      month: "Jan",
      image: "https://static.ascot.ws/assets/Images/topics1.jpg",
    },
    {
      id: 786,
      day: "11",
      month: "Jan",
      image: "https://static.ascot.ws/assets/Images/topics2.jpg",
    },
  ];

  return (
    <div>
      <div className={classes.allPage}>
        <div>
          <div className={classes.grid}>
            {arr.map((item, index) => (
              <div key={item.id.toString()}>
                <div className={classes.card}>
                  <BlogCard data={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
