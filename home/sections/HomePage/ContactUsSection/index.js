import React from "react";
import BTN from "../../../components/OneProject/button";
import ContactUsImage from "../../../components/Contact-Us/ContactImage";
import ContactUsTitle from "../../../components/Contact-Us/ContactTitle";
import classes from "./styles.module.css";
import CustomizedCircularButton from "../../../components/GlobalComponents/button"
import CustomBtnComponent from "../../../assets/buttonCustom";

function ContactUsSection(props) {
  return (
    <div className={classes.connect} ref={props.contactRef}>
      <ContactUsTitle title={props.title} content={props.content} />
      <center>
        {" "}
        {/* <BTN text="Contact us Now" color="#6D2E88" /> */}
        <CustomBtnComponent txt="Contact us Now" txtColor="#6D2E88"  link="#" />
      </center>
      <ContactUsImage  />
    </div>
  );
}

export default ContactUsSection;
