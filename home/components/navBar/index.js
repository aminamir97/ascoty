import MobileNav from "./mobileNav";
import MatchMediaWrapper from "./HOC/";
import DesktopNav from "./desktopNav";
import React from "react";

export default function Navbar() {
  return (
    <MatchMediaWrapper
      mobileContent={<MobileNav />}
      desktopContent={<DesktopNav />}
    />
  );
}
