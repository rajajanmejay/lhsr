import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer>
      <div className="footer-brand-row">
        <div className="footer-institution-logo">
          <a href="https://aero.iisc.ac.in/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${import.meta.env.BASE_URL}logos/aero-logo.png`}
              alt="Department of Aerospace Engineering, IISc"
            />
          </a>
        </div>

        <div className="footer-brand-center">
          <div className="footer-brand-name">
            Laboratory for Hypersonic and Shock wave Research
          </div>
          <div className="footer-brand-sub">
            Department of Aerospace Engineering, IISc Bengaluru
          </div>
        </div>

        <div className="footer-institution-logo">
          <a href="https://iisc.ac.in/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${import.meta.env.BASE_URL}logos/iisc-logo.png`}
              alt="Indian Institute of Science"
            />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-dev">
          Website Developed by - Raja Janmejay
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} LHSR, IISc Bengaluru. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
