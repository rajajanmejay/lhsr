import React, { useEffect, useRef } from 'react';

const ResearchModal = ({ isOpen, onClose, title, text, images }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Store previous focus
      const previousFocus = document.activeElement;
      // Focus modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
        // Restore focus
        previousFocus?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="research-modal"
      style={{ display: 'block' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="research-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="research-modal-close"
          onClick={onClose}
          aria-label="Close modal"
          title="Close (Esc)"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'var(--muted)',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ×
        </button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {images &&
            images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${title} - image ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '50vh',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  background: 'var(--navy3)',
                }}
                loading="lazy"
              />
            ))}
        </div>
        <h2
          id="modal-title"
          className="section-title"
          style={{ marginBottom: '1rem', whiteSpace: 'normal' }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: '1.75',
            color: 'var(--muted)',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ResearchModal;
