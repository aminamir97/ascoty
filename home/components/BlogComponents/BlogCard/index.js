import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./style/blogCard.module.css";
export default function BlogCard(props) {
  return (
    <div>
      <div className="m-auto  border-[1px] rounded-md shadow-sm border-[#e2e2e2] border-b-[2px]">
        <div className="relative">
          <Image
            src={props.data.image}
            alt="blog card image"
            className="w-full h-full"
            width={870}
            height={547}
          />

          <div className="absolute bg-[#6d2e88] top-[90%] rounded-[5px]  left-[12%] h-[87px] w-[85px] flex items-end justify-center text-width text-white">
            <div className={classes.content}>
              {" "}
              <p className={classes.text}>{props.data.day}</p>
              <p>{props.data.month}</p>
            </div>
          </div>
        </div>
        <div className={classes.mainText}>
          <p className={classes.text2}>
            {" "}
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
          </p>

          <Link href="/blog-landing">
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
      </div>
    </div>
  );
}
