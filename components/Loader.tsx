import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full animate-arc-loader" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFA8A8" />
              <stop offset="20%" stopColor="#FFD4A3" />
              <stop offset="40%" stopColor="#FFF1A6" />
              <stop offset="60%" stopColor="#BFFFC7" />
              <stop offset="80%" stopColor="#A8DFFF" />
              <stop offset="100%" stopColor="#D7B9FF" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#rainbow)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="200, 283"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;