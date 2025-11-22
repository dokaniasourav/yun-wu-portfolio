import React from 'react';

export const WaveDecoration: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 500 50"
    preserveAspectRatio="none"
    className={`w-full h-auto opacity-20 ${className}`}
  >
    <path
      d="M0,25 C100,50 200,0 300,25 C400,50 500,0 600,25 L600,50 L0,50 Z"
      fill="transparent"
      stroke="#ff6b6b"
      strokeWidth="2"
    />
  </svg>
);