import React from "react";
import { Link } from "react-router-dom";

const Opportunities = () => {
  return (
    <div className="page active" id="page-opportunities">
      <div className="page-header">
        <div className="page-header-meta">Opportunities</div>
        <h1>Join the Lab</h1>
        <p>
          We are always looking for motivated researchers to join our team.
          Explore openings at all levels.
        </p>
      </div>

      <div className="page-content">
        <div className="opp-grid">
          <div className="opp-card">
            <div className="opp-icon">🎓</div>
            <div className="opp-content">
              <div className="opp-title">Research Scholars</div>
              <div className="opp-desc">
                We admit Ph.D. and M.Tech. (Research) students through the IISc
                admissions process. For detailed guidelines, please refer to:
                <br />
                <a
                  href="https://aero.iisc.ac.in/academics/admissions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admissions Page
                </a>
              </div>
            </div>
          </div>

          <div className="opp-card">
            <div className="opp-icon">🔭</div>
            <div className="opp-content">
              <div className="opp-title">Post-Doctoral Fellows</div>
              <div className="opp-desc">
                Applications for <strong>Postdoctoral Fellowships</strong> are
                encouraged through national-level schemes (such as NPDF) and
                institute fellowships.
                <br />
                <br />
                Project-based positions will be offered based on availability.
                Interested candidates should contact the concerned faculty.
              </div>
            </div>
          </div>

          <div className="opp-card">
            <div className="opp-icon">🛠️</div>
            <div className="opp-content">
              <div className="opp-title">Project Staff</div>
              <div className="opp-desc">
                Funded project positions will be advertised on this website when
                available.
              </div>
            </div>
          </div>

          <div className="opp-card">
            <div className="opp-icon">🌍</div>
            <div className="opp-content">
              <div className="opp-title">Interns / Visiting Researchers</div>
              <div className="opp-desc">
                Internships via IAS Summer Fellowship and NPTEL are encouraged.
                <br />
                <br />
                Visiting researchers will be considered based on collaboration
                and research alignment.
              </div>
            </div>
          </div>
        </div>

        <div className="opp-cta">
          <p>READY TO APPLY?</p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>

        <div className="opp-industry">
          <div className="opp-grid">
            <div className="opp-card">
              <div className="opp-icon">🤝</div>
              <div className="opp-content">
                <div className="opp-title">Industry Collaboration</div>
                <div className="opp-desc">
                  LHSR engages with Research Labs - ISRO, DRDO, NAL and industry
                  partners to provide knowledge and technology solutions in
                  research areas of hypersonic aerothermodynamics, shock waves
                  and their applications, chemical kinetics, materials etc.
                  <br />
                  <br />
                  Laboratory facilities are available for sponsored research and
                  testing under IISc's industry interaction agencies such as
                  CSIC, FSID etc. The lab undertakes consultancy on all domains
                  of expertise. Contact faculty members for more details.
                  <br />
                  <br />
                  Facilities available for sponsored research, testing, and
                  consultancy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
