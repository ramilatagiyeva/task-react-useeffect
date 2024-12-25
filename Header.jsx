import React from 'react';
import './Header.css'; 
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <a href="#">TALE</a>
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">projects</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">infos</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
