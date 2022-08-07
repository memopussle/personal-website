import React from "react";
import "./App.scss";
import { Nav, Projects, Experience, Contact, About, LandingPage } from "./components/index";

function App() {
  return (
    <div className="background">
      <Nav />


      <LandingPage />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
