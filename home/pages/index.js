import { OurProjectsSection } from "../sections/OurProjects";
import { gsap } from "gsap";
import Slider from "../components/Slider";
import ContactUsSection from "../sections/HomePage/ContactUsSection";
import ServicesSection from "../sections/HomePage/Services";
import Animated from "../components/animated/index";
import SlideNav from "../components/sliderNav";
import { AboutUsSection } from "../sections/AboutUsSection";
import { useState, useEffect, useRef } from "react";
import BlogHomeMobile from "../sections/BlogHomeMobile";
import BlogSwiperHome from "../sections/BlogSwiperHome";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [windowWidth, setwidth] = useState(false);
  const [offset, setOffset] = useState(0);
  const [componentsHieghts, setcomponentsHieghts] = useState({});

  const sliderRef = useRef(null);
  const aboutUsRef = useRef(null);
  const ServicesRef = useRef(null);
  const WhatDiffRef = useRef(null);
  const blogsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const contentScrollRef = useRef(null);
  const overlayZoom = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    
    const t1 = gsap.timeline({
      scrollTrigger:{
        trigger:WhatDiffRef.current,
        start:"top 155px",
        pin:true,
        scrub:true,
        // markers:true     
      }
    }) 

    t1.to(overlayZoom.current ,{css:{transform:"scale(5)"},duration:1})
    t1.to(contentScrollRef.current ,{css:{transform:"scale(1)"},duration:1},"-=1")

    t1.to(overlayZoom.current ,{css:{transform:"scale(40)",y:"-2000",x:"-5000"},duration:5})
    t1.fromTo(textRef.current, {css:{opacity:0}}, {duration: 2, css:{opacity:1}})





  }, []);

  useEffect(() => {
    setcomponentsHieghts({
      sliderHeight: sliderRef.current.clientHeight,
      aboutUsHeight: aboutUsRef.current.clientHeight,
      whatsDiffHeight: WhatDiffRef.current.clientHeight + 600,
      blogsHeight: blogsRef.current.clientHeight,
      servicesHeight: ServicesRef.current.clientHeight,
      projectsHeight: projectsRef.current.clientHeight,
      contactHeight: contactRef.current.clientHeight,
    });

    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SlideNav offset={offset} componentsHieghts={componentsHieghts} />
      <Slider sliderRef={sliderRef} />
      <AboutUsSection aboutUsRef={aboutUsRef} />
      <ServicesSection ServicesRef={ServicesRef} />
      <Animated
        WhatDiffRef={WhatDiffRef}
        contentScrollRef={contentScrollRef}
        overlayZoom={overlayZoom}
        textRef={textRef}
        windowWidth={windowWidth}
      />
      <BlogSwiperHome blogsRef={blogsRef} />
      <BlogHomeMobile />
      <OurProjectsSection projectsRef={projectsRef} />

      <ContactUsSection
        title="We Would Love To Hear From You"
        content="Let's Make Something Awesome Together"
        contactRef={contactRef}
      />
    </>
  );
}
