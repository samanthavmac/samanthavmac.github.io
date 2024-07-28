import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = ({ toggleDarkMode, toggleDarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><a href="#header">About</a></li>
        <li><a href="#software-projects">Software</a></li>
        <li><a href="#design-projects">Design</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li>
          <button className="theme-toggle" onClick={toggleDarkTheme}>
            <img
              src={toggleDarkMode ? "/images/icons/moon-icon.png" : "/images/icons/sun-icon.png"}
              alt={toggleDarkMode ? "Moon Icon" : "Sun Icon"}
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;