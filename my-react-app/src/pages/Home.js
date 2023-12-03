import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Navbar() {
  return (
    <nav>
      <div className="nav-links" id="navLinks">
        <i className="fa fa-times" onClick={() => hideMenu()}></i>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/other">OTHER</Link></li>
        </ul>
      </div>
      <i className="fa fa-bars" onClick={() => showMenu()}></i>
    </nav>
  );
}

function showMenu() {
  // Implement show menu functionality here
}

function hideMenu() {
  // Implement hide menu functionality here
}

export default Navbar;