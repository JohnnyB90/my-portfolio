import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";

export default function Header({ navLinks = [], currentLink, setCurrentLink }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar
      id="navbarContainer"
      className="text-white navbar-expand-lg navbar-secondary bg-secondary nav-tabs sticky-top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="text-dark text-decoration-underline">
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
                  className={`nav-link bg-secondary fs-5 text-dark custom-nav-link ${
                    currentLink === navLink ? "active" : ""
                  }`}
                  href={navLink.url}
                  onClick={() => {
                    setCurrentLink(navLink);
                    setCollapsed(true);
                  }}
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
