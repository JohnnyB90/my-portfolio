import React from "react";
import linkedInImage from "../../Assets/images/linkedin.png";
import gitHubImage from "../../Assets/images/github.png";

export default function Footer() {
  return (
    <footer className="footer bg-secondary sticky-bottom">
      <div className="border-top text-white pt-3">
        <h1 className="d-flex justify-content-center fs-2 text-dark">
          Contact me today!
        </h1>
      </div>
      <div className="container d-flex justify-content-center">
        <a
          href="https://www.linkedin.com/in/johnny-bonee"
        ><img className="p-3" src={linkedInImage} alt="LinkedIn" />
        </a>
        <a href="https://github.com/JohnnyB90">
        <img className="p-3" src={gitHubImage} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}
