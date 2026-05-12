import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResearchModal from "../components/ResearchModal";

const Home = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    text: "",
    images: [],
  });

  const openModal = (title, text, images) => {
    setModalState({ isOpen: true, title, text, images });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const researchAreas = [
    {
      num: "01 //",
      title: "Hypersonic Aerodynamics",
      desc: "Experimental and computational investigations of hypersonic flows, including shock–boundary layer interactions, aerodynamic heating, compressible boundary layer transition and high-speed inlet design.",
      img: `${import.meta.env.BASE_URL}images/Home_HAD.jpg`,
    },
    {
      num: "02 //",
      title: "Hypersonic Aeroelasticity",
      desc: "Fluid–structure interactions in high-speed flows, including panel flutter, shock-induced deformation, and aero-thermo-elastic coupling.",
      img: `${import.meta.env.BASE_URL}images/Home_HAE.jpg`,
    },
    {
      num: "03 //",
      title: "High-Enthalpy Flows",
      desc: "Real-gas effects, thermal non-equilibrium, dissociation, ionization, and radiation in hypersonic and re-entry environments.",
      img: `${import.meta.env.BASE_URL}images/Home_HEF.jpg`,
    },
    {
      num: "04 //",
      title: "Shockwave Physics",
      desc: "Fundamental studies of shock wave generation, propagation, reflection, and interaction with boundary layers, structures, and materials.",
      img: `${import.meta.env.BASE_URL}images/Home_SWP.gif`,
    },
    {
      num: "05 //",
      title: "High Temperature Chemical Kinetics",
      desc: "High-temperature reaction kinetics using shock tubes, including ignition delay measurements, spectroscopy, and non-equilibrium chemistry.",
      img: `${import.meta.env.BASE_URL}images/Home_HTC.jpg`,
    },
    {
      num: "06 //",
      title: "Biological Engineering",
      desc: "Shock-wave-based biomedical and bioengineering applications, including cell manipulation, medical therapies, and biological flow studies.",
      img: `${import.meta.env.BASE_URL}images/Home_BLE.jpg`,
    },
    {
      num: "07 //",
      title: "Materials",
      desc: "Behavior of materials under extreme thermal and shock loading, including thermal protection systems and high-temperature material characterization.",
      img: `${import.meta.env.BASE_URL}images/Home_MAT.jpg`,
    },
    {
      num: "08 //",
      title: "Blast-wave Physics",
      desc: "The facilities comprise systems for near- and far-field Friedlander wave simulation, including conical shock tubes and a differential plate pulse simulator. These enable controlled blast loading on test specimens. Integrated high-speed 3D Digital Image Correlation systems capture full-field transient deformations, supporting accurate analysis of structural response under realistic blast conditions.",
      img: `${import.meta.env.BASE_URL}images/Home_BWP.jpg`,
    },
    {
      num: "09 //",
      title: "Industrial Applications",
      desc: "Applications of shock and high-speed flow physics in aerospace, energy systems, defense technologies, and industrial processes.",
      img: `${import.meta.env.BASE_URL}images/Home_IND.jpg`,
    },
  ];

  return (
    <div className="page active" id="page-home">
      <section className="hero">
        <div className="hero-bg-orb orb1"></div>
        <div className="hero-bg-orb orb2"></div>

        <h1 className="hero-title">
          <span className="line1">Laboratory for</span>
          <span className="line2">
            Hypersonic &<br />
            Shock wave
            <br />
            Research
          </span>
          <span className="line3">IISc Bengaluru</span>
        </h1>

        <p className="hero-desc">
          Pushing the boundaries of high-speed flight science. LHSR operates
          India's most comprehensive suite of hypersonic shock tunnels,
          advancing aerospace research from Mach 4 to Mach 12 and specific
          enthalpy from 0.3 MJ/kg to 10 MJ/kg.
        </p>

        <div className="hero-cta">
          <Link to="/facilities" className="btn-primary">
            Explore Facilities
          </Link>
          <Link to="/research" className="btn-outline">
            Our Research
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">5+</div>
            <div className="stat-label">Shock Tunnels</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">M12</div>
            <div className="stat-label">Max Mach Number</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">10</div>
            <div className="stat-label">MJ/kg Peak Enthalpy</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">30+</div>
            <div className="stat-label">Lab Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">1971</div>
            <div className="stat-label">India's First HST</div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      <section className="about-section">
        <div className="about-inner">
          <div className="section-tag">About the Lab</div>
          <h2 className="section-title">Decades of Hypersonic Excellence</h2>

          <div className="about-images-row">
            <img src={`${import.meta.env.BASE_URL}images/Home_Lab_1.jpg`} alt="LHSR laboratory overview" loading="lazy" />
            <img src={`${import.meta.env.BASE_URL}images/Home_Lab_2.jpg`} alt="LHSR shock tunnel facility" loading="lazy" />
          </div>

          <div className="about-text">
            <p>
              The Laboratory for Hypersonic and Shock wave Research (LHSR) at
              the Indian Institute of Science (IISc), Bengaluru is a
              world-leading research facility dedicated to the study of
              high-speed flows, shock waves, and hypersonic aerodynamics.
            </p>
            <p>
              Home to India's first hypersonic shock tunnel, LHSR has been at
              the forefront of aerospace research for decades. Our facilities
              enable ground-testing of vehicles designed to fly faster than Mach
              5 — bridging the gap between computational models and real flight
              conditions.
            </p>
            <p>
              Our interdisciplinary team of faculty, research scientists, and
              students work on fundamental and applied problems spanning
              aerodynamic design, combustion chemistry, plasma physics, and
              materials under extreme conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="research-preview">
        <div className="section-tag">Research Focus</div>
        <h2 className="section-title">Core Research Areas</h2>
        <div className="research-grid">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="research-card"
              onClick={() => openModal(area.title, area.desc, [area.img])}
            >
              <div className="research-card-image">
                <img src={area.img} alt={area.title} loading="lazy" />
              </div>
              <div className="research-card-num">{area.num}</div>
              <h3 className="research-card-title">{area.title}</h3>
              <div className="research-card-desc">{area.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <ResearchModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        text={modalState.text}
        images={modalState.images}
      />
    </div>
  );
};

export default Home;
