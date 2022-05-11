import React from "react";
import classes from "./style/about.module.css";
import BTN from "../../button";
import CustomBtnComponent from "../../../assets/buttonCustom";


function AboutAscot() {
  return (
      <div className={classes.whoWeAre}>
        <h1>WHO WE ARE</h1>
        <p>
          Ascot Enterprise Solutions is part of Ebtikar Smart Solutions Group of
          Companies. We are a team of talented and experienced individuals who
          look forward to every challenge with passion and determination to make
          Ascot shine like a star on stage. Inspired by the growing demand for
          intelligent solutions in the digital evolution, which is evolving at a
          rapid rate, Ascot is continually pushing the boundaries of technology
          to provide truly innovative solutions for our client's needs in the
          different fields of technology such as e-commerce, digital marketing,
          blockchain, Fintech, mobile &amp; web applications, business and IT
          strategies, digital transformation, and electronic platforms
          technologies that are built to satisfy your needs.
        </p>
        <CustomBtnComponent txt="Read More" txtColor="#6D2E88" link="/who-we-are"  />
      </div>
  );
}

export default AboutAscot;
