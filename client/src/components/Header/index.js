import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
import "../../Assets/global-stylesheet/style.css";

export default function Header({ navLinks = [], currentLink, setCurrentLink }) {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = (navLink) => {
    setCurrentLink(navLink);
    setExpanded(false); // Auto-collapse the navbar after selecting a navlink
  };

  // Get the about page link
  const aboutLink = navLinks.find(link => link.name.toLowerCase() === 'about');

  const handleBrandClick = () => {
    if (aboutLink) {
      handleNavLinkClick(aboutLink);
      window.location.href = aboutLink.url;
    }
  };

  return (
    <Navbar
      id="navbarContainer"
      className="text-white navbar-expand-lg nav-tabs sticky-top .navbar-light .navbar-toggler-icon .navbar-toggler"
      expand="lg"
      expanded={expanded} // control Navbar expansion here
    >
      <Container>
        <Navbar.Brand
          className="text-white text-decoration-underline"
          onClick={handleBrandClick}
          style={{ cursor: "pointer" }}
        >
          Johnny R Bonee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={toggleNavbar} />
        <Navbar.Collapse
          id="navbarNav"
          className="justify-content-end"
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
