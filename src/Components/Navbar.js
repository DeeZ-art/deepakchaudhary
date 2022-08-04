import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <h3>DeeZArts</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                  delay={100}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                  delay={100}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                  delay={100}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"></div>
        </div>
      </div>
    </>
  );
}
