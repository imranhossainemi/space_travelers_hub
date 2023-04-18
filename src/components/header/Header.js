import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './planet.png';

const Header = () => (
  <>
    <header className="header">
      <Link className="main-logo" to="/">
        <img className="logo" src={logo} alt="Space Logo" />
        <h3 className="logo-title">Space Travelers&rsquo; Hub</h3>
      </Link>
      <ul className="nav-links">
        <li className="nav-link"><Link to="/">ROCKETS</Link></li>
        <li className="nav-link"><Link to="/missions">MISSIONS</Link></li>
        <li className="nav-link"><Link to="/profile">MY PROFILE</Link></li>
      </ul>
    </header>
    <div className="divider">
      <hr />
    </div>
  </>
);

export default Header;
