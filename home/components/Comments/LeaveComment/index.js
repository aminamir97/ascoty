import React from "react";
import classes from "../LeaveComment/style/leaveComment.module.css";
import Image from "next/image";
export default function leaveComment() {
  return (
    <div>
      {" "}
      <p className={classes.pComment}>Leave a comment</p>
      <div className={classes.textAreaContainer}>
        <textarea
          className={classes.textArea}
          placeholder="write a comment"
          name="w3review"
          // rows="8"
          // cols="87"
        ></textarea>
        <div className={classes.grid}>
          <input className={classes.input} placeholder="Name*" />
          <input className={classes.input} placeholder="Email*" />
        </div>
        <div className={classes.center}>
          <div className={classes.subContainer}>
            <div className={classes.circle}>
              <Image
                width={20}
                height={20}
                src="https://static.ascot.ws/assets/Icons/vector_white.svg"
                alt="comment"
                className={classes.svg}
              />
            </div>
            <p>Post Comment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
