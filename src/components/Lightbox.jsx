import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Lightbox = ({ isOpen, onClose, items = [], initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalBodyOverflow || '';
      document.documentElement.style.overflow = originalHtmlOverflow || '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        ✕
      </button>

      <div className="lightbox-counter">
        {currentIndex + 1} / {items.length}
      </div>

      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-content-wrap">
          <img
            key={currentIndex}
            src={currentItem.src}
            alt={`${currentItem.label} (${currentItem.category})`}
            className="lightbox-image"
          />
          <div className="lightbox-inner-caption">
            <div className="lightbox-caption-event">{currentItem.category}</div>
            <div className="lightbox-caption-text">{currentItem.label}</div>
          </div>
        </div>

        {items.length > 1 && (
          <>
            <button
              className="lightbox-nav lightbox-nav-prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="lightbox-nav lightbox-nav-next"
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="lightbox-info">
        <p>Use ← → to navigate • Esc to close</p>
      </div>
    </div>,
    document.body
  );
};


export default Lightbox;

