import React from "react";
import Image from "next/image";
import styles from "./style/sliderNav.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SlideNav({ offset, componentsHieghts }) {
  const [hieght1, setHieght1] = useState(0);
  const [hieght2, setHieght2] = useState(0);
  const [hieght3, setHieght3] = useState(0);
  const [hieght4, setHieght4] = useState(0);
  const [hieght5, setHieght5] = useState(0);
  const [hieght6, setHieght6] = useState(0);

  const {
    aboutUsHeight,
    contactHeight,
    projectsHeight,
    servicesHeight,
    sliderHeight,
    blogsHeight,
    whatsDiffHeight,
  } = componentsHieghts;

  useEffect(() => {
    if (offset < sliderHeight + aboutUsHeight) {
      setHieght1((offset / (sliderHeight + aboutUsHeight)) * 100);
      setHieght2(0);
      setHieght3(0);
      setHieght4(0);
      setHieght5(0);
      setHieght6(0);
    } else if (
      offset >= sliderHeight + aboutUsHeight &&
      offset <= sliderHeight + aboutUsHeight + servicesHeight
    ) {
      setHieght1(0);
      setHieght2(
        ((offset - (sliderHeight + aboutUsHeight)) / servicesHeight) * 100
      );
      setHieght3(0);
      setHieght4(0);
      setHieght5(0);
      setHieght6(0);
    } else if (
      offset >= sliderHeight + aboutUsHeight + servicesHeight &&
      offset <= sliderHeight + aboutUsHeight + servicesHeight + whatsDiffHeight
    ) {
      setHieght1(0);
      setHieght2(0);
      setHieght3(
        ((offset - (sliderHeight + aboutUsHeight + servicesHeight)) /
          whatsDiffHeight) *
          100
      );
      setHieght4(0);
      setHieght5(0);
      setHieght6(0);
    } else if (
      offset >=
        sliderHeight + aboutUsHeight + servicesHeight + whatsDiffHeight &&
      offset <=
        sliderHeight +
          aboutUsHeight +
          servicesHeight +
          whatsDiffHeight +
          blogsHeight
    ) {
      setHieght1(0);
      setHieght2(0);
      setHieght3(0);
      setHieght4(
        ((offset -
          (sliderHeight + aboutUsHeight + servicesHeight + whatsDiffHeight)) /
          blogsHeight) *
          100
      );
      setHieght5(0);
      setHieght6(0);
    } else if (
      offset >=
        sliderHeight +
          aboutUsHeight +
          servicesHeight +
          whatsDiffHeight +
          blogsHeight &&
      offset <=
        sliderHeight +
          aboutUsHeight +
          servicesHeight +
          whatsDiffHeight +
          blogsHeight +
          projectsHeight
    ) {
      setHieght1(0);
      setHieght2(0);
      setHieght3(0);
      setHieght4(0);
      setHieght5(
        ((offset -
          (sliderHeight +
            aboutUsHeight +
            servicesHeight +
            whatsDiffHeight +
            blogsHeight)) /
          blogsHeight) *
          100
      );
      setHieght6(0);
    } else if (
      offset >=
        sliderHeight +
          aboutUsHeight +
          servicesHeight +
          whatsDiffHeight +
          blogsHeight +
          projectsHeight &&
      offset <=
        sliderHeight +
          aboutUsHeight +
          servicesHeight +
          whatsDiffHeight +
          blogsHeight +
          projectsHeight +
          contactHeight
    ) {
      setHieght1(0);
      setHieght2(0);
      setHieght3(0);
      setHieght4(0);
      setHieght5(0);
      setHieght6(
        ((offset -
          (sliderHeight +
            aboutUsHeight +
            servicesHeight +
            whatsDiffHeight +
            blogsHeight +
            contactHeight)) /
          contactHeight) *
          100
      );
    }
  }, [offset]);

  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.rotateArrow}>
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              backgroundColor: "transparent",
            }}
            animate={{
              rotate: offset ? -90 : 0,
            }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <Image
              width={20}
              height={20}
              src="https://static.ascot.ws/assets/Icons/sliderArrow.svg"
            />
          </motion.div>
        </li>
        <li>
          <div style={{ width: `${hieght1}%` }}></div>
          <a>About Ascot</a>
        </li>
        <li>
          <div style={{ width: `${hieght2}%` }}></div>
          <a>Our Services</a>
        </li>
        <li>
          <div style={{ width: `${hieght3}%` }}></div>
          <a>Our Products</a>
        </li>
        <li>
          <div style={{ width: `${hieght4}%` }}></div>
          <a>Our Blog</a>
        </li>
        <li>
          <div style={{ width: `${hieght5}%` }}></div>
          <a>Our Projects</a>
        </li>
        <li>
          <div style={{ width: `${hieght6}%` }}></div>
          <a>Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default SlideNav;
