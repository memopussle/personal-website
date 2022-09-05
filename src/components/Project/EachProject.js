import React from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import LoadingOverlay from "./Videos/LoadingOverlay";
import { FaGithub, FaYoutube, FaTable } from "react-icons/fa";
import "./Project.scss";

const EachProject = ({toggle, to, video,PausedOverlay, project, loom,liveSite, description}) => {

  return (
    <div className="project">
      <div className="project__thumbnail">
        <Link to={to}>
          <HoverVideoPlayer
            videoSrc={video}
        
            loadingOverlay={<LoadingOverlay />}
            onClick={toggle}
            className="project__video"
          />
        </Link>
      </div>
      <div className="project__description">
        <div className="description-box">
          <p>{description}</p>

          <div className="project__button">
            <Link to={to}>
              <button className="normal-button" onClick={toggle}>
                SEE MORE
              </button>
            </Link>
            <div className="project__icons">
              <a href={project} rel="noreferrer" target="_blank">
                <FaGithub
                  size={30}
                  style={{ fill: "url(#more-blue-gradient)" }}
                />
              </a>
              <a href={loom} rel="noreferrer" target="_blank">
                <FaYoutube
                  size={30}
                  style={{ fill: "url(#more-purple-gradient)" }}
                />
              </a>
              <a href={liveSite} rel="noreferrer" target="_blank">
                <FaTable size={30} style={{ fill: "url(#purple-gradient)" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
