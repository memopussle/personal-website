import React, { useRef, useEffect } from "react";
import "./App.scss";
import {
  Nav,
  Skills,
  Projects,
  Experience,
  Contact,
  About,
  LandingPage,
} from "./components/index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  const boxRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const el = boxRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );

    const element = aboutRef.current;
    gsap.fromTo(
      element,
      {
        y: 40,
        opacity: 0,
      },
      {
        ease: "power1.out",
        y: 0,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "top bottom",
          end: "top center",
        },
      }
    );

    gsap.fromTo(
      skillRef.current,
      {
        y: -50,
      },
      {
        duration: 2,
        y: 0,
        ease: "Expo.easeInOut",
        scrollTrigger: {
          trigger: skillRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );


    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        duration: 0.5,
        y: 0,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="background">
      <Nav />
      <LandingPage />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillRef}>
        <Skills />
      </div>

        <Projects />

      <div ref={boxRef}>
        <Experience />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
