import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg bg-primary px-5"
          data-bs-theme="dark">
          <div className="container-fluid">
            <img src={Logo} className="img-fluid" width={150} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/table"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                  Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/form"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                  Form
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
