import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FormField from "./FormField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    console.log("Logging in with:", email, password);
    setEmail("");
    setPassword("");
    toast.success("Successfully Logged In");
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center background-4 page-full-screen">
        <div className="col-12 col-md-8 col-lg-6 form-container-1">
          <div className="form-container p-5 shadow-sm">
            <h1 className="text-center">Login to your Account</h1>
            <p className="text-center mb-4">Welcome Back!</p>

            <form onSubmit={handleSubmit} className="w-100 d-flex flex-column align-items-center">
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
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />

              <div className="w-25 mt-3">
                <input
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-bold form-action-button"
                  value="Login"
                />
              </div>
            </form>

            <div className="text-center mt-4">
              <p className="mb-0">Don't have an Account?</p>
              <Link
                to="/register"
                className="signupbtn text-decoration-none fw-bold w-25 form-link"
              >
                Signup Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;