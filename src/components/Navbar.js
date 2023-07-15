import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LOGO from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bridge">Bridge Tokens</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          {/* Add more nav links for other pages */}
        </ul>
      </div>
      <Link to="https://hex.com/" target="_blank" rel="noreferrer noopener"><button className="btn-nav gem">#1 CRYPTO <span className="crown">👑</span></button></Link>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <label id="hamburger-menu">
        
      </label>
      </div>
    </nav>
  );
}

export default Navbar;
