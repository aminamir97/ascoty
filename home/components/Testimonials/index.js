import React, { useEffect, useState } from "react";
import classes from "./style/testimonials.module.css";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";

const staticDataTestimonials = [
  {
    id: 1,
    title: "TESTIMONIALS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://static.ascot.ws/assets/Icons/quotation.svg",
    name: "Ali Basel",
    about: "KDD, Project Manager",
  },
  {
    id: 2,
    title: "TESTIMONIALS 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://static.ascot.ws/assets/Icons/quotation.svg",
    name: "Ali Basel",
    about: "KDD, Project Manager",
  },
  {
    id: 3,
    title: "TESTIMONIALS 3 ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://static.ascot.ws/assets/Icons/quotation.svg",
    name: "Ali Basel",
    about: "KDD, Project Manager",
  },
  {
    id: 4,
    title: "TESTIMONIALS 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://static.ascot.ws/assets/Icons/quotation.svg",
    name: "Ali Basel",
    about: "KDD, Project Manager",
  },
];

function Testimonials() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData("api/testimonials");
  }, []);

  async function getData(url) {
    const response = await axios.get("http://localhost:4000/api/testimonials");
  }

  const options = {
    type: "loop",
    autoplay: true,
    rewind: true,
  };

  return (
    <div className={classes.styleTestimonials}>
      <Splide options={options} aria-label="My Favorite Images">
        <div className="splide__arrows" />
        {staticDataTestimonials.map((item) => {
          return (
            <SplideSlide key={item.id} >
              <h1>{item.title}</h1>
              <center>
                <Image src={item.image} width={100} height={100} />
              </center>
              <center>
                <p  className={classes.styleContent}>{item.description}</p>
              </center>
              <p className={classes.styleName}>{item.name}</p>
              <center>
                <p className={classes.styleContent}>{item.about}</p>
              </center>
              <br />
              <br />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Testimonials;
