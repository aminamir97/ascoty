import React from "react";
import classes from "./style/topics.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Topics() {
  return (
    <div className={classes.all}>
      <p className={classes.topics}>Related Topics</p>
      <div className={classes.container}>
        <div>
          <Image width={272} height={190} src="https://static.ascot.ws/assets/Images/topics1.jpg" />
        </div>
        <div>
          <p className={classes.p}>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p>
          <Link href="#">
            <a className={classes.aStyle}> E-Commerce</a>
          </Link>
          <span className={classes.span}>
            <Image
              width={20}
              height={20}
              src="https://static.ascot.ws/assets/Icons/Comment.svg"
              alt="comment"
              className={classes.svg}
            />
            <span className={classes.span2}>03 comments</span>
          </span>
        </div>
        <div>
          <Image width={272} height={190} src="https://static.ascot.ws/assets/Images/topics2.jpg" />
        </div>
        <div>
          <p className={classes.p}>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p>
          <Link href="#">
            <a className={classes.aStyle}> E-Commerce</a>
          </Link>
          <span className={classes.span}>
            <Image
              width={20}
              height={20}
              src="https://static.ascot.ws/assets/Icons/Comment.svg"
              alt="comment"
              className={classes.svg.src}
            />
            <span className={classes.span2}>03 comments</span>
          </span>
        </div>
        <div>
          <Image width={272} height={190} src="https://static.ascot.ws/assets/Images/topics3.jpg" />
        </div>
        <div>
          <p className={classes.p}>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p>
          <Link href="#">
            <a className={classes.aStyle}> E-Commerce</a>
          </Link>
          <span className={classes.span}>
            <Image
              width={20}
              height={20}
              src="https://static.ascot.ws/assets/Icons/Comment.svg"
              alt="comment"
              className={classes.svg.src}
            />
            <span className={classes.span2}>03 comments</span>
          </span>
        </div>
      </div>
    </div>
  );
}
