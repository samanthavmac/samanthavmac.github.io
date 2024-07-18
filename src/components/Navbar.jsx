// Navbar

import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="vertical-nav">
      <ul>
        <li><a href="#header">About</a></li>
        <li><a href="#projects">Software Work</a></li>
        <li><a href="#design">Design Work</a></li>
        <li><a href="#experiences">Experiences</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
