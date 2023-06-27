import React from "react";
import tea from "./assets/favicon.png";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4  fixed-top sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="/">
          Ro Cafe
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
              <NavLink className="nav-link" to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>
              <NavLink className="nav-link" to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
              <NavLink className="nav-link" to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
