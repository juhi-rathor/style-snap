// React 
import React, { useContext } from "react";

// Importing AuthContext
import { AuthContext } from '../context/AuthContext'

// CSS
import "./../App.css";

// Routing
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg navigation-bar">
        <div className="container">
          <Link to="/" className="text-decoration-none"><h2 className="logo-heading">STYLE SNAP</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex gap-4">
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "anchor-tag active" : "anchor-tag"
                } to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "anchor-tag active" : "anchor-tag"
                } to="/about">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "anchor-tag active" : "anchor-tag"
                } to="/blog">BLOG</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "anchor-tag active" : "anchor-tag"
                } to="/product">PRODUCTS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "anchor-tag active" : "anchor-tag"
                } to="/contact">CONTACT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? "anchor-tag active" : "anchor-tag"
                } to="/login">LOGIN</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar