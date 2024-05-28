import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar font-poppins bg-base-100">
      <div className="flex-1">
        <Link to="/" className="font-extrabold cursor-pointer text-4xl">
          RML
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleMenu}
          >
            <FaBars className="w-6 h-6" />
          </div>
          {menuOpen && (
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/katalog" onClick={() => setMenuOpen(false)}>
                  Katalog
                </Link>
              </li>
              <li>
                <Link to="/wilayah" onClick={() => setMenuOpen(false)}>
                  Wilayah
                </Link>
              </li>
              <li>
                <Link to="/bantuan" onClick={() => setMenuOpen(false)}>
                  Bantuan
                </Link>
              </li>
              <li>
                <Link to="/kalkulasi" onClick={() => setMenuOpen(false)}>
                  Kalkulasi
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
