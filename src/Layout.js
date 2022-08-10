import React from "react";
import "./App.scss";
import {
  Nav,
  Skills,
  Projects,
  Experience,
  Contact,
  About,
  LandingPage,
} from "./components/index";

function Layout() {
  return (
    <div className="background">
      <Nav />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default Layout;
