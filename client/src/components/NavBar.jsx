import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="w-full fixed top-6 left-0 z-30 flex justify-center pointer-events-none">
      <nav className="navbar-glass w-[min(1100px,96%)] pointer-events-auto px-4 py-3 flex items-center justify-between">
        <div className="nav-brand">
          <Link to="/" className="btn btn-ghost normal-case text-xl p-0">
            <span className="logo-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Magus
            </span>
          </Link>
        </div>

        <div className="nav-actions flex items-center gap-3">
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            <li>
              {/* <a href="#projects">Projects</a> */}
              <Link to="/#projects">Projects</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>

          <div className="hidden sm:flex items-center gap-2">
            {/* <a className="btn btn-ghost">Log in</a> */}
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
