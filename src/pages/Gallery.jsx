import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';

const CATEGORIES = Object.freeze({
  OPEN: { id: 'open-day', label: 'Open Day', icon: '🎉' },
  VISITORS: { id: 'visitors', label: 'Visitors', icon: '👥' },
  LAB: { id: 'lab-facilities', label: 'Lab & Facilities', icon: '🔬' },
  RESEARCH: { id: 'research-work', label: 'Research Work', icon: '📊' },
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
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const openLightbox = (index) => {
    const allFilteredSrcs = filteredItems.map((item) => item.src);
    setLightboxState({
      isOpen: true,
      images: allFilteredSrcs,
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightboxState({ ...lightboxState, isOpen: false });
  };

  const filteredItems =
    filter === 'all' ? galleryItems : galleryItems.filter((g) => g.cat.id === filter);

  return (
    <div className="page active" id="page-gallery">
      <div className="page-header">
        <div className="page-header-meta">Gallery</div>
        <h1>Gallery</h1>
        <p>Facilities, experiments, events, and the people behind the science.</p>
      </div>
      <div className="page-content" style={{ padding: '3rem 2.5rem' }}>
        {/* Category Tabs */}
        <div className="gallery-tabs" style={{ marginBottom: '2rem' }}>
          <button
            className={`gallery-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            style={{
              padding: '0.75rem 1.5rem',
              marginRight: '0.75rem',
              marginBottom: '0.5rem',
              border: `2px solid ${filter === 'all' ? 'var(--blue)' : 'var(--border)'}`,
              background: filter === 'all' ? 'rgba(0, 119, 204, 0.1)' : 'transparent',
              color: filter === 'all' ? 'var(--blue)' : 'var(--muted)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s',
              fontSize: '0.95rem',
            }}
          >
            All ({galleryItems.length})
          </button>
          {Object.values(CATEGORIES).map((cat) => {
            const count = galleryItems.filter((g) => g.cat.id === cat.id).length;
            return (
              <button
                key={cat.id}
                className={`gallery-tab ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  marginRight: '0.75rem',
                  marginBottom: '0.5rem',
                  border: `2px solid ${filter === cat.id ? 'var(--blue)' : 'var(--border)'}`,
                  background: filter === cat.id ? 'rgba(0, 119, 204, 0.1)' : 'transparent',
                  color: filter === cat.id ? 'var(--blue)' : 'var(--muted)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  fontSize: '0.95rem',
                }}
              >
                {cat.icon} {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" style={{ marginBottom: '2rem' }}>
          {filteredItems.map((g, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => openLightbox(idx)}
              style={{
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
                background: 'var(--navy3)',
                aspectRatio: '1',
              }}
              title="Click to view full size"
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div
                className="gallery-item-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => (e.style.opacity = '1')}
                onMouseLeave={(e) => (e.style.opacity = '0')}
              >
                <span
                  className="gallery-item-label"
                  style={{
                    color: 'white',
                    fontSize: '0.9rem',
                    lineHeight: '1.4',
                    fontWeight: '500',
                  }}
                >
                  {g.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        {filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted)' }}>
            <p>No images in this category.</p>
          </div>
        )}

        <div
          style={{
            fontSize: '0.85rem',
            color: 'var(--muted)',
            textAlign: 'center',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <p>💡 Tip: Use arrow keys to navigate, ESC to close when viewing full size</p>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={closeLightbox}
        onNavigate={(index) => setLightboxState({ ...lightboxState, currentIndex: index })}
      />
    </div>
  );
};

export default Gallery;
