// src/components/Navbar.js
import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FaSearch,FaUser,FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";  

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert("Searching for: " + searchQuery);
    // You can replace the alert with actual search logic or redirect
  };

  return (
    <nav className="navbar">
      <div className="logo">MIZAN MOBILE</div>
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          <FaSearch/>
        </button>
      </form>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#services">Services</a></li>
      </ul>

      {/* Right Icons */}
      <div className="right-icons">
        <FaUser/> 
        < FaShoppingCart/> 
        <div className="auth-links">
          <a href="#login">Login</a> | <a href="#signup">Signup</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
