import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import GradientSvg from "../LandingPage/GradientSvg";
import { IoIosArrowDown } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import {
  SiMongodb,
  SiDocker,
  SiMaterialui,
  SiAntdesign,
  SiSass,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";


const Skillset = ({ currentTab, setCurrentTab }) => {
  const tabs = [
    {
      id: 1,
      button: "PAST STUDY",
      icons: [
        <AiFillHtml5
          size={150}
          style={{ fill: "url(#more-purple-gradient)" }}
        />,
        <IoLogoCss3 size={150} style={{ fill: "url(#purple-gradient)" }} />,
        <IoLogoJavascript
          size={150}
          style={{ fill: "url(#more-blue-gradient)" }}
        />,
        <GrReactjs size={150} style={{ fill: "url(#all-purple-gradient)" }} />,
      ],
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias",
    },
    {
      id: 2,
      button: "CURRENT STUDY",
      icons: [
        <SiMongodb size={150} style={{ fill: "url(#purple-gradient)" }} />,
        <SiDocker size={150} style={{ fill: "url(#all-purple-gradient)" }} />,
        <FaNode size={150} style={{ fill: "url(#more-blue-gradient)" }} />,
        <TbBrandNextjs
          size={150}
          style={{ fill: "url(#more-purple-gradient)" }}
        />,
        <TbApi size={150} style={{ fill: "url(#blue-gradient)" }} />,
      ],
      content:
        " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
    },
    {
      id: 4,
      button: "ADDS-ON",
      icons: [
        <AiFillGithub
          size={150}
          style={{ fill: "url(#more-purple-gradient)" }}
        />,
        <BsFillBootstrapFill
          size={150}
          style={{ fill: "url(#purple-gradient)" }}
        />,
        <SiMaterialui
          size={150}
          style={{ fill: "url(#more-blue-gradient)" }}
        />,
        <SiAntdesign size={150} style={{ fill: "url(#purple-gradient)" }} />,
        <SiSass size={150} style={{ fill: "url(#more-blue-gradient)" }} />,
      ],
      content: "Contenido de tab 4.",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div>
      <GradientSvg />
      <div className="skill__content">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className="border-button skill__button"
          >
            {tab.button} <IoIosArrowDown />
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div className="skill__content">
                <p>{tab.content}</p>
                <div className="skill__icons">{tab.icons}</div>
              </div>
            )}
          </div>
        ))}
        <div className="skill__stick-wrapper">
          <div className="skill__stick--1"></div>
          <div className="skill__stick--2"></div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
