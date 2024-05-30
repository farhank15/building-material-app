import React from "react";
import { NavLink } from "react-router-dom";

const Autentikasi = ({ closeMenu, className = "" }) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <NavLink
        to="/signup"
        className={`md:pt-2  btn btn-secondary btn-sm ${className}`}
        onClick={closeMenu}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/signin"
        className={`md:pt-2 btn btn-primary btn-sm  ${className}`}
        onClick={closeMenu}
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default Autentikasi;
