import React from "react";
import HeroBanner from "../components/heroBanner";
import Pagination from "../components/Pagination";
import ECommerce from "../sections/Commerce";
export default function Commerce() {
  return (
    <div>
      <HeroBanner title="BLOG" />
      <ECommerce />
      <Pagination/>
    </div>
  );
}
