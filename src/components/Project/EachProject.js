import React from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import LoadingOverlay from "./Videos/LoadingOverlay";
import { FaGithub, FaYoutube, FaTable } from "react-icons/fa";
import "./Project.scss";

const EachProject = ({toggle, video,PausedOverlay, project, loom,liveSite, description}) => {

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
        {description}
      </p>

      <div className="project__icons">
        <Link to="/project1">
          <button className="normal-button" onClick={toggle}>
            SEE MORE
          </button>
        </Link>
        <div className="project__button">
          <a
            href={project}
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={30} style={{ fill: "url(#more-blue-gradient)" }} />
          </a>
          <a
            href={loom}
            rel="noreferrer"
            target="_blank"
          >
            <FaYoutube
              size={30}
              style={{ fill: "url(#more-purple-gradient)" }}
            />
          </a>
          <a
            href={liveSite}
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
