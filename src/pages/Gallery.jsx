import React, { useState } from 'react';
import ResearchModal from '../components/ResearchModal';

const CATEGORIES = Object.freeze({
  OPEN: 'open-day',
  VISITORS: 'visitors',
  LAB: 'lab-facilities',
  RESEARCH: 'research-work',
});

const galleryItems = [
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_1.jpg`,
    label: 'Open Day 2026 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_2.jpg`,
    label: 'Open Day 2026 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_3.jpg`,
    label: 'Open Day 2026 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_4.jpg`,
    label: 'Open Day 2026 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_5.jpg`,
    label: 'Open Day 2026 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_6.jpg`,
    label: 'Open Day 2026 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_7.jpg`,
    label: 'Open Day 2025 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_8.jpg`,
    label: 'Open Day 2021 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Open_Day_9.jpg`,
    label: 'Ayudh Pooja 2021 at LHSR',
    cat: CATEGORIES.OPEN,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Visitors_1.jpg`,
    label: 'Visitors inside the laboratory hall',
    cat: CATEGORIES.VISITORS,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Visitors_2.jpg`,
    label: 'Visitors inside the laboratory hall',
    cat: CATEGORIES.VISITORS,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Visitors_3.jpg`,
    label: 'Visitors inside the laboratory hall',
    cat: CATEGORIES.VISITORS,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Visitors_4.jpg`,
    label: 'Lecture series organized by LHSR and SSWR',
    cat: CATEGORIES.VISITORS,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Visitors_5.jpg`,
    label: 'Lecture series organized by LHSR and SSWR',
    cat: CATEGORIES.VISITORS,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_1.jpg`,
    label: 'Poster Presentation at NSSW 2024',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_2.jpg`,
    label: 'GCxGC with MS and FID',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_3.jpg`,
    label: 'Modified Nonel tube for needleless drug delivery',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_4.jpg`,
    label: 'Shockwave in Modified Nonel tube for needleless drug delivery',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_5.jpg`,
    label: 'Turbulent spot convection on a cone surface under Mach 5.85 freestream.',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_6.jpg`,
    label: 'Elliptic cone placed in Hypersonic Shock Tunnel 4',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_7.jpg`,
    label: 'Studies on Plate Specimen subjected to Friedlander Loading using DIC',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_8.gif`,
    label: 'Schlieren visualisation video of Unstart in a 2D Scramjet Intake',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_9.jpg`,
    label:
      'Time-averaged wall pressure along the walls of the 2D Scramjet intake for various Throttle Ratios (TR)',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_10.jpg`,
    label:
      'Behavior of carbon analogs such as polycyclic aromatic hydrocarbons, fullerenes, and hydrogenated amorphous carbon during shock processing in astrophysical contexts',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_Research_11.jpg`,
    label: 'Spinning COne Model',
    cat: CATEGORIES.RESEARCH,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_HST1.jpg`,
    label: 'Hypersonic Shock Tunnel 1',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_HST2.jpg`,
    label: 'Hypersonic Shock Tunnel 2',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_HST3.jpg`,
    label: 'Hypersonic Shock Tunnel 3',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_HST4.jpg`,
    label: 'Hypersonic Shock Tunnel 4',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_HST5.jpg`,
    label: 'Hypersonic Shock Tunnel 5',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_CST1.jpg`,
    label: 'Chemical shock tube experiment',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_CST3.jpg`,
    label: 'Chemical shock tube diagnostics',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_VST1.jpg`,
    label: 'Vertical Shock Tube',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_RT1.jpg`,
    label: 'Reddy Tunnel experimental setup',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_SU1.jpg`,
    label: 'Sputtering unit for coatings',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_FR1.jpg`,
    label: 'Flow reactor setup',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_CF1.jpg`,
    label: 'CO₂ facility 1',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_CF2.jpg`,
    label: 'CO₂ facility 2',
    cat: CATEGORIES.LAB,
  },
  {
    src: `${import.meta.env.BASE_URL}images/Gallery_DPPS.jpg`,
    label: 'Differential Plate Pulse Simulation',
    cat: CATEGORIES.LAB,
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    text: '',
    images: [],
  });

  const openModal = (label, img) => {
    setModalState({ isOpen: true, title: label, text: '', images: [img] });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const filteredItems =
    filter === 'all' ? galleryItems : galleryItems.filter((g) => g.cat === filter);

  return (
    <div className="page active" id="page-gallery">
      <div className="page-header">
        <div className="page-header-meta">Gallery</div>
        <h1>Gallery</h1>
        <p>Facilities, experiments, events, and the people behind the science.</p>
      </div>
      <div className="page-content">
        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`gallery-tab ${filter === CATEGORIES.OPEN ? 'active' : ''}`}
            onClick={() => setFilter(CATEGORIES.OPEN)}
          >
            Open Day
          </button>
          <button
            className={`gallery-tab ${filter === CATEGORIES.VISITORS ? 'active' : ''}`}
            onClick={() => setFilter(CATEGORIES.VISITORS)}
          >
            Visitors
          </button>
          <button
            className={`gallery-tab ${filter === CATEGORIES.LAB ? 'active' : ''}`}
            onClick={() => setFilter(CATEGORIES.LAB)}
          >
            Lab & Facilities
          </button>
          <button
            className={`gallery-tab ${filter === CATEGORIES.RESEARCH ? 'active' : ''}`}
            onClick={() => setFilter(CATEGORIES.RESEARCH)}
          >
            Research Work
          </button>
        </div>
        <div className="gallery-grid">
          {filteredItems.map((g, idx) => (
            <div key={idx} className="gallery-item" onClick={() => openModal(g.label, g.src)}>
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                onError={(e) => {
                  e.target.parentNode.style.background = 'var(--navy3)';
                  e.target.style.display = 'none';
                }}
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{g.label}</span>
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

export default Gallery;
