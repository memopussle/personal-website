import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import LoadingOverlay from "./Videos/LoadingOverlay";
import { FaGithub, FaYoutube, FaTable } from "react-icons/fa";
import "./Project.scss";

const EachProject = ({
  to,
  video,
  project,
  technology,
  loom,
  liveSite,
  description,
}) => {
  return (
    <div className="project">
      <div className="project__thumbnail">
        <HoverVideoPlayer
          videoSrc={video}
          loadingOverlay={<LoadingOverlay />}
          className="project__video"
        />
      </div>
      <div className="project__description">
        <div className="description-box">
          <p>{description}</p>
          <p>{technology}</p>
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
  );
};

export default EachProject;
