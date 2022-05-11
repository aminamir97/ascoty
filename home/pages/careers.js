import React from "react";
import HeroBanner from "../components/heroBanner";
import HeaderSection from "../sections/CareersSections/HeaderSection/header_section";
import { OpenPositions } from "../sections/CareersSections/OpenPositionsSection/openPositions";
import ContactUsSection from "../sections/HomePage/ContactUsSection";

function CareersPage() {
  return (
    <>
      <HeroBanner title="CAREERS" />
      <HeaderSection />
      <OpenPositions />
      <ContactUsSection  title="Get in touch with us" content="Get in touch with us and we will inform you when we have new position" />
    </>
  );
}

export default CareersPage;
