import React, { useState } from "react";
import "./Skills.scss";

import Skillset from "./Skillset";

const Skills = () => {
  const [currentTab, setCurrentTab] = useState("1");

  return (
    <section className="section-margin">
      <div className="container skill">
        <h3 className="primary-text skill__title secondary-font">
          My <span className="color-orange">Skills</span>
        </h3>

        <Skillset currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
    </section>
  );
};

export default Skills;
