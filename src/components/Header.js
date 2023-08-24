// Header.js
import React from 'react';
// import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">Your Logo</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="cta-button">Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;
