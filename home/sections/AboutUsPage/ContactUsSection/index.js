import React from 'react';
import CustomBtnComponent from '../../../assets/buttonCustom';
import BTN from "../../../components/button"
import ContactUsImage from '../../../components/Contact-Us/ContactImage';
import ContactUsTitle from '../../../components/Contact-Us/ContactTitle';
import classes from "./styles.module.css";


function ContactUsSection(props) {
  return (
    <div className={classes.connect} ref={props.contactUsRef}>
        <ContactUsTitle title ={props.title} content={props.content}/>
        <center > 
          {/* <BTN text="Contact us Now" color="#6D2E88"/> */}
        
        <CustomBtnComponent txt="Contact us Now" txtColor="#6D2E88" />
        </center>
        <ContactUsImage />
    </div>
  )
}

export default ContactUsSection