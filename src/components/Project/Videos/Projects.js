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
import React, {useState} from "react";

const Projects = () => {
    const [popUp, setPopUp] = useState(false);
  const toggle = () => {
    setPopUp(!popUp);
    console.log(popUp)
  }
  return (
    <>
      {popUp === true && <Popup popUp={popUp} setPopUp={setPopUp} />}
      <div className="container section-margin">
        <h3 className="project__title primary-text ">Selected Projects</h3>
        <div className="video">
          <div className="video--1">
            <HoverVideoPlayer
              videoSrc={video1}
              pausedOverlay={<PausedOverlay1 />}
              loadingOverlay={<LoadingOverlay />}
              onClick={toggle}
              className="project__video"
            />

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            </p>
            <div className="project__icons">
              <button className="normal-button" onClick={toggle}>
                SEE MORE
              </button>

              <div>
                <button className="transparent-button">
                  <FaGithub
                    size={30}
                    style={{ fill: "url(#more-blue-gradient)" }}
                  />
                </button>
                <button className="transparent-button">
                  <FaYoutube
                    size={30}
                    style={{ fill: "url(#more-purple-gradient)" }}
                  />
                </button>
                <button className="transparent-button">
                  <FaTable
                    size={30}
                    style={{ fill: "url(#purple-gradient)" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="video--2">
            <HoverVideoPlayer
              videoSrc={video2}
              pausedOverlay={<PausedOverlay2 />}
              loadingOverlay={<LoadingOverlay />}
              className="project__video"
            />
            <div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
              </p>
            </div>
          </div>
          <div className="video--3">
            <HoverVideoPlayer
              videoSrc={video3}
              pausedOverlay={<PausedOverlay3 />}
              loadingOverlay={<LoadingOverlay />}
              className="project__video"
            />
            <div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
