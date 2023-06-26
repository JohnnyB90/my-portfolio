import React, { useState } from "react";
import profileImage from "../../Assets/images/profile-img3.jpg";
import "./style.css";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        if (response.ok) {
          // Email sent successfully
          setSuccessMessage("Email sent successfully");
          setErrorMessage("");
        } else {
          // Error sending email
          setErrorMessage("Error sending email");
          setSuccessMessage("");
        }
      })
      .catch((error) => {
        console.error("Error sending email", error);
        setErrorMessage("Error sending email");
        setSuccessMessage("");
      });

    setFormState({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="container d-flex justify-content-center">
      <div className="row">
        <div>
          <div className="card bg-secondary">
            <div className="card-body p-5 contact-form">
              <h1 className="card-title text-dark text-center">Contact Me</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email address here"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-dark">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Describe your project"
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
              {successMessage && (
                <div className="text-success mt-3 text-dark text-bold text-center">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="text-danger mt-3 text-dark text-bold text-center">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img
          src={profileImage}
          alt="profileimage"
          className="aboutImage img-fluid m-3"
        />
      </div>
    </section>
  );
}
