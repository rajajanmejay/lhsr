import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [menuOpen]);

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
        <Link
          className="nav-logo responsive-logo"
          to="/"
          onClick={closeMenu}
          aria-label="LHSR Home"
        >
          <div className="nav-logo-mark">
            <img src={`${import.meta.env.BASE_URL}logos/lhsr-logo-white.png`} alt="LHSR Logo" />
          </div>
          <div className="nav-text-container">
            <div className="nav-logo-text">Laboratory for Hypersonic and Shock wave Research</div>
            <div className="nav-logo-sub">Department of Aerospace Engineering, IISc Bengaluru</div>
          </div>
        </Link>
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
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
        <ul
          id="nav-links"
          ref={menuRef}
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          style={{ margin: 0 }}
          role="navigation"
        >
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === '/' ? 'active' : ''}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/research"
              onClick={closeMenu}
              className={location.pathname === '/research' ? 'active' : ''}
              aria-current={location.pathname === '/research' ? 'page' : undefined}
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              to="/facilities"
              onClick={closeMenu}
              className={location.pathname === '/facilities' ? 'active' : ''}
              aria-current={location.pathname === '/facilities' ? 'page' : undefined}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              to="/people"
              onClick={closeMenu}
              className={location.pathname === '/people' ? 'active' : ''}
              aria-current={location.pathname === '/people' ? 'page' : undefined}
            >
              People
            </Link>
          </li>
          <li>
            <Link
              to="/publications"
              onClick={closeMenu}
              className={location.pathname === '/publications' ? 'active' : ''}
              aria-current={location.pathname === '/publications' ? 'page' : undefined}
            >
              Publications
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={closeMenu}
              className={location.pathname === '/gallery' ? 'active' : ''}
              aria-current={location.pathname === '/gallery' ? 'page' : undefined}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/opportunities"
              onClick={closeMenu}
              className={location.pathname === '/opportunities' ? 'active' : ''}
              aria-current={location.pathname === '/opportunities' ? 'page' : undefined}
            >
              Opportunities
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={location.pathname === '/contact' ? 'active' : ''}
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
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
