import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-danger"
              }
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-danger"
              }
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-danger"
              }
              style={{ textDecoration: "none", color: "black" }}
            >
              Blog
            </NavLink>
            
            <button type="button" onClick={()=>navigate("/")} >click me and nav to home</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
