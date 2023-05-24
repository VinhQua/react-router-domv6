import React from "react";
import { Link, NavLink } from "react-router-dom";

const StyledNavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/about"
      >
        about
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/products"
      >
        products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/login"
      >
        login
      </NavLink>
    </nav>
  );
};

export default StyledNavBar;
