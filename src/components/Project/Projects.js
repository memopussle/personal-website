import React from "react";
import "./Project.scss";
import Videos from "./Videos/Videos";

const Projects = () => {
  return (
    <div id="projects" className="container section-margin ">
      <h3 className="project__title primary-text ">
        Selected Projects
      </h3>
      <div>
        <Videos />

    
      </div>
    </div>
  );
};

export default Projects;
