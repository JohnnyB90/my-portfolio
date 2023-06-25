import React from "react";


export default function Header({ navLinks = [], currentLink, setCurrentLink }) {
    return (
        <nav id="navbarContainer" className="text-white navbar navbar-expand-lg navbar-secondary bg-secondary nav-tabs sticky-top">
            <div className="container d-flex justify-content-between">
                <span className="navbar-brand text-dark text-decoration-underline">Johnny R Bonee</span>
                <div className="flex-grow-1 d-flex justify-content-end">
                    <ul className="navbar-nav">
                        {navLinks.map((navLink) => (
                            <li key={navLink.name} className="nav-item">
                                <a
                                    className={`nav-link bg-secondary fs-5 text-dark ${currentLink === navLink ? 'active' : ''}`}
                                    href={navLink.url}
                                    onClick={() => {
                                        setCurrentLink(navLink);
                                    }}
                                >
                                    {navLink.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
