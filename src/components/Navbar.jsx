import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      style={{
        backgroundColor: '#0b1c2e',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 0,
        height: 'auto',
      }}
    >
      <div
        className="nav-top-row"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '15px 40px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Link className="nav-logo responsive-logo" to="/" onClick={closeMenu}>
          <div className="nav-logo-mark">
            <img src={`${import.meta.env.BASE_URL}logos/lhsr-logo-white.png`} alt="LHSR" />
          </div>
          <div className="nav-text-container">
            <div className="nav-logo-text">Laboratory for Hypersonic and Shock wave Research</div>
            <div className="nav-logo-sub">Department of Aerospace Engineering, IISc Bengaluru</div>
          </div>
        </Link>
        <button className="nav-hamburger" aria-label="Menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className="nav-bottom-row"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '8px 0',
          background: 'rgba(0, 0, 0, 0.15)',
        }}
      >
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} style={{ margin: 0 }}>
          <li>
            <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/research"
              onClick={closeMenu}
              className={location.pathname === '/research' ? 'active' : ''}
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              to="/facilities"
              onClick={closeMenu}
              className={location.pathname === '/facilities' ? 'active' : ''}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              to="/people"
              onClick={closeMenu}
              className={location.pathname === '/people' ? 'active' : ''}
            >
              People
            </Link>
          </li>
          <li>
            <Link
              to="/publications"
              onClick={closeMenu}
              className={location.pathname === '/publications' ? 'active' : ''}
            >
              Publications
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={closeMenu}
              className={location.pathname === '/gallery' ? 'active' : ''}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/opportunities"
              onClick={closeMenu}
              className={location.pathname === '/opportunities' ? 'active' : ''}
            >
              Opportunities
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
