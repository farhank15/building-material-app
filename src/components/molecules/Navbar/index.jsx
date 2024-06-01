import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Autentikasi from "@components/atoms/Autentikasi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-20 w-full bg-white shadow-lg font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-4xl font-bold">RML</h1>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8 lg:ml-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost btn-sm rounded-btn bg-blue-500 text-white font-bold"
                  : "btn btn-ghost btn-sm rounded-btn"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/katalog"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost btn-sm rounded-btn bg-blue-500 text-white font-bold"
                  : "btn btn-ghost btn-sm rounded-btn"
              }
              onClick={closeMenu}
            >
              Katalog
            </NavLink>
            <NavLink
              to="/wilayah"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost btn-sm rounded-btn bg-blue-500 text-white font-bold"
                  : "btn btn-ghost btn-sm rounded-btn"
              }
              onClick={closeMenu}
            >
              Wilayah
            </NavLink>
            <NavLink
              to="/bantuan"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost btn-sm rounded-btn bg-blue-500 text-white font-bold"
                  : "btn btn-ghost btn-sm rounded-btn"
              }
              onClick={closeMenu}
            >
              Bantuan
            </NavLink>
            <NavLink
              to="/kalkulasi"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost btn-sm rounded-btn bg-blue-500 text-white font-bold"
                  : "btn btn-ghost btn-sm rounded-btn"
              }
              onClick={closeMenu}
            >
              Kalkulasi
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm"
              />
            </div>
            <Autentikasi className="hidden lg:block" closeMenu={closeMenu} />
            <div className="flex items-center lg:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <FiX className="text-2xl" />
                ) : (
                  <FiMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white shadow-lg lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/katalog"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
              }
              onClick={closeMenu}
            >
              Katalog
            </NavLink>
            <NavLink
              to="/wilayah"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
              }
              onClick={closeMenu}
            >
              Wilayah
            </NavLink>
            <NavLink
              to="/bantuan"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
              }
              onClick={closeMenu}
            >
              Bantuan
            </NavLink>
            <NavLink
              to="/kalkulasi"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
              }
              onClick={closeMenu}
            >
              Kalkulasi
            </NavLink>
            <div className="px-2 mt-3 space-y-1">
              <input
                type="text"
                placeholder="Search..."
                className="w-full input input-bordered input-sm"
              />
              <Autentikasi closeMenu={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
