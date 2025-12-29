
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showHalo?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showHalo = true }) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xl',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-24 h-24 text-4xl'
  };

  return (
    <div className="relative flex items-center justify-center">
      {showHalo && (
        <div className={`absolute rounded-full border-2 border-[#00fbff]/30 shadow-[0_0_20px_rgba(0,251,255,0.4)] bg-[#00fbff]/5 animate-pulse
          ${size === 'sm' ? 'w-12 h-12' : size === 'md' ? 'w-20 h-20' : 'w-28 h-28'}`} 
        />
      )}
      <div className={`relative z-10 bg-gradient-to-br from-white to-slate-300 rounded-full flex items-center justify-center font-black text-black shadow-inner
        ${sizeClasses[size]}`}
      >
        M<span className="text-[#ff0055]">Y</span>
      </div>
    </div>
  );
};

export default Logo;
