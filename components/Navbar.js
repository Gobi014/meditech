import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">MediTech</Link>
        <ul className="navbar-menu">
          <li className="navbar-item" style={{ '--i': 1 }}>
            <Link to="/inventory" className="navbar-link">
              Inventory
            </Link>
          </li>
          
          <li className="navbar-item" style={{ '--i': 3 }}>
            <Link to="/order" className="navbar-link">
              Order Details
            </Link>
          </li>
         
          <li className="navbar-item" style={{ '--i': 5 }}>
            <Link to="/" className="navbar-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
