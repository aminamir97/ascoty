import Image from "next/image";
import React from "react";
import classes from "./Pbutton.module.css";
import Link from "next/link";

export const PButton = () => {
  return (
    <div className={classes.circleContainer}>
      <Link href={"/detailed_job/1123"}>
        <Image className={classes.arrow} src="https://static.ascot.ws/assets/Icons/vector_white.svg" width={13} height={13} />
      </Link>
    </div>
  );
};
