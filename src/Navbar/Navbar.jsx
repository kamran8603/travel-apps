import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            Journey Through Ages
          </NavLink>
        </div>


        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

       
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/travelguide" onClick={closeMenu}>
              Travel Guide
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" onClick={closeMenu}>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/experinces" onClick={closeMenu}>
              Experiences
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutindia" onClick={closeMenu}>
              About India
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
