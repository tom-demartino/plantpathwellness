import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
// import {
//   Head,
//   LogoBox,
//   Logo,
//   Name,
//   Nav,
//   NavLink,
//   NavMenu,
// } from "./NavbarElements";
import logo from "../../../src/images/plant_path_text_only1_copy_600x273.jpg";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Plant Path Wellness logo" />
      </div>
      <div>
        <span style={{ color: "orange" }}>Patty DeMartino, </span>
        <span style={{ color: "green" }}>NBC-HWC</span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/info">Work Together</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
