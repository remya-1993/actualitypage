import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar expand="lg" className="navbar_bg fixed-top custom-navbar py-2">
      <Container>
        <div className="position-relative">
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center justify-content-start mx-auto fw-bold fs-4 primary-color"
          >
            <img
              src="./actuality logo.png"
              alt="Logo"
              className="d-inline-block align-top logo-size me-2"
            />
            Actuality
          </Navbar.Brand>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-light gap-3 font-14">
            <Link to="/" className="nav-link text-dark fw-medium">
              Home
            </Link>
            <Link to="/about" className="nav-link text-dark fw-medium">
              About Us
            </Link>
            <Link to="/team" className="nav-link text-dark fw-medium">
              Our Team
            </Link>
            <Link to="/services" className="nav-link text-dark fw-medium">
              Services
            </Link>

            <Link
              onClick={scrollToContact}
              className="nav-link text-dark fw-medium"
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
