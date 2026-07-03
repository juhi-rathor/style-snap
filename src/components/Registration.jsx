// React and Hooks
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FormField from "./FormField";

const Registration = () => {

  // State Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form Submission Handler
  const handleRegister = (e) => {

    // Prevents default form submission behavior
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword || !contact) {
      toast.error("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password should be same");
      return;
    }

    // Sets the fields to empty after submission
    setName("");
    setEmail("");
    setContact("");
    setPassword("");
    setConfirmPassword("");

    toast.success("Registered Successfully");
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center background-4 page-full-screen">
        <div className="col-12 col-md-8 col-lg-6 form-container-1">
          <div className="form-container p-5 shadow-sm my-4"> 
            <h1 className="text-center">Create an Account</h1>
            <p className="text-center mb-4">Join Style Snap Today!</p>

            <form onSubmit={handleRegister} className="w-100 d-flex flex-column align-items-center">
              <FormField
                id="name"
                label="Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />

              <FormField
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />

              <FormField
                id="contact"
                label="Contact Number"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter phone number"
                required
              />

              <FormField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
              />

              <FormField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />

              <div className="w-25 mt-3">
                <input
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-bold form-action-button"
                  value="Register"
                />
              </div>
            </form>

            <div className="text-center mt-4">
              <p className="mb-0">Already have an Account?</p>
              <Link
                to="/login"
                className="signupbtn text-decoration-none fw-bold form-link"
              >
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

