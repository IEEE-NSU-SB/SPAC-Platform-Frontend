import { useEffect, useRef } from "react";
import ieee_logo from "./assets/collaborator-logo/ieee-logo.png";
import ieee_logo_bd from "./assets/collaborator-logo/ieee-bd-logo.png";
import nsu_logo from "./assets/collaborator-logo/nsu-logo.png";
import nsu_yf_logo from "./assets/collaborator-logo/ieee-yf.png";
import ieee_nsu_sb from "./assets/collaborator-logo/ieee-nsu-sb-logo.png";
import FadeIn from "./FadeIn";

const Collaborator = () => {
  const collaboratorImages = [
    ieee_logo,
    ieee_logo_bd,
    nsu_logo,
    nsu_yf_logo,
    ieee_nsu_sb,
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      const itemWidth = marquee.scrollWidth / 2;

      if (Math.abs(position) >= itemWidth) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#FFFEF9] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="formal-divider mb-6"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-ieee-darkblue font-bold mb-4">
            Our <span className="text-ieee-cyan">Collaborators</span>
          </h2>
          <p className="text-gray-600 text-lg">In Partnership With</p>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="relative overflow-hidden pb-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFFEF9] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFFEF9] to-transparent z-10"></div>

          {/* Marquee Container */}
          <div
            ref={marqueeRef}
            className="flex gap-16 md:gap-24"
            style={{ width: 'max-content' }}
          >
            {/* First Set */}
            {collaboratorImages.map((img, i) => (
              <div key={`set1-${i}`} className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={img}
                  alt={`Collaborator ${i + 1}`}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}

            {/* Second Set (Duplicate for seamless loop) */}
            {collaboratorImages.map((img, i) => (
              <div key={`set2-${i}`} className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={img}
                  alt={`Collaborator ${i + 1}`}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborator;