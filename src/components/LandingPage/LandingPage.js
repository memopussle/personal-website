import React, { useRef, useEffect } from "react";
import "./LandingPage.scss";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMediumCircle,
  AiFillGithub,
} from "react-icons/ai";
import { gsap } from "gsap";
import GradientSvg from "./GradientSvg";

const LandingPage = () => {
  const landingTextRef = useRef();
  const landingSubRef = useRef();
  const landingButtonRef = useRef();
  const icon1Ref = useRef();
  const iconRef = useRef();


  //animation
  useEffect(() => {
    gsap.from(
      landingTextRef.current,
      1.5,
      { opacity: 0, delay: 1, x: "-20", ease: "Expo.easeInOut" },
      0.08
    );

    gsap.from(
      landingSubRef.current,
      1.5,
      { opacity: 0, delay: 1.2, x: "-50", ease: "Expo.easeInOut" },
      0.08
    );
    gsap.from(
      landingButtonRef.current,
      1.5,
      { opacity: 0, delay: 1.3, x: "-20", ease: "Expo.easeInOut" },
      0.08
    );
    gsap.from(
      icon1Ref.current,
      1.5,
      { opacity: 0, delay: 1.5, y: "-20", ease: "Expo.easeInOut" },
      0.08
    );
     gsap.from(
       iconRef.current,
       1.5,
       { opacity: 0, delay: 1.5, y: "-20", ease: "Expo.easeInOut" },
       0.08
     );
  });
  return (
    <section id="home">
      <div className="container">
        <div className="landing__text flex section-margin">
          <h1 ref={landingTextRef}>
            <span className="landing__before-name primary-text">I'm</span>{" "}
            <span className="landing__name">Thu Giang </span>
          </h1>
          <p className=" small-margin" ref={landingSubRef}>
            <span className="primary-text">Lorem ipsum dolor sit amet</span>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div>
            <button
              className="normal-button small-margin landing__button"
              ref={landingButtonRef}
            >
              SEE MY WORK
            </button>
          </div>
        </div>

        <GradientSvg />
        <div className="social-media">
          <div className="social-media__stick-wrapper">
            <div className="social-media__stick" ref={icon1Ref}></div>
          </div>
          <div className="social-media__icons" ref={iconRef}>
            <a
              href="https://www.linkedin.com/in/thu-giang-20b2111ba/"
              target="_blank"
              rel="noopener"
            >
              <AiFillLinkedin
                size={35}
                style={{ fill: "url(#blue-gradient)" }}
              />
            </a>
            <a
              href="https://medium.com/@xanhtham.cuc"
              target="_blank"
              rel="noopener"
              
            >
              <AiFillMediumCircle
                size={35}
                style={{ fill: "url(#more-blue-gradient)" }}
              />
            </a>
            <a
              href="https://twitter.com/memopussle"
              target="_blank"
              rel="noopener"
             
            >
              <AiFillTwitterCircle
                size={35}
                style={{ fill: "url(#purple-gradient)" }}
              />
            </a>
            <a
              href="https://github.com/memopussle"
              target="_blank"
              rel="noopener"
             
            >
              <AiFillGithub
                size={35}
                style={{ fill: "url(#more-purple-gradient)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
