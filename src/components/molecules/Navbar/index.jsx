import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white font-poppins  shadow-lg fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-4xl font-bold">RML</h1>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8 md:ml-10">
            <a href="#" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
            <a href="#" className="btn btn-ghost btn-sm rounded-btn">
              Katalog
            </a>
            <a href="#" className="btn btn-ghost btn-sm rounded-btn">
              Wilayah
            </a>
            <a href="#" className="btn btn-ghost btn-sm rounded-btn">
              Bantuan
            </a>
            <a href="#" className="btn btn-ghost btn-sm rounded-btn">
              Kalkulasi
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm"
              />
            </div>
            <button className="hidden md:block btn btn-primary btn-sm">
              Sign In
            </button>
            <button className="hidden md:block btn btn-secondary btn-sm">
              Sign Up
            </button>
            <div className="md:hidden flex items-center">
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
            <a href="#" className="block btn btn-ghost btn-sm rounded-btn">
              Katalog
            </a>
            <a href="#" className="block btn btn-ghost btn-sm rounded-btn">
              Wilayah
            </a>
            <a href="#" className="block btn btn-ghost btn-sm rounded-btn">
              Bantuan
            </a>
            <a href="#" className="block btn btn-ghost btn-sm rounded-btn">
              Kalkulasi
            </a>
            <div className="mt-3 px-2 space-y-1">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm w-full"
              />
              <button className="btn btn-primary btn-sm w-full">Sign In</button>
              <button className="btn btn-secondary btn-sm w-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
