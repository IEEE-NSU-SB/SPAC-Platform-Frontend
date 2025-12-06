import { useEffect, useRef } from "react";
import SectionHeadingBG from "./SectionHeadingBG";

const Ambassadors = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    document.title = "Ambassadors | SPAC 2025";

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const ambassadors = [
    {
      name: "Md. Shakib Shahariar Junayed",
      university: "North South University",
      department: "Computer Science & Engineering",
      image: "junaiyed_vaiya.jpg",
    },
    {
      name: "Ashraful Islam Shohan",
      university: "North South University",
      department: "Electrical & Electronic Engineering",
      image: "shohan.jpg",
    },
    {
      name: "Arman Mokammel",
      university: "North South University",
      department: "Computer Science & Engineering",
      image: "arman.jpg",
    },
    {
      name: "Rahiq Ahmed",
      university: "North South University",
      department: "Computer Science & Engineering",
      image: "rahiq.jpg",
    },
    {
      name: "Tasnia Rahman",
      university: "North South University",
      department: "Electrical & Electronic Engineering",
      image: "tasnia.jpg",
    },
    {
      name: "Fahim Hassan",
      university: "North South University",
      department: "Computer Science & Engineering",
      image: "fahim.jpg",
    },
  ];

  // Helper function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Get unique gradient for each card
  const getGradient = (index) => {
    const gradients = [
      'from-ieee-blue via-ieee-cyan to-ieee-teal',
      'from-ieee-orange via-ieee-darkyellow to-ieee-yellow',
      'from-ieee-purple via-ieee-darkpurple to-ieee-blue',
      'from-ieee-green via-ieee-brightgreen to-ieee-olivegreen',
      'from-ieee-red via-ieee-darkred to-ieee-orange',
      'from-ieee-cyan via-ieee-blue to-ieee-darkblue',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="min-h-screen grid-bg">
      <SectionHeadingBG
        title="SPAC 2025 Ambassadors"
        subtitle="Student Leaders Driving Innovation"
      />

      <div className="relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ambassadors.map((ambassador, index) => (
              <div
                key={index}
                className="scroll-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-20 z-10">
                    <svg viewBox="0 0 100 100" className="text-ieee-orange">
                      <circle cx="100" cy="0" r="60" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}></div>

                  {/* Image Container with Perfect Sizing */}
                  <div className="relative w-full h-80 md:h-96 overflow-hidden">
                    {/* Main Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)}`}>
                      {/* Animated Pattern Overlay */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`
                      }}></div>
                    </div>

                    {/* Large Initials Background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl md:text-9xl font-black text-white opacity-5 leading-none transform group-hover:scale-110 transition-transform duration-700">
                        {getInitials(ambassador.name)}
                      </div>
                    </div>

                    {/* Icon Container - Perfectly Centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Outer Ring */}
                        <div className="absolute inset-0 w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white/30 animate-pulse"></div>

                        {/* Icon Background Circle */}
                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                          <svg className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Gradient Fade */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* Floating Badge */}
                    {/* <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-ieee-green animate-pulse"></div>
                        <span className="text-xs font-bold text-ieee-darkblue">Ambassador</span>
                      </div>
                    </div> */}
                  </div>

                  {/* Info Section with Perfect Spacing */}
                  <div className="relative p-6">
                    {/* Top Border Accent */}
                    <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${getGradient(index)} rounded-full transform -translate-y-1/2`}></div>

                    {/* Name with Icon */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getGradient(index)} flex items-center justify-center shadow-md transform group-hover:rotate-6 transition-transform duration-300`}>
                          <span className="text-white font-bold text-sm">
                            {getInitials(ambassador.name)}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-ieee-darkblue leading-tight group-hover:text-ieee-blue transition-colors duration-300">
                          {ambassador.name}
                        </h3>
                      </div>
                    </div>

                    {/* Department with Icon */}
                    <div className="flex items-start gap-2 mb-2">
                      <svg className="w-4 h-4 text-ieee-cyan mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-sm font-semibold text-ieee-cyan leading-tight">
                        {ambassador.department}
                      </p>
                    </div>

                    {/* University with Icon */}
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm text-gray-600 leading-tight">
                        {ambassador.university}
                      </p>
                    </div>

                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassadors;