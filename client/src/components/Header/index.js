import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
import "../../Assets/global-stylesheet/style.css";

export default function Header({ navLinks = [], currentLink, setCurrentLink }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavLinkClick = (navLink) => {
    setCurrentLink(navLink);
    if (!collapsed) {
      toggleNavbar(); // Collapse the navbar on smaller screens
    }
  };

  return (
    <Navbar
      id="navbarContainer"
      className="text-white navbar-expand-lg nav-tabs sticky-top .navbar-light .navbar-toggler-icon .navbar-toggler"
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="text-white text-decoration-underline">
          Johnny R Bonee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={toggleNavbar} />
        <Navbar.Collapse
          id="navbarNav"
          className={`justify-content-end ${collapsed ? "collapse" : ""}`}
        >
          <Nav>
            {navLinks.map((navLink) => (
              <Nav.Item key={navLink.name} className="header-card">
                <Nav.Link
                  id="header-color"
                  className={`nav-link fs-5 text-white custom-nav-link ${
                    currentLink === navLink ? "active" : ""
                  }`}
                  href={navLink.url}
                  onClick={() => handleNavLinkClick(navLink)}
                >
                  {navLink.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
