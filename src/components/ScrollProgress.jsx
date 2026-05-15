import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="scroll-progress-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        zIndex: 2000,
        pointerEvents: 'none',
      }}
    >
      <div
        className="scroll-progress-bar"
        style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: 'linear-gradient(to right, var(--blue), #8cecf7)',
          boxShadow: '0 0 10px rgba(0, 143, 168, 0.5)',
          transition: 'width 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
