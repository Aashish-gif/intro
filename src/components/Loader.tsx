import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0b0c10] flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Rotating Hexagons */}
        <div className="absolute top-1/4 left-1/4 hexagon animate-rotate opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 hexagon animate-rotate-reverse opacity-15"></div>
        <div className="absolute top-1/2 left-1/6 hexagon animate-rotate opacity-10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 hexagon animate-rotate-reverse opacity-25" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q400,100 800,200" className="loader-line" style={{ animationDelay: '0s' }} />
          <path d="M0,400 Q400,300 800,400" className="loader-line" style={{ animationDelay: '1s' }} />
          <path d="M0,600 Q400,500 800,600" className="loader-line" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      {/* Main Loader Content */}
      <div className="text-center relative z-10">
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-[#F5F5F5]/10 rounded-full"></div>
          
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="76"
              stroke="url(#progressGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 76}`}
              strokeDashoffset={`${2 * Math.PI * 76 * (1 - progress / 100)}`}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="100%" stopColor="#FFD700" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Inner Content */}
          <div className="absolute inset-6 bg-[#0b0c10] rounded-full flex items-center justify-center border border-[#F5F5F5]/20">
            <div className="text-[#F5F5F5] font-bold text-2xl">{progress}%</div>
          </div>
        </div>
        
        <div className="relative">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-2">TAJ</h2>
          <p className="text-gradient text-lg font-medium mb-2">Elite Developer</p>
          <p className="text-[#00FFFF] text-sm">Initializing Excellence...</p>
          
          <div className="mt-8 w-80 h-1 bg-[#F5F5F5]/10 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00FFFF] via-[#FFD700] to-[#00FFFF] transition-all duration-300 shimmer"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;