import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

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
          console.log("Email sent successfully");
        } else {
          // Error sending email
          console.error("Error sending email");
        }
      })
      .catch((error) => {
        console.error("Error sending email", error);
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
            <div className="card-body p-5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
