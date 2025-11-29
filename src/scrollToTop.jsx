import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const duration = 1000; // fast scroll
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      window.scrollTo(0, startY * (1 - ease));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        className="fixed bottom-6 right-6 p-3 bg-ieee-darkblue text-ieee-white rounded-full shadow-lg z-50 hover:bg-ieee-darkblue transition-opacity duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
