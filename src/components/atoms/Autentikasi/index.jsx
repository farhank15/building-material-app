import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Avatar from "react-avatar";

const Autentikasi = ({ closeMenu, className = "" }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const usernameCookie = Cookies.get("username");
    if (usernameCookie) {
      setUsername(usernameCookie);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("username");
    setIsLoggedIn(false);
    closeMenu();
    navigate("/signin"); // Redirect to sign in page
  };

  return (
    <div className={`flex flex-col gap-2 md:flex-row ${className}`}>
      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <Avatar name={username} size="40" round={true} />
          <button className="btn btn-secondary btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <NavLink
            to="/signup"
            className="btn btn-secondary btn-sm"
            onClick={closeMenu}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/signin"
            className="md:ml-2 btn btn-primary btn-sm"
            onClick={closeMenu}
          >
            Sign In
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Autentikasi;
