import React from "react";
import MatchMediaWrapper from "../navBar/HOC";
import { ProjectsDesktopView } from "./ProjectsDesktopView";
import { ProjectsMobileView } from "./ProjectsMobileView";

export const OneProject = (props) => {
  return (
    <MatchMediaWrapper
      mobileContent={
        <ProjectsMobileView
        isProjPage={props.isProjPage}
          title={props.title}
          description={props.description}
        />
      }
      desktopContent={
        <ProjectsDesktopView
        isProjPage={props.isProjPage}

          title={props.title}
          description={props.description}
        />
      }
    />
  );
};
