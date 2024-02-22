import React, { Component } from "react";
import logo from "../../assets/logo5_80.jpg";
import "./navBar.css";
import { Link, animateScroll as scroll } from "react-scroll";

import Login from "../Sections/login";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to={Login}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Login / Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
