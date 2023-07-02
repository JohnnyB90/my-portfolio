import React, { useState, useEffect } from "react";
import linkedInImage from "../../Assets/images/linkedin.png";
import gitHubImage from "../../Assets/images/github.png";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 1284);
  const [collapseVisible, setCollapseVisible] = useState(window.innerWidth <= 1284);

  const toggleCollapse = () => {
    if (collapseVisible) {
      setCollapsed(!collapsed);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1284) {
        setCollapseVisible(true);
      } else {
        setCollapseVisible(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className={`footer bg-secondary ${collapsed ? "collapsed" : ""}`}>
      <div className="footer-content">
        {(!collapseVisible || !collapsed) && (
          <>
            <div className="border-top text-white pt-3">
              <h1 className="d-flex justify-content-center fs-2 text-dark">
                Contact me today!
              </h1>
            </div>
            <div className="container d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/johnny-bonee">
                <img className="p-3 footer-hover" src={linkedInImage} alt="LinkedIn" />
              </a>
              <a href="https://github.com/JohnnyB90">
                <img className="p-3 footer-hover" src={gitHubImage} alt="GitHub" />
              </a>
            </div>
          </>
        )}
        <div className="footer-bar" onClick={toggleCollapse}>
          {collapsed ? (
            <>
              <FiChevronUp />
              <span className="expand-text">Expand</span>
            </>
          ) : (
            <>
              <FiChevronDown />
              <span className="expand-text">Collapse</span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
