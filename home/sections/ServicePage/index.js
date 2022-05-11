import React from "react";
import OurService from "../../components/ServicesComponents/OurServices/our-service";
import ServiceTitle from "../../components/ServicesComponents/ServicesTitle";
import classes from "./styles.module.css";

const servicesData = [
  {
    id: 1,
    backgroundImage: "https://static.ascot.ws/assets/Icons/ServicesPattern1.svg",
    image: "https://static.ascot.ws/assets/Icons/Service1.svg",
    title: "Business Applications",
  },
  {
    id: 2,
    backgroundImage: "https://static.ascot.ws/assets/Icons/ServicesPattern1.svg",
    image: "https://static.ascot.ws/assets/Icons/Service2.svg",
    title: "Implementation Services",
  },
  {
    id: 3,
    backgroundImage: "https://static.ascot.ws/assets/Icons/ServicesPattern1.svg",
    image: "https://static.ascot.ws/assets/Icons/Service3.svg",
    title: "E-Commerce Platforms",
  },
];

function Service() {
  return (
    <div className={classes.service}>
      <ServiceTitle heading={true} />
      <div className={classes.styleServices}>
        {servicesData.map((item) => {
          return (
            <OurService
              key={item.id}
              image={item.image}
              backgroundImage={item.backgroundImage}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Service;
