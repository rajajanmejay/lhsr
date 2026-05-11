import React from "react";

const ResearchModal = ({ isOpen, onClose, title, text, images }) => {
  if (!isOpen) return null;

  return (
    <div
      className="research-modal"
      style={{ display: "block" }}
      onClick={onClose}
    >
      <div
        className="research-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="research-modal-close" onClick={onClose}>
          ×
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {images &&
            images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${title} - ${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "50vh",
                  objectFit: "contain",
                  borderRadius: "6px",
                  background: "var(--navy3)",
                }}
              />
            ))}
        </div>
        <h2
          className="section-title"
          style={{ marginBottom: "1rem", whiteSpace: "normal" }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.75",
            color: "var(--muted)",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ResearchModal;
