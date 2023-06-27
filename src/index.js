import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./Services";
import Contact from "./Contact";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
