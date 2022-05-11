import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import BTN from "../../components/button";
import classes from "./style/slider.module.css";
import CustomBtnComponent from "../../assets/buttonCustom";

function Slider({ sliderRef }) {
  const staticDataSlider = [
    {
      id: 1,
      title:
        "Motivated teams bonded with strong alliances can push the boundaries of imaginations",
      image:
        "https://static.ascot.ws/assets/Images/pexels-pavel-danilyuk-7658434.jpg",
      buttonText: "View Our Services",
      buttonLink: "/services",
    },
    {
      id: 2,
      title:
        "Motivated teams bonded with strong alliances can push the boundaries of imaginations",
      image: "https://static.ascot.ws/assets/Images/pexels-fauxels-3183165.jpg",
      buttonText: "View Our Services",
      buttonLink: "/services",
    },
    {
      id: 3,
      title:
        "Motivated teams bonded with strong alliances can push the boundaries of imaginations",
      image:
        "https://static.ascot.ws/assets/Images/pexels-pavel-danilyuk-7658434.jpg",
      buttonText: "View Our Services",
      buttonLink: "/services",
    },
    {
      id: 4,
      title:
        "Motivated teams bonded with strong alliances can push the boundaries of imaginations",
      image: "https://static.ascot.ws/assets/Images/pexels-fauxels-3183165.jpg",
      buttonText: "View Our Services",
      buttonLink: "/services",
    },
  ];

  const options = {
    type: "loop",
    autoplay: true,
    rewind: true,
  };
  return (
    <div className={classes.slider} ref={sliderRef}>
      <Splide options={options} aria-label="My Favorite Images">
        <div className="splide__arrows" />
        <SplideSlide>
          <img
            src="https://ascot-stg-static.s3.amazonaws.com/assets/Images/pexels-pavel-danilyuk-7658434.jpg"
            alt="Image 1"
          />
          <div className={classes.styleContent}>
            <h1>
              Motivated teams bonded with strong alliances <br /> can push the
              boundaries of imaginations
            </h1>
            asdasdas
          </div>
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://ascot-stg-static.s3.amazonaws.com/assets/Images/pexels-fauxels-3183165.jpg"
            alt="Image 2"
          />
          <div className={classes.styleContent}>
            <h1>
              Motivated teams bonded with strong alliances <br /> can push the
              boundaries of imaginationss
            </h1>
            <center>
              {/* <CustomBtnComponent txt="View Our Services"  txtColor="#FFFFFF" link="/services" /> */}
            </center>
          </div>
        </SplideSlide>
        <div className="splide__arrows" />
      </Splide>
    </div>
  );
}

export default Slider;
