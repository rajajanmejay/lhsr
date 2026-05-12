import React, { useState, useMemo } from 'react';
import ResearchModal from '../components/ResearchModal';

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD IMAGES
//
//   Drop files into:  src/gallery/<Category Name>/<Caption Text>.jpg
//
//   • The subfolder name becomes the category tab label.
//   • The filename (without extension) becomes the caption shown on hover.
//   • Underscores and hyphens in filenames are converted to spaces.
//   • Supported formats: jpg, jpeg, png, gif, webp
//
//   Example:
//     src/gallery/Open Day/Open Day 2026 Group Photo.jpg
//     src/gallery/Research Work/Schlieren_Scramjet_Unstart.gif
//     src/gallery/Lab Facilities/Hypersonic_Shock_Tunnel_4.jpg
//
//   After adding files, just rebuild — no code changes needed.
// ─────────────────────────────────────────────────────────────────────────────

const rawModules = import.meta.glob(
  '../gallery/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}',
  { eager: true }
);

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function fileToCaption(filename) {
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const globItems = Object.entries(rawModules)
  .filter(([path]) => !path.includes('.gitkeep'))
  .map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const category = parts[parts.length - 2];
    return {
      src: mod.default,
      label: fileToCaption(filename),
      category,
      cat: toSlug(category),
    };
  });

const allItems = globItems;

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [modalState, setModalState] = useState({ isOpen: false, title: '', text: '', images: [] });

  const categories = useMemo(() => {
    const seen = new Set();
    const result = [];
    allItems.forEach(({ category, cat }) => {
      if (!seen.has(cat)) { seen.add(cat); result.push({ label: category, slug: cat }); }
    });
    return result.sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const filteredItems = useMemo(
    () => filter === 'all' ? allItems : allItems.filter((g) => g.cat === filter),
    [filter]
  );

  const openModal  = (label, img) => setModalState({ isOpen: true, title: label, text: '', images: [img] });
  const closeModal = () => setModalState((s) => ({ ...s, isOpen: false }));

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
            className={`gallery-tab${filter === 'all' ? ' active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {categories.map(({ label, slug }) => (
            <button
              key={slug}
              className={`gallery-tab${filter === slug ? ' active' : ''}`}
              onClick={() => setFilter(slug)}
            >
              {label}
            </button>
          ))}
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
