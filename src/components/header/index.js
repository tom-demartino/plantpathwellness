import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";
import logo from "../../../src/images/plant_path_text_only1_copy_600x273.jpg";

function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect="true"
        sticky="top"
        expand="sm"
        bg="white"
        variant="light"
        className="navbar"
      >
        <Container className="container">
          <Navbar.Brand className="brand">
            <Nav.Link href="/" style={{ padding: "0" }}>
              <img src={logo} alt="Plant Path Wellness logo" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="menu">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/info">Work Together</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
