import Link from "next/link";
import React from "react";
import classes from "./style/tags.module.css";
export default function Tags() {
  return (
    <div className={classes.container}>
      <p className={classes.tagsP}>TAGS</p>
      <div className={classes.tagsGrid}>
        <div className={classes.div}>
          {" "}
          <Link href="#">
            <a className={classes.border}>Business</a>
          </Link>{" "}
        </div>
        <div className={classes.div}>
          {" "}
          <Link href="#">
            <a className={classes.border}>Future</a>
          </Link>
        </div>
        <div className={classes.div}>
          {" "}
          <Link href="#">
            <a className={classes.border}>Agile</a>
          </Link>
        </div>
        <div className={classes.div}>
          {" "}
          <Link href="#">
            <a className={classes.border}>Technology</a>
          </Link>
        </div>
        <div className={classes.div}>
          {" "}
          <Link href="#">
            <a className={classes.border}>Technology</a>
          </Link>
        </div>
        <div className={classes.div}>
          {" "}
          <Link href="#">
            <a className={classes.border}>Agile</a>
          </Link>
        </div>
        <div className={classes.div}>
          {" "}
          <Link href="#">
            <a className={classes.border}>Business</a>
          </Link>
        </div>
        <div className={classes.div}>
          {" "}
          <Link href="#">
            <a className={classes.border}>Modern</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
