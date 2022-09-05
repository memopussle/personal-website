import React from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import LoadingOverlay from "./Videos/LoadingOverlay";
import { FaGithub, FaYoutube, FaTable } from "react-icons/fa";
import "./Project.scss";

const EachProject = ({toggle, video,PausedOverlay}) => {

  return (
    <div>
      <Link to="/project1">
        <HoverVideoPlayer
          videoSrc={video}
          pausedOverlay={<PausedOverlay />}
          loadingOverlay={<LoadingOverlay />}
          onClick={toggle}
          className="project__video"
        />
      </Link>
      <p className="project__description">
        Tui Meke NZ: A travel website that offers special tours in Aotearoa and
        allows users to search for attractions, hotels and restaurants anywhere
        in the world.
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
            <FaGithub size={30} style={{ fill: "url(#more-blue-gradient)" }} />
          </a>
          <a
            href="https://www.loom.com/share/f4cf422c80a543d388acce141c295e4a"
            rel="noreferrer"
            target="_blank"
          >
            <FaYoutube
              size={30}
              style={{ fill: "url(#more-purple-gradient)" }}
            />
          </a>
          <a
            href="https://tumekenz.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            <FaTable size={30} style={{ fill: "url(#purple-gradient)" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
