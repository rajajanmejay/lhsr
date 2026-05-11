import React, { useState } from "react";
import ResearchModal from "../components/ResearchModal";

const Research = () => {
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
      icon: "🚀",
      title: "Hypersonic Aerothermodyanmics",
      desc: "Our flagship research area covers the aerodynamics of vehicles traveling at speeds exceeding Mach 5. We investigate shock-boundary layer interactions, aerodynamic heating, hypersonic intake design, scramjet propulsion, and the aerodynamic performance of re-entry vehicles. We use our world-class shock tunnels to replicate high-altitude, high-speed flight conditions in the laboratory.",
      tags: [
        "SBLI",
        "Scramjet Intakes",
        "Aerodynamic Heating",
        "Re-entry Vehicles",
        "Hypersonic Cruise",
        "Air-breathing Propulsion",
      ],
      images: [`${import.meta.env.BASE_URL}images/RA_HAP1.jpg`, `${import.meta.env.BASE_URL}images/RA_HAP2.jpg`],
    },
    {
      icon: "💥",
      title: "Shock Wave Physics",
      desc: "We study the generation, propagation, reflection, and interaction of shock waves in various media. This spans from classical gas dynamics to shock-induced phase transitions and focusing. Applications include industrial shock processing, medical shock-wave therapy, and fundamental gasdynamics research.",
      tags: [
        "Shock Reflection",
        "Shock-Shock Interaction",
        "Shock Focusing",
        "Condensed Matter",
      ],
      images: [`${import.meta.env.BASE_URL}images/RA_SWP1.jpg`, `${import.meta.env.BASE_URL}images/RA_SWP2.jpg`],
    },
    {
      icon: "🔬",
      title: "Chemical Kinetics",
      desc: "We focus on characterizing fuel behavior under extreme conditions using sophisticated experimental infrastructure. A chemical shock tube is employed to investigate pyrolysis, ignition delay times, and laminar flame speeds across elevated temperatures and pressures. Astrochemistry studies encompass pyrolysis of complex molecules including fullerene, coronene, and polystyrene, probed via emission spectroscopy to elucidate reaction mechanisms. A plug flow reactor examines fuel behavior as coolants within regenerative cooling channels of high-speed air-breathing engines, with emphasis on thermal decomposition and heat transfer. Detailed product speciation is conducted using comprehensive GC×GC platforms equipped with FID, MS, and TCD detectors.",
      tags: [
        "Chemical Kinetics",
        "Spectroscopy",
        "Supersonic Combustion",
        "Flow Reactor",
      ],
      images: [`${import.meta.env.BASE_URL}images/RA_CKC1.jpg`, `${import.meta.env.BASE_URL}images/RA_CKC2.jpg`],
    },
    {
      icon: "🌊",
      title: "Compressible Flow & Mixing",
      desc: "Studies on canonical supersonic-supersonic mixing layers having zero streamwise pressure gradient, which has a significant bearing on system design, is that the growth of the mixing layer is significantly reduced as the convective Mach number increases. In applications, however, streamwise pressure gradients can exist due to the flow topology. We study the mixing layer both experimentally and numerically(LES) under streamwise pressure gradient conditions. We also study the methods which enhances mixing rates for compact design. The first method is where discrete holes connects the high-pressure side to the low-pressure side, leading to a jet into the supersonic stream. Second method employed for mixing layer enhancement is by providing lobes on the splitter plate. These methods creates counter-rotating vortices, which in turn enhances entrainment, and thus the mixing layer thickness increases significantly.",
      tags: [
        "Compressible Mixing Layer",
        "Supersonic Jets",
        "LES",
        "Mixing Enhancement",
      ],
      images: [`${import.meta.env.BASE_URL}images/RA_CFM1.jpg`, `${import.meta.env.BASE_URL}images/RA_CFM2.jpg`],
    },
    {
      icon: "🦅",
      title: "Bio-inspired Research",
      desc: "At LHSR Laboratory, we pioneer cutting-edge bio-inspired shock wave technologies for transformative healthcare solutions. Our innovations enable needle-free vaccine delivery, enhanced fertility treatments in cattle, and precise drug administration. With high-efficiency cellular transformation methods and cost-effective designs, we are redefining biomedical engineering through safe, painless, and impactful micro-shock wave applications.",
      tags: ["Drag Reduction", "Flow Control", "Riblets", "Biomimetics"],
      images: [`${import.meta.env.BASE_URL}images/RA_BIA1.jpg`, `${import.meta.env.BASE_URL}images/RA_BIA2.jpg`],
    },
    {
      icon: "🔩",
      title: "Materials Under Extreme Conditions",
      desc: "Vehicles operating at hypersonic speeds face extreme thermal and mechanical loads. We study the deformation of metals under shock loading, develop and characterize thermal barrier coatings for scramjet applications, and investigate material failure under high strain rates.",
      tags: [
        "Thermal Barrier Coatings",
        "HCP Metals",
        "Shock Loading",
        "High Strain Rate",
      ],
      images: [`${import.meta.env.BASE_URL}images/RA_MEC1.jpg`, `${import.meta.env.BASE_URL}images/RA_MEC2.jpg`],
    },
  ];

  return (
    <div className="page active" id="page-research">
      <div className="page-header">
        <div className="page-header-meta">Research</div>
        <h1>What We Study</h1>
        <p>
          Fundamental and applied research at the intersection of high-speed
          aerodynamics, shock physics, and aerospace engineering.
        </p>
      </div>
      <div className="page-content">
        <div className="research-areas">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="research-area-card"
              style={{ cursor: "pointer" }}
              onClick={() => openModal(area.title, area.desc, area.images)}
            >
              <div className="research-area-content">
                <div className="research-icon">{area.icon}</div>
                <div className="research-area-title">{area.title}</div>
                <div className="research-area-desc">{area.desc}</div>
                <div className="research-tags">
                  {area.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="research-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="research-area-image">
                {area.images.map((img, imgIndex) => (
                  <img key={imgIndex} src={img} alt={area.title} />
                ))}
              </div>
            </div>
          ))}
        </div>
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

export default Research;
