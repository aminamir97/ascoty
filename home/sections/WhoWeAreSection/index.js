import React from "react";
import AboutWhoWeAre from "../../components/WhoWeAre/About";
import OurCore from "../../components/WhoWeAre/OurCoreValues/OurCore";
import OurMission from "../../components/WhoWeAre/ourMission";
import OurVision from "../../components/WhoWeAre/OurVision";
import classes from "./styles.module.css";

const servicesData = [
  {
    id: 1,
    title: "RESPECT",
    description:
      "Our employees are our assets and future partners. We hire the best and expect great accomplishments, and treat our clients and partners the way we want to be treated. ",
  },
  {
    id: 2,
    title: "HONESTY",
    description:
      "Honesty is the foundation of our practice and INTEGRITY is the essence. We stick to our commitments and communicate openly and honestly",
  },
  {
    id: 3,
    title: "SERVANT LEADERSHIP",
    description:
      "Inspire and help others to grow, succeed and lead. We work on recognizing the vital link between individual efforts and the group's achievements.",
  },
  {
    id: 4,
    title: "RESPONSIBILITY",
    description:
      "Embrace opportunities to contribute to our societies, while understanding and advancing the group's positive goals.",
  },
  {
    id: 5,
    title: "PRIDE",
    description: "Our brand is our pride & glory. We live by our work.",
  },
  {
    id: 6,
    title: "COMMITMENT",
    description: "Commit to innovation and excellence",
  },
  {
    id: 7,
    title: "CONTINUITY",
    description:
      "Keep developing and executing strategies to address potential business opportunities.",
  },
];

function WhoWeAreSection() {
  return (
    <>
      <AboutWhoWeAre />
      <OurVision />
      <OurMission />
      <div className={classes.ourCore}>
        <h1>OUR CORE VALUES</h1>
        <div className={classes.styleCore}>
          {servicesData.map((item) => {
            return (
              <OurCore
                key={item.id}
                description={item.description}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WhoWeAreSection;
