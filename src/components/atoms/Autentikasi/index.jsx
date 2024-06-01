import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Avatar from "react-avatar";

const Autentikasi = ({ closeMenu, className = "" }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const checkToken = () => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = atob(token);
      const [decodedUsername] = decodedToken.split(":");
      setUsername(decodedUsername);
      setIsLoggedIn(true);
    } else {
      setUsername("");
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkToken();
    // Listen for changes to the token cookie
    const cookieChangeInterval = setInterval(checkToken, 1000);
    return () => clearInterval(cookieChangeInterval);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
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
