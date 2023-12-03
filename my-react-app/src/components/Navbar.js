import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';
import '../App.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button> </button>
      </div>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/projects">ABOUT</Link>
        <Link to="/experience">PROJECTS</Link>
      </div>
    </div>
  );
}

export default Navbar;