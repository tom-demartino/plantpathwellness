import React from "react";
import {
  Head,
  LogoBox,
  Logo,
  Name,
  Nav,
  NavLink,
  NavMenu,
} from "./NavbarElements";
import logo from "../../../src/images/plant_path_text_only1_copy_600x273.jpg";

const Navbar = () => {
  return (
    <>
      <Head>
        <LogoBox>
          <Logo src={logo} alt="Plant Path Wellness logo" />
        </LogoBox>
        <Name>
          <span style={{ color: "orange" }}>Patty DeMartino, </span>
          <span style={{ color: "green" }}>NBC-HWC</span>
        </Name>
      </Head>
      <Nav>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/info">Work Together</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
