import React from 'react';

const DynamicHeroBg = () => {
  return (
    <div className="dynamic-hero-bg">
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8cecf7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M0,400 Q360,200 720,400 T1440,400"
          fill="none"
          stroke="url(#flow-grad)"
          strokeWidth="2"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="M0,400 Q360,200 720,400 T1440,400;
                    M0,400 Q360,600 720,400 T1440,400;
                    M0,400 Q360,200 720,400 T1440,400"
          />
        </path>
        <path
          d="M0,500 Q360,300 720,500 T1440,500"
          fill="none"
          stroke="url(#flow-grad)"
          strokeWidth="1.5"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="M0,500 Q360,300 720,500 T1440,500;
                    M0,500 Q360,700 720,500 T1440,500;
                    M0,500 Q360,300 720,500 T1440,500"
          />
        </path>
        <path
          d="M0,300 Q360,100 720,300 T1440,300"
          fill="none"
          stroke="url(#flow-grad)"
          strokeWidth="1"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="M0,300 Q360,100 720,300 T1440,300;
                    M0,300 Q360,500 720,300 T1440,300;
                    M0,300 Q360,100 720,300 T1440,300"
          />
        </path>
      </svg>
      <div className="hero-overlay-glow"></div>
    </div>
  );
};

export default DynamicHeroBg;
