import React from "react";
import MatchMediaWrapper from "../navBar/HOC";
import AboutUsDesktopView from "./desktopView";
import AboutUsMobileView from "./mobileView";

const AboutUsComponent = ({ aboutUsRef }) => {
  return (
    <MatchMediaWrapper
      mobileContent={<AboutUsMobileView />}
      desktopContent={<AboutUsDesktopView aboutUsRef={aboutUsRef} />}
    />
  );
};

export default AboutUsComponent;
