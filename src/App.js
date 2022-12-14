import React from "react";
import "./App.scss";
import Layout from "./Layout";
import {  Routes, Route } from "react-router-dom";

import {
  Skills,
  Projects,
  Experience,
  Contact,
  About,
  LandingPage,
 
} from "./components/index";

function App() {

  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />

          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
