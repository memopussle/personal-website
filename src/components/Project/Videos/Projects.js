import video1 from "../../../img/travelwebsite.mp4";
import HoverVideoPlayer from "react-hover-video-player";
import {
  PausedOverlay1,
  PausedOverlay2,
  PausedOverlay3,
} from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";
import video2 from "../../../img/overthesea.mp4";
import video3 from "../../../img/crypto-app.mp4";
import "../Project.scss";
import { FaGithub, FaYoutube, FaTable } from "react-icons/fa";
import Popup from "../Popup/Popup";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [popUp, setPopUp] = useState(false);

  const toggle = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      {popUp === true && <Popup popUp={popUp} setPopUp={setPopUp} />}
      <div className="container section-margin">
        <h3 className="project__title primary-text ">Selected Projects</h3>
        <div className="video">
          <div className="video--1">
            <Link to="/project1">
              <HoverVideoPlayer
                videoSrc={video1}
                pausedOverlay={<PausedOverlay1 />}
                loadingOverlay={<LoadingOverlay />}
                onClick={toggle}
                className="project__video"
              />
            </Link>
            <p className="project__description">
              Tui Meke NZ: A travel website that offers special tours in
              Aotearoa and allows users to search for attractions, hotels and
              restaurants anywhere in the world.
            </p>

            <div className="project__icons">
              <Link to="/project1">
                <button className="normal-button" onClick={toggle}>
                  SEE MORE
                </button>
              </Link>
              <div className="project__button">
                <a
                  href="https://github.com/memopussle/client_tumeke_nz"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub
                    size={30}
                    style={{ fill: "url(#more-blue-gradient)" }}
                  />
                </a>
                <a
                  href="https://www.loom.com/share/fc8f98f56a0a47d38568546090dacffb"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaYoutube
                    size={30}
                    style={{ fill: "url(#more-purple-gradient)" }}
                  />
                </a>
                <a
                  href="https://clothing-shop-overthesea.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaTable
                    size={30}
                    style={{ fill: "url(#purple-gradient)" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="video--2">
            <Link to="/project2">
              <HoverVideoPlayer
                videoSrc={video2}
                pausedOverlay={<PausedOverlay2 />}
                loadingOverlay={<LoadingOverlay />}
                className="project__video"
                onClick={toggle}
              />
            </Link>

            <p className="project__description">
              OverTheSea is an E-commerce clothing store specialising in selling
              sustainable women's clothes. It is a fully functioning application
              that displays products and allows users to purchase online.
            </p>

            <div className="project__icons">
              <Link to="/project2">
                <button className="normal-button" onClick={toggle}>
                  SEE MORE
                </button>
              </Link>

              <div className="project__button">
                <a
                  href="https://github.com/memopussle/Clothing-shop-react"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub
                    size={30}
                    style={{ fill: "url(#more-blue-gradient)" }}
                  />
                </a>
                <a
                  href="https://www.loom.com/share/713e2c7d96564bbfbe6f9d39c2e08f83"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaYoutube
                    size={30}
                    style={{ fill: "url(#more-purple-gradient)" }}
                  />
                </a>
                <a
                  href="https://overthesea-shop-qgqll239p-memopussle.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaTable
                    size={30}
                    style={{ fill: "url(#purple-gradient)" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="video--3">
            <Link to="/project3">
              <HoverVideoPlayer
                videoSrc={video3}
                pausedOverlay={<PausedOverlay3 />}
                loadingOverlay={<LoadingOverlay />}
                className="project__video"
                onClick={toggle}
              />
            </Link>

            <p className="project__description">
              KryptoX is a website for crypto enthusiasts - it displays all of
              the latest information about crypto, trending NFTs and daily News
              from the world of crypto.
            </p>
            <div className="project__icons">
              <Link to="/project3">
                <button className="normal-button" onClick={toggle}>
                  SEE MORE
                </button>
              </Link>
              <div className="project__button">
                <a
                  href="https://github.com/memopussle/cryptoX-React"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub
                    size={30}
                    style={{ fill: "url(#more-blue-gradient)" }}
                  />
                </a>
                <a
                  href="https://www.loom.com/share/0e5404b67872492c9c631691f5969651"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaYoutube
                    size={30}
                    style={{ fill: "url(#more-purple-gradient)" }}
                  />
                </a>
                <a
                  href="https://luxury-seahorse-505c6e.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaTable
                    size={30}
                    style={{ fill: "url(#purple-gradient)" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
