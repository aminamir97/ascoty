import React from 'react';
import AboutDesign from '../../../components/About-us/AboutDesign';
import AboutAscot from '../../../components/About-us/AboutTitle';
import classes from "./styles.module.css";

export default function AboutSection({aboutUsRef}) {
  return (
    <div className={classes.about} ref={aboutUsRef}>
        <AboutAscot />
        <AboutDesign />
    </div>
  )
}
