import React from "react";
import HeroBanner from "../components/heroBanner";
import BlogCardsSection from "../sections/BlogPage/BlogCardsSection";
import Search from "../components/BlogComponents/Search";
import Pagination from "../components/Pagination";
export default function blog() {
  return (
    <div>
      <HeroBanner title="BLOG" />
      <BlogCardsSection />
      <Pagination />
    </div>
  );
}
