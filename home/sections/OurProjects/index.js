import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { OneProject } from "../../components/OneProject";
import classes from "./styles.module.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/core";

export const OurProjectsSection = ({ projectsRef }) => {
  const options = {
    arrows: false,
  };

  const staticDataTestimonials = [
    {
      id: 1,
      title: "iPillion… RIDERS E-STORE",
      description:
        "With genuine love and interest in the motorcycle industry, a team of passionate and professional riders, armed with an innovative business model, gathered to bring iPillion.io to life.iPillion is MENA's first and leading e-commerce platform for motorcycles and their accessories. The platform offers a one-stop shop for motorcycles, gears, parts, and accessories for passionate riders and motorcycles merchants. Thanks to the well-developed technology and operational set-up, iPillion users can enjoy a friendly and stable site experience, professional customer service, reliable deliveries, the best money guarantee, ZERO commission, and easy returns. Join us now and start your Ride with iPillion to explore new horizons. ",
    },
    {
      id: 2,
      title: "EZ-Credit… We’re on a mission to help you make better decisions.",
      description:
        "Digital lending is not just a trend nowadays; it is a necessity for banks and lenders to stay competitive and in-line with borrower expectations. EZ-Credit helps people make better decisions by simplifying the process of comparing rates and taking out loans, issuing credit cards, and guarantees you get the best Interest Rates for your deposits. In cooperation with Credit Information Network (Ci-Net), the only credit bureau in Kuwait that is specialized in collecting, analyzing, and using data information to prepare credit information, issuing credit reports, credit scoring as well as credit classification for individual and corporate clients, EZ-Credit seamlessly delivers on customer experience, ease of use, and simplicity.",
    },
    {
      id: 3,
      title: "Musaed App",
      description:
        "Stuck on the side of the road? Get professional and swift support using Musaed App. Musaed is the first of its kind, on-demand roadside assistance service that automatically dispatches help when you need it. From a passion stemming from the love of sports cars and the spirit of adventure, Mohammed Al-Enezi came up with the idea of ​​finding a solution to get you back on the road; while taking really good care of your beloved car. If you've broken down and you need roadside assistance for your car, Musaed can help you get back on the road; especially for sport and luxury cars, as they require special and professional care.Access professional roadside assistance anywhere, anytime via Musaed App. Musaed cares for the tiny details while towing your car to protect it from further damage. Whatever the type or brand of your car or motorcycle, Musaed is your answer.",
    },
    {
      id: 4,
      title: "EPS-Mazady",
      description:
        "Whether you are searching for antiques, art pieces, jewelry, unique items, valuable accessories, musical instruments, or anything you can think of, EPS-Mazady is the go-to place for you. EPS-Mazady is a perfect and smart e-marketplace, for both buyers and sellers alike, which houses a wide variety of categories. As you can’t put a price on unique and valuable items, the best way to guarantee you are getting the best price for the product you own is to leave it for the buyers to determine the market value of the item through an auction.",
    },
  ];

  return (
    <div>
      <div className={classes.display}>
        <div className={classes.containerTitle}>
          <div className={classes.smallHead}>OUR PROJECT</div>
          <div className={classes.title}>HIGHLIGHTED PROJECTS</div>
        </div>
      </div>
      <div ref={projectsRef}>
        <Splide options={options} aria-label="My Favorite Images">
          <div className="splide__arrows" />
          {staticDataTestimonials.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <OneProject title={item.title} description={item.description} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};
