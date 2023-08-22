import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../images/planet.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('rockets');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <Link className="main-logo" to="/space_travelers_hub/">
        <img className="logo" src={logo} alt="Space Logo" />
        <h3 className="logo-title">Space Travelers&rsquo; Hub</h3>
      </Link>
      <ul className="nav-links">
        <li className={`nav-link ${activeLink === 'rockets' ? 'active-nav' : ''}`}>
          <Link to="/space_travelers_hub/" onClick={() => handleClick('rockets')}>
            ROCKETS
          </Link>
        </li>
        <li className={`nav-link ${activeLink === 'missions' ? 'active-nav' : ''}`}>
          <Link to="/space_travelers_hub/missions" onClick={() => handleClick('missions')}>
            MISSIONS
          </Link>
        </li>
        <li className={`nav-link ${activeLink === 'profile' ? 'active-nav' : ''}`}>
          <Link to="/space_travelers_hub/profile" onClick={() => handleClick('profile')}>
            MY PROFILE
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
