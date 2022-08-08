import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="section-margin" id="about">
      <div className="container">
        <div className="about__wrapper ">
          <h3 className="about__title primary-text">About <span className="about__title--2">Me</span></h3>

          <p className="small-margin">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
