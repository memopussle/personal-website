import React from "react";
import "./LandingPage.scss";
import {
  AiOutlineDownload,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMediumCircle,
} from "react-icons/ai";

import { IoLogoWhatsapp } from "react-icons/io";
import GradientSvg from "./GradientSvg";

const LandingPage = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="landing__text flex">
          <h1>
            <span className="landing__before-name primary-text">I'm</span>{" "}
            <span className="landing__name">Thu Giang </span>
          </h1>
          <p className=" small-margin">
            <span className="primary-text">Lorem ipsum dolor sit amet</span>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div>
            <button className="normal-button small-margin landing__button">
              SEE MY WORK
            </button>
            <a href="../img/thu.pdf" download className="landing__download">
              <AiOutlineDownload size={35} />
            </a>
          </div>
        </div>

        <GradientSvg />
        <div className="social-media">
          <div className="social-media__stick-wrapper">
            <div className="social-media__stick"></div>
          </div>
          <div className="social-media__icons">
            <a href="https://nz.linkedin.com/">
              <AiFillLinkedin
                size={35}
                style={{ fill: "url(#blue-gradient)" }}
              />
            </a>
            <a href="https://nz.linkedin.com/">
              <AiFillMediumCircle
                size={35}
                style={{ fill: "url(#more-blue-gradient)" }}
              />
            </a>
            <a href="https://nz.linkedin.com/">
              <AiFillTwitterCircle
                size={35}
                style={{ fill: "url(#purple-gradient)" }}
              />
            </a>
            <a href="https://nz.linkedin.com/">
              <IoLogoWhatsapp
                size={35}
                style={{ fill: "url(#more-purple-gradient)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
