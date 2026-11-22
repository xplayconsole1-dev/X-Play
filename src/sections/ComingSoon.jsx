import React from 'react';

const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center justify-center gap-8 px-4 text-center">
        
        {/* XPlay Emblem Icon */}
        <div className="w-20 h-20 md:w-28 md:h-28 mx-auto flex items-center justify-center drop-shadow-[0_4px_24px_rgba(6,182,212,0.45)]">
          <img 
            src="/brand/04_icon.svg" 
            alt="XPlay Logo" 
            className="w-full h-full object-contain" 
            onError={(e) => { e.target.src = '/brand/03_master_logo.svg'; }} 
          />
        </div>

        {/* Brand Master Title */}
        <div className="text-wrapper !mt-0">
          <h3 className="gradient-title">
            XPLAY <br /> CONSOLE
          </h3>
        </div>

        {/* Key Feature Badges */}
        <div className="flex-center flex-wrap gap-4 md:gap-8">
          <span className="text-[#fff9cb] text-sm sm:text-base md:text-xl font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full font-sans shadow-lg">
            60 FPS ON ANY LAPTOP
          </span>
          <span className="text-[#ffb0c4] text-sm sm:text-base md:text-xl font-bold uppercase tracking-widest bg-pink-500/15 backdrop-blur-md border border-pink-400/30 px-6 py-2.5 rounded-full font-sans shadow-lg">
            DIRECTSTORAGE NVME SPEED
          </span>
        </div>

        {/* Supported Ecosystem Bar */}
        <div className="pt-2 flex items-center justify-center gap-6 text-xs text-white/60 font-sans tracking-widest uppercase">
          <span>Steam</span>
          <span>•</span>
          <span>Epic Games</span>
          <span>•</span>
          <span>Rockstar</span>
          <span>•</span>
          <span>DirectX 12</span>
        </div>

      </div>
    </section>
  );
};

export default ComingSoon;
