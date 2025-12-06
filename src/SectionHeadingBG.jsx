import React from 'react';

const SectionHeadingBG = ({ title, subtitle }) => {
  return (
    <div className="relative w-full h-auto md:h-[350px] flex flex-col items-center justify-center overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('SPACBG.png')" }}
    >
      {/* Gradient Overlay with Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-ieee-black-75 via-ieee-black-50 to-ieee-black-75"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-ieee-black-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-7xl">
        {/* Formal Header Line */}
        <div className="animate-fade-in-down animation-delay-100 mb-6">
          <div className="formal-divider"></div>
        </div>

        {/* Title */}
        <h1 className="text-center text-white font-bold tracking-wider
          text-3xl md:text-4xl lg:text-5xl
          drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
          animate-fade-in-up animation-delay-200">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-center text-ieee-white-75 text-base md:text-lg mt-4 tracking-wide
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]
            animate-fade-in-up animation-delay-300">
            {subtitle}
          </p>
        )}

        {/* Bottom Divider */}
        <div className="animate-fade-in-up animation-delay-400 mt-6">
          <div className="formal-divider"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeadingBG;