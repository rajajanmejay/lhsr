import React from 'react';

const LoadingSkeleton = ({ count = 1, type = 'card' }) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  const skeletonStyles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1.5rem',
      backgroundColor: 'rgba(0, 119, 204, 0.05)',
      borderRadius: '8px',
      border: '1px solid var(--border)',
    },
    line: {
      height: '1rem',
      backgroundColor: 'rgba(0, 119, 204, 0.1)',
      borderRadius: '4px',
      animation: 'pulse 1.5s ease-in-out infinite',
    },
    title: {
      height: '1.5rem',
      backgroundColor: 'rgba(0, 119, 204, 0.1)',
      borderRadius: '4px',
      width: '70%',
      animation: 'pulse 1.5s ease-in-out infinite',
    },
  };

  const pulseAnimation = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  return (
    <>
      <style>{pulseAnimation}</style>
      {type === 'card'
        ? skeletons.map((i) => (
            <div key={i} style={skeletonStyles.card}>
              <div style={skeletonStyles.title} />
              <div style={skeletonStyles.line} />
              <div style={skeletonStyles.line} style={{ width: '85%' }} />
              <div style={skeletonStyles.line} style={{ width: '65%' }} />
            </div>
          ))
        : skeletons.map((i) => <div key={i} style={skeletonStyles.line} />)}
    </>
  );
};

export default LoadingSkeleton;
