import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>
          JT<span id="cc">cc</span>
        </h1>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
      <button className="quote-button">Get a Quote</button>
    </header>
  );
}

export default Header;
