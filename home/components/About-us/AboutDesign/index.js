import React from "react";
import classes from "./style/about.module.css";
import Image from "next/image";

function AboutDesign() {
  return (
    <div className={classes.aboutPhotos}>
      <div className={classes.firstStyleOfImages}>
        <img className={classes.backgroun1} src="https://static.ascot.ws/assets/Images/pexels-fauxels-3183127.jpg" />
        <img className={classes.backgroun2} src="https://static.ascot.ws/assets/Images/pexels-canva-studio-3194518.jpg" />
      </div>
      <div className={classes.secondStyleOfImages}>
        <div className={classes.styleIconBackground}>
          <Image src="https://static.ascot.ws/assets/Patterns/AboutPattern.svg" width={400} height={400} />
        </div>
        <img className={classes.backgroun3} src="https://static.ascot.ws/assets/Images/pexels-ivan-samkov-8117438.jpg" />
      </div>
    </div>
  );
}
export default AboutDesign;
