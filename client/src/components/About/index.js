import React from "react";
import profileImage from "../../Assets/images/profile-img3.jpg";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <section className="row text-center m-3 p-5 text-white fs-5">
      <div className="col-md-6">
        <h2 className="title">Welcome to My Page</h2>
        <div className="description">
          <p>Thank you for visiting my page. My name is Johnny, and I am an aspiring web developer with a passion for creating innovative and user-friendly digital experiences.</p>
          <p>While originally from Tennessee, I've had the opportunity to explore various industries, including serving in the Marine Corps and working in roles as diverse as working in a maximum security prison, climbing cell towers, and construction and restoration. These experiences have shaped my perspective and fostered adaptability, resilience, and problem-solving skills.</p>
          <p>Over the past years, I have dedicated myself to the construction field. However, my true passion lies in web development and coding. I find great joy in transforming ideas into reality through the power of technology. The creative process, combined with the ability to continuously learn and explore new technologies, fuels my motivation.</p>
          <p>Outside of my professional pursuits, I prioritize my family. I am blessed with a loving wife and three wonderful children who bring immense joy and support to my life.</p>
          <p>Thank you once again for visiting my page. I look forward to connecting and contributing to the exciting world of web development.</p>
        </div>
      </div>
      <div className="col-md-6">
        <img
          src={profileImage}
          alt="profileimage"
          className="aboutImage img-fluid m-3"
        />
      </div>
    </section>
  );
}
