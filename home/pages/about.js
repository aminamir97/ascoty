import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import axios from "axios";
import HeroBanner from "../components/heroBanner";
import AboutSection from "../sections/AboutUsPage/AboutSection";
import CardSection from "../sections/AboutUsPage/CardSection";
import ContactUsSection from "../sections/AboutUsPage/ContactUsSection";
import TeamSection from "../sections/AboutUsPage/TeamSection";
import TestimonialsSection from "../sections/AboutUsPage/Testimonials";
import Animated from "../components/animated";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const [state, setState] = useState({});

  async function getData() {
    let config = {
      method: "GET",
      baseURL: "http://localhost:4000/api/teams/",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    axios(config).then((res) => {
      setState(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  const [windowWidth, setwidth] = useState(false);

  const heroRef = useRef(null);
  const aboutUsRef = useRef(null);
  const cardRef = useRef(null);
  const WhatDiffRef = useRef(null);
  const testimonialsRef = useRef(null);
  const teamsRef = useRef(null);
  const contactUsRef = useRef(null);

  const contentScrollRef = useRef(null);
  const overlayZoom = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 435px)");

    setwidth(mediaWatcher.matches);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: WhatDiffRef.current,
        start: "top 155px",
        pin: true,
        scrub: true,
        // markers:true
      },
    });

    t1.to(overlayZoom.current, { css: { transform: "scale(5)" }, duration: 1 });
    t1.to(
      contentScrollRef.current,
      { css: { transform: "scale(1)" }, duration: 1 },
      "-=1"
    );

    if (mediaWatcher.matches) {
      t1.to(overlayZoom.current, {
        css: { transform: "scale(40)", y: "-200", x: "-2000" },
        duration: 5,
      });
    } else {
      t1.to(overlayZoom.current, {
        css: { transform: "scale(40)", y: "-2000", x: "-5000" },
        duration: 5,
      });
    }
    t1.fromTo(
      textRef.current,
      { css: { opacity: 0 } },
      { duration: 2, css: { opacity: 1 } }
    );
  }, []);

  return (
    <>
      <HeroBanner title="ABOUT US" heroRef={heroRef} />
      <AboutSection aboutUsRef={aboutUsRef} />
      <CardSection cardRef={cardRef} />
      <Animated
        WhatDiffRef={WhatDiffRef}
        contentScrollRef={contentScrollRef}
        overlayZoom={overlayZoom}
        textRef={textRef}
        windowWidth={windowWidth}
      />
      <TestimonialsSection testimonialsRef={testimonialsRef} />
      <TeamSection items={state} teamsRef={teamsRef} />
      <ContactUsSection
        contactUsRef={contactUsRef}
        title="We Would Love To Hear From You"
        content="Let's Make Something Awesome Together"
      />
    </>
  );
}

export default AboutUs;
