import video1 from "../../img/travelwebsite.mp4";
import video2 from "../../img/overthesea.mp4";
import video3 from "../../img/crypto-website.mp4";
import video4 from "../../img/tradify.mp4";
import {
  PausedOverlay1,
  PausedOverlay2,
  PausedOverlay3,
  PausedOverlay4
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
            project="https://github.com/memopussle/client_tumeke_nz"
            loom="https://www.loom.com/share/f4cf422c80a543d388acce141c295e4a"
            liveSite="https://tumekenz.herokuapp.com/"
            description="Tui Meke NZ: A travel website that offers special tours in Aotearoa and
        allows users to search for attractions, hotels and restaurants anywhere
        in the world."
          />

          <EachProject
            toggle={toggle}
            video={video2}
            PausedOverlay={PausedOverlay2}
            project="https://github.com/memopussle/Clothing-shop-react"
            loom="https://www.loom.com/share/74168b78f1eb4c699113bf4ab084e1d8"
            liveSite="https://overthesea-shop-qgqll239p-memopussle.vercel.app/"
            description="OverTheSea is an E-commerce clothing store specialising in selling sustainable women's clothes. It is a fully functioning application that displays products and allows users to purchase online."
          />
          <EachProject
            toggle={toggle}
            video={video3}
            PausedOverlay={PausedOverlay3}
            project="https://github.com/memopussle/cryptoX-React"
            loom="https://www.loom.com/share/15c69c1434a043aab1bfda92cfaad24b"
            liveSite="https://sweet-druid-592559.netlify.app/"
            description="KryptoX is a website for crypto enthusiasts - it displays all of the latest information about crypto, trending NFTs and daily News from the world of crypto. With KryptoX, you won't miss out on market trends, price changes and general updates."
          />
          <EachProject
            toggle={toggle}
            video={video4}
            PausedOverlay={PausedOverlay4}
            project="https://github.com/memopussle/cryptoX-React"
            loom="https://www.loom.com/share/15c69c1434a043aab1bfda92cfaad24b"
            liveSite="https://sweet-druid-592559.netlify.app/"
            description="KryptoX is a website for crypto enthusiasts - it displays all of the latest information about crypto, trending NFTs and daily News from the world of crypto. With KryptoX, you won't miss out on market trends, price changes and general updates."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
