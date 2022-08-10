import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import cv from "../../img/thu-cv.pdf";
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="container experience ">
      <div className="flex">
        <h3 className="experience__title">Experience</h3>
        <a href={cv} download className="landing__download">
          <AiOutlineDownload size={35} />
        </a>
      </div>
      <div className="experience__wrapper">
        <BsDot
          size={80}
          className="experience__icon--1"
          style={{ fill: "url(#more-blue-gradient)" }}
        />

        <div className="experience__text--1">
          <h5 className="secondary-font font-weight-normal">
            <span className="primary-text">Full-time</span>{" "}
            <span className="color-orange">Student</span>
          </h5>

          <p className="font-weight-bold">
            Diploma in Web Development and Design | Developer Institute
          </p>
          <p>
            With a concise Full-stack Developer course path, I started off by
            learning client-side: HTML, CSS, JavaScript and React. Right now I'm
            in the middle of the second term of the course, where I will be
            learning about Nodejs, Express, MongoDB, REST APIs and Jest testing.
            Next term, will be about Agile Developments and DevOps, where my
            learning objective is to continually design, develop, test and
            deploy a modern enterprise-class web application.
          </p>
        </div>

        <div className="experience__text--2">
          <BsDot
            size={80}
            className="experience__icon--2"
            style={{ fill: "url(#more-purple-gradient)" }}
          />
          <h5 className="secondary-font font-weight-normal small-margin">
            <span className="primary-text">Financial Crime</span>{" "}
            <span className="color-orange">Analyst</span>
          </h5>

          <p className="font-weight-bold">Commonwealth Bank</p>
          <p>
            This is a demanding role where a high degree of accuracy is
            required, especially when handling private or sensitive information.
            Made duties included placing and receiving phone calls, updating CRM
            systems, dispatching external customer communications and completing
            financial crime work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
