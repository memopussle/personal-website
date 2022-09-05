import video1 from "../../img/travelwebsite.mp4";
import video2 from "../../img/overthesea.mp4";
import video3 from "../../img/crypto-website.mp4";
import {
  PausedOverlay1,
  PausedOverlay2,
  PausedOverlay3,
} from "./Videos/PausedOverlay";
import "./Project.scss";
import Popup from "./Popup/Popup";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import EachProject from "./EachProject";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
  const [popUp, setPopUp] = useState(false);
  const project2 = useRef(null);
  const project3 = useRef(null);

  const toggle = () => {
    setPopUp(!popUp);
  };

  //animation on project 1
  useEffect(() => {
    gsap.fromTo(
      project2.current,
      { x: -20, opacity: 0 },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: project2.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );

      gsap.fromTo(
        project3.current,
        { x: 20, opacity: 0 },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: project3.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
  }, []);

  return (
    <div id="projects">
      {popUp === true && <Popup popUp={popUp} setPopUp={setPopUp} />}
      <div className="container section-margin">
        <h3 className="project__title primary-text ">Selected Projects</h3>
        <div className="video">
          <EachProject
            toggle={toggle}
            video={video1}
            PausedOverlay={PausedOverlay1}
          />

          <EachProject
            toggle={toggle}
            video={video2}
            PausedOverlay={PausedOverlay2}
          />
          <EachProject
            toggle={toggle}
            video={video3}
            PausedOverlay={PausedOverlay3}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
