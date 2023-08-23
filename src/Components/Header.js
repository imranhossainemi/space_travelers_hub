import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';
import logo from '../images/planet.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState();

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === '/space_travelers_hub/') {
      setActiveLink('rockets');
    } else if (pathname === '/space_travelers_hub/missions') {
      setActiveLink('missions');
    } else if (pathname === '/space_travelers_hub/profile') {
      setActiveLink('profile');
    }
  }, []);
  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <div className="main-logo">
        <img className="logo" src={logo} alt="Space Logo" />
        <h1 className="logo-title">Space Travelers&rsquo; Hub</h1>
      </div>
      <ul className="nav-links">
        <li className={`nav-link ${activeLink === 'rockets' ? 'active-nav' : ''}`}>
          <Link to="/space_travelers_hub/" onClick={() => handleClick('rockets')} alt="rockets">
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
