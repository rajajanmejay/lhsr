import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <footer>
      <div className="footer-brand-row">
        <div className="footer-institution-logo footer-logo-left">
          <a
            href="https://aero.iisc.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${import.meta.env.BASE_URL}logos/aero-logo.png`}
              alt="Department of Aerospace Engineering, IISc"
            />
          </a>
        </div>

        <div className="footer-brand-center">
          <div>
            <div className="footer-brand-name">
              Laboratory for Hypersonic and Shock wave Research
            </div>

            <div className="footer-brand-sub">
              Department of Aerospace Engineering, IISc Bengaluru
            </div>
          </div>
        </div>

        <div className="footer-institution-logo footer-logo-right">
          <a
            href="https://iisc.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${import.meta.env.BASE_URL}logos/iisc-logo.png`}
              alt="Indian Institute of Science"
            />
          </a>
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
          paddingTop: "8px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          textAlign: "center",
        }}
      >
        {isContactPage && (
          <div
            style={{
              marginBottom: "16px",
              fontFamily: "Space Mono, monospace",
              fontSize: "11px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "var(--muted)",
                marginBottom: "4px",
                fontWeight: "bold",
              }}
            >
              Concept & Direction
            </div>

            <div
              style={{
                lineHeight: "1.5",
                color: "var(--hero-text, #cbd5e1)",
              }}
            >
              Prof Srisha Rao M V
              <br />
              Raja Janmejay
              <br />
              LNV Pratap
            </div>
          </div>
        )}

        <div
          className="footer-dev"
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "11px",
            marginTop: "4px",
          }}
        >
          Website Developed by - Raja Janmejay
        </div>

        <div
          className="footer-copy"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          © {new Date().getFullYear()} LHSR, IISc Bengaluru. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
