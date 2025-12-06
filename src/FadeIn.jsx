import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const FadeIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  zIndex = 0,
  xIndex = 0,
  yIndex = 20,
  threshold = 0.1,
  rootMargin = "0px",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Keep observing for re-entry if needed
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xIndex, y: yIndex }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xIndex, y: yIndex }}
      transition={{ duration: duration, ease: "easeOut", delay }}
      className={`${className} relative`}
      style={{ zIndex }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;