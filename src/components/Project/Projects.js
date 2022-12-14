import video1 from "../../img/travelwebsite.mp4";
import video2 from "../../img/overthesea.mp4";
import video3 from "../../img/crypto-website.mp4";
import video4 from "../../img/tradify.mp4";
import "./Project.scss";
import React from "react";
import { gsap } from "gsap";
import EachProject from "./EachProject";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {


  return (
    <div id="projects">
      <div className="container section-margin">
        <h3 className="project__title primary-text ">Selected Projects</h3>
        <div className="video">
          <EachProject
            video={video1}
            project="https://github.com/memopussle/client_tumeke_nz"
            loom="https://www.loom.com/share/f4cf422c80a543d388acce141c295e4a"
            liveSite="https://tumeke-nz.onrender.com"
            description="Tui Meke NZ: A travel website that offers special tours in Aotearoa and
        allows users to search for attractions, hotels and restaurants anywhere
        in the world."
            to="/project1"
            technology="Built with: React, JavaScript, MongoDB, Express, NodeJS, API"
          />

          <EachProject
            video={video2}
            project="https://github.com/memopussle/Clothing-shop-react"
            loom="https://www.loom.com/share/74168b78f1eb4c699113bf4ab084e1d8"
            liveSite="https://overthesea-shop-qgqll239p-memopussle.vercel.app/"
            description="OverTheSea is an E-commerce clothing store specialising in selling sustainable women's clothes. It is a fully functioning application that displays products and allows users to purchase online."
            to="/project2"
            technology="Built with: React, NextJS, Sanity, API"
          />

          <EachProject
            video={video3}
            project="https://github.com/memopussle/cryptoX-React"
            loom="https://www.loom.com/share/15c69c1434a043aab1bfda92cfaad24b"
            liveSite="https://sweet-druid-592559.netlify.app/"
            description="KryptoX is a website for crypto enthusiasts - it displays all of the latest information about crypto, trending NFTs and daily News from the world of crypto. With KryptoX, you won't miss out on market trends, price changes and general updates."
            to="/project3"
            technology="Built with: React, Redux-toolkit, API"
          />

          <EachProject
            video={video4}
            project="https://github.com/memopussle/job_tracker"
            loom="https://www.loom.com/share/15c69c1434a043aab1bfda92cfaad24b"
            liveSite="https://job-tracker.onrender.com"
            description="Tradify is a job portal where tradies can keep track of their jobs.A Tradie can filter, sort, add a new job, edit a job, and leave any numbers of comments for each job. "
            to="/project4"
            technology="Built with: React, JavaScript, MongoDB, Express, NodeJS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
