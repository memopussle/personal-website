import React from "react";
import "./About.scss";


const About = () => {
  
  return (
    <section className="section-margin" >
      <div className="container about" >
        <div className="about__wrapper ">
          <h3 className="about__title primary-text">
            About <span className="about__title--2">Me</span>
          </h3>

          <p className="small-margin">
            Currently working part-time at the Commonwealth Bank of Australia,
            and studying towards a diploma in Web Development & Design at
            Developers Institute; I have ten months of experience creating
            client-side interfaces and am now learning server-side. I am a
            curious and open-minded person; I love learning new things in my
            free time and expanding my existing skillsets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
