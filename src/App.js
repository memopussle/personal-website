import React from "react";
import "./App.scss";
import Layout from "./Layout";
import {  Routes, Route } from "react-router-dom";
import Popup from "./components/Project/Popup/Popup";

function App() {

  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/project1" element={<Popup />} />
          <Route path="/project2" element={<Popup />} />
          <Route path="/project3" element={<Popup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
