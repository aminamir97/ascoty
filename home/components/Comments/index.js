import React from "react";
import Image from "next/image";
import classes from "./style/comment.module.css";
export default function Comment() {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <div className={classes.container}>
        <p className={classes.pComment}>24 Comments</p>
        {arr.map((item, index) => (
          <div className={classes.commentsContainer} key={item}>
            <p className={classes.comment}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <span className={classes.span}>
              <span className={classes.name}>Perspiciatis Unde</span>
              <Image
                width={20}
                height={20}
                src="https://static.ascot.ws/assets/Icons/Date.svg"
                alt="comment"
                className={classes.svg}
              />

              <span className={classes.span2}>03 March 2022</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
