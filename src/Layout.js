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
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const el = boxRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.2 },
      {
        opacity: 1,
        duration: 0.5,
        scale: 1.1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    const element = aboutRef.current;
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -200,
      },
      {
        ease: "power1.out",
        opacity: 1,
        y: 0,
        duration: 3,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "top center",
          end: "bottom top",
        },
      }
    );

    gsap.fromTo(
      skillRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "Expo.easeInOut",
        scrollTrigger: {
          trigger: skillRef.current,
        },
      }
    );

    gsap.fromTo(
      projectRef.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "Expo.easeInOut",
        scrollTrigger: {
          trigger: projectRef.current,
          scrub: true,
          start: "top bottom",
          end: "top top",
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

      <div ref={projectRef}>
        <Projects />
      </div>

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
