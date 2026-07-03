// React
import React from "react";

// Importing Newarrival Pages
import Newarrival from "./Newarrival"

// Contact Component
const Contact = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row background-2">
          <div className="col d-flex flex-column align-items-center p-4">
            <h1 className="mb-5 heading-4">Contact Us</h1>
            <form className="d-flex flex-column gap-4 justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="contact-field"
              />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="contact-field"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="contact-field"
              />
              <input
                type="text"
                placeholder="Enter Your Message"
                className="contact-field"
              />
              <input type="submit" value="Submit" className="submit-button" />
            </form>
          </div>
        </div>
        <Newarrival />
      </div>
    </>
  )
}

export default Contact
