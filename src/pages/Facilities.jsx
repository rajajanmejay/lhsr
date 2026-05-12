import React, { useState } from "react";
import ResearchModal from "../components/ResearchModal";

const Facilities = () => {
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

  const facilities = [
    {
      tag: "Hypersonic Shock Tunnel • HST-1",
      name: "Hypersonic Shock Tunnel 1",
      subtitle:
        "India's First Hypersonic Shock Tunnel (Legacy tunnel, currently not operational)",
      specs: [
        { key: "Driver Section", val: "2 m" },
        { key: "Driven Section", val: "5 m" },
        { key: "Internal Diameter", val: "50 mm" },
        { key: "External Diameter", val: "101 mm" },
        { key: "Test Section", val: "300 × 300 × 450 mm" },
      ],
      machBadge: "Mach 4 — 13",
      img: `${import.meta.env.BASE_URL}images/facilities/Facility_HST1.jpg`,
    },
    {
      tag: "Hypersonic Shock Tunnel • HST-2",
      name: "Hypersonic Shock Tunnel 2",
      subtitle: "",
      specs: [
        { key: "Driver Section", val: "2 m" },
        { key: "Driven Section", val: "5.12 m" },
        { key: "Internal Diameter", val: "50 mm" },
        { key: "External Diameter", val: "75 mm" },
        { key: "Test Section", val: "300 × 300 × 450 mm" },
        { key: "Max Enthalpy", val: "0.7 – 3 MJ/kg" },
        { key: "Reynolds No. Range", val: "1 – 2 million/m" },
      ],
      machBadge: "Mach 5.75 — 12",
      img: `${import.meta.env.BASE_URL}images/facilities/Facility_HST2.jpg`,
    },
    {
      tag: "Hypersonic Shock Tunnel • HST-3",
      name: "Hypersonic Shock Tunnel 3",
      subtitle: "Free Piston Shock Tube",
      specs: [
        { key: "Reservoir Length", val: "1.3 m" },
        { key: "Compression Tube", val: "10 m" },
        { key: "Driven Tube", val: "4.5 m" },
        { key: "Piston Mass", val: "20 – 30 kg" },
        { key: "Compression Ratio", val: "60" },
        { key: "Test Section", val: "300 × 300 × 450 mm" },
        { key: "Max Enthalpy", val: "3 – 25 MJ/kg" },
        { key: "Reynolds No. Range", val: "1 – 2 million/m" },
      ],
      machBadge: "Mach 6 — 12",
      img: `${import.meta.env.BASE_URL}images/facilities/Facility_HST3.jpg`,
    },
    {
      tag: "Hypersonic Shock Tunnel • HST-4",
      name: "Hypersonic Shock Tunnel 4",
      subtitle: "Large-Scale Test Section",
      specs: [
        { key: "Driver Section", val: "2 m" },
        { key: "Driven Section", val: "10 m" },
        { key: "Internal Diameter", val: "165 mm" },
        { key: "External Diameter", val: "200 mm" },
        { key: "Test Section", val: "1 × 1 × 2.85 m" },
        { key: "Max Enthalpy", val: "8 MJ/kg" },
        { key: "Reynolds No. Range", val: "1 – 2 million/m" },
      ],
      machBadge: "Mach 6 — 15",
      img: `${import.meta.env.BASE_URL}images/facilities/Facility_HST4.jpg`,
    },
    {
      tag: "Hypersonic Shock Tunnel • HST-5",
      name: "Hypersonic Shock Tunnel 5",
      subtitle: "Combustion Driven",
      specs: [
        { key: "Driver Section", val: "3 m" },
        { key: "Driven Section", val: "4.7 m" },
        { key: "Internal Diameter", val: "102 mm" },
        { key: "External Diameter", val: "130 mm" },
        { key: "Max Enthalpy", val: "2 – 10 MJ/kg" },
        { key: "Reynolds No. Range", val: "1 – 2 million/m" },
      ],
      machBadge: "Mach 6 — 13",
      img: `${import.meta.env.BASE_URL}images/facilities/Facility_HST5.jpg`,
      note: "4 circumferential spark plugs 2 cm upstream of diaphragm station for combustion driving mode.",
    },
    {
      tag: "Chemical Shock Tube • CST-1",
      name: "Chemical Shock Tunnel 1",
      subtitle: "",
      specs: [
        { key: "Driver Section", val: "1.8 m" },
        { key: "Driven Section", val: "3.3 m" },
        { key: "Internal Diameter", val: "50.8 mm" },
        { key: "External Diameter", val: "100 mm" },
        { key: "Test Section", val: "0.4 m" },
      ],
      img: `${import.meta.env.BASE_URL}images/facilities/Facility_CST1.jpg`,
    },
    {
      tag: "Chemical Shock Tube • CST-3",
      name: "Chemical Shock Tunnel 3",
      subtitle: "",
      specs: [
        { key: "Driver Section", val: "3.6 m" },
        { key: "Driven Section", val: "7.6 m" },
        { key: "Internal Diameter", val: "54 mm" },
        { key: "External Diameter", val: "100 mm" },
        { key: "Test Section", val: "0.5 m" },
      ],
      img: `${import.meta.env.BASE_URL}images/facilities/Facility_CST3.jpg`,
    },
    {
      tag: "Vertical Shock Tube • VST",
      name: "Vertical Shock Tube (VST)",
      subtitle: "",
      specs: [
        { key: "Driver Section", val: "1.5 m" },
        { key: "Driven Section", val: "4.3 m" },
        { key: "Internal Diameter", val: "136 mm" },
        { key: "External Diameter", val: "168 mm" },
        { key: "Shock Pressure", val: "100 bar" },
        { key: "Test Section", val: "870 × 150 × 500 mm" },
        { key: "Decay Time", val: "1.6 – 20 ms" },
      ],
      img: `${import.meta.env.BASE_URL}images/facilities/Facility_VST1.jpg`,
    },
  ];

  return (
    <div className="page active" id="page-facilities">
      <div className="page-header">
        <div className="page-header-meta">Facilities</div>
        <h1>
          World-Class
          <br />
          Testing Infrastructure
        </h1>
        <p>
          A unique suite of hypersonic shock tunnels, chemical shock tubes, and
          specialized equipment — the most comprehensive hypersonic research
          facility in India.
        </p>
      </div>
      <div className="page-content">
        {facilities.map((fac, idx) => (
          <div
            key={idx}
            className="facility-item"
            style={{ cursor: "pointer" }}
            onClick={() => openModal(fac.name, fac.subtitle, [fac.img])}
          >
            <div className="facility-info">
              <div className="facility-tag">{fac.tag}</div>
              <div className="facility-name">{fac.name}</div>
              {fac.subtitle && (
                <div className="facility-subtitle">{fac.subtitle}</div>
              )}

              <div className="facility-specs">
                {fac.specs.map((spec, sidx) => (
                  <div key={sidx} className="spec-row">
                    <span className="spec-key">{spec.key}</span>
                    <span className="spec-val">{spec.val}</span>
                  </div>
                ))}
              </div>

              {fac.machBadge && (
                <div className="mach-badge">{fac.machBadge}</div>
              )}
              {fac.note && (
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--muted)",
                    marginTop: "1.5rem",
                  }}
                >
                  {fac.note}
                </p>
              )}
            </div>
            <div className="facility-image">
              <img src={fac.img} alt={fac.name} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

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

export default Facilities;
