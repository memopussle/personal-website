import React from 'react';
import "./LandingPage.scss";
import {
  AiOutlineDownload,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMediumCircle,
} from "react-icons/ai";

const LandingPage = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="landing__text flex">
          <h1>
            <span className="landing__before-name">I'm</span>{" "}
            <span className="landing__name">Thu Giang </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet
            <span className="landing__describe">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </span>
          </p>
          <div>
            <button className="normal-button small-margin landing__button">
              SEE MY WORK
            </button>
            <a href="../img/thu.pdf" download>
              <AiOutlineDownload size={35} />
            </a>
          </div>
        </div>

        <div className="social-media">
          <div className="social-media--stick-wrapper">
            <div className="social-media--stick"></div>
          </div>
          <div>
            <AiFillLinkedin size={35} />
            <AiFillMediumCircle size={35} />
            <AiFillTwitterCircle size={35} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage