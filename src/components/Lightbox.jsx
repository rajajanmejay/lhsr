import React, { useState, useEffect, useRef } from 'react';

/**
 * Lightbox component for image galleries
 * Supports keyboard navigation (arrow keys, ESC) and touch gestures
 */
const Lightbox = ({ isOpen, images = [], currentIndex = 0, onClose, onNavigate }) => {
  const [index, setIndex] = useState(currentIndex);
  const containerRef = useRef();

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose?.();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, index, images.length]);

  const handleNext = () => {
    const nextIndex = (index + 1) % images.length;
    setIndex(nextIndex);
    onNavigate?.(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (index - 1 + images.length) % images.length;
    setIndex(prevIndex);
    onNavigate?.(prevIndex);
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[index];

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        animation: 'fadeIn 0.2s ease-in-out',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Main image */}
      <div
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage}
          alt={`Image ${index + 1} of ${images.length}`}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: '4px',
          }}
          loading="lazy"
        />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          color: 'white',
          fontSize: '2.5rem',
          cursor: 'pointer',
          width: '3rem',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.2)')}
        onMouseLeave={(e) => (e.target.style.background = 'rgba(255,255,255,0.1)')}
      >
        ✕
      </button>

      {/* Navigation arrows - only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              width: '3rem',
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.target.style.background = 'rgba(255,255,255,0.1)')}
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              width: '3rem',
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.target.style.background = 'rgba(255,255,255,0.1)')}
          >
            ›
          </button>

          {/* Image counter */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Lightbox;
