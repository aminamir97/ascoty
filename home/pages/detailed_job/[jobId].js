import React from "react";
import HeroBanner from "../../components/heroBanner";
import HeroBannerCareers from "../../components/heroBannerCareers";
import Navbar from "../../components/navBar";
import { DetailedJobSection } from "../../sections/DetailedJob";

function JobDetailedPage(props) {
  return (
    <>
      <HeroBannerCareers title="Android developer" />
      <DetailedJobSection />
    </>
  );
}

export default JobDetailedPage;
