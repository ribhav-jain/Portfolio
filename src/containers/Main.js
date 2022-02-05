import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/ContactComponent";
import Error404 from "../pages/errors/error404/Error";

export default function Main(props) {
  const theme = props.theme;
  return (
    <div>
      <Router basename="/portfolio">
        <Routes>
          <Route exact path="/" element={<Home theme={theme} />} />
          <Route path="/home" element={<Home theme={theme} />} />
          <Route path="/experience" element={<Experience theme={theme} />} />
          <Route path="/education" element={<Education theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="*" element={<Error404 theme={theme} />} />
        </Routes>
      </Router>
    </div>
  );
}
