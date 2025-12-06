import { useEffect, useRef, useState } from "react";
import SectionHeadingBG from "./SectionHeadingBG";

const Registration = () => {
  const observerRef = useRef(null);

  // Change this to control the registration state
  // Options: "coming-soon", "open", "closed"
  const [registrationStatus] = useState("open"); // Change this value

  useEffect(() => {
    document.title = "Registration | SPAC 2025";

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

  const handleLink = () => {
    window.location.href = "https://www.facebook.com/";
  };

  // Content based on registration status
  const getStatusContent = () => {
    switch (registrationStatus) {
      case "coming-soon":
        return {
          icon: (
            <svg className="w-24 h-24 md:w-32 md:h-32 text-ieee-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Registration Opening Soon!",
          message: "Registration for IEEE SPAC 2025 is not open yet. Stay tuned for updates!",
          color: "ieee-cyan",
          showNotifyForm: true,
        };
      case "open":
        return {
          icon: (
            <svg className="w-24 h-24 md:w-32 md:h-32 text-ieee-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Registration is Open!",
          message: "Secure your spot at IEEE SPAC 2025. Fill out the form below to register.",
          color: "ieee-green",
          showNotifyForm: false,
        };
      case "closed":
        return {
          icon: (
            <svg className="w-24 h-24 md:w-32 md:h-32 text-ieee-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Registration Closed",
          message: "Registration for IEEE SPAC 2025 has ended. Thank you for your interest!",
          color: "ieee-red",
          showNotifyForm: false,
        };
      default:
        return getStatusContent.call(this, "coming-soon");
    }
  };

  const content = getStatusContent();

  return (
    <div className="min-h-screen grid-bg">
      <SectionHeadingBG
        title="Registration"
        subtitle="Secure Your Spot at SPAC 2025"
      />

      <div className="relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-12">
            {/* Animated Icon */}
            <div className="scroll-animate flex justify-center">
              <div className="relative">
                {/* Decorative Ring */}
                <div className={`absolute inset-0 -m-4 rounded-full border-4 border-dashed border-${content.color} animate-spin-slow opacity-30`}></div>

                <div className="relative">
                  {content.icon}
                </div>
              </div>
            </div>

            {/* Message Card */}
            <div className="scroll-animate animation-delay-200">
              <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto border-t-4 border-${content.color}`}>

                <h3 className={`text-2xl md:text-3xl font-bold text-${content.color} mb-4`}>
                  {content.title}
                </h3>

                <p className="text-gray-600 text-lg mb-8">
                  {content.message}
                </p>

                {/* Registration Form - Only when Open */}
                {registrationStatus === "open" && (
                  <div className="bg-gradient-to-r from-ieee-blue-15 to-ieee-cyan-15 rounded-xl p-6 mb-8">
                    <button
                      onClick={handleLink}
                      className="w-full px-6 py-4 bg-gradient-to-r from-ieee-blue to-ieee-cyan text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      Register Now
                    </button>
                  </div>
                )}

                {/* Important Dates */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-ieee-orange-15 flex items-center justify-center">
                        <svg className="w-6 h-6 text-ieee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-ieee-darkblue mb-1 text-sm">Event Date</h4>
                      <p className="text-gray-600 text-sm">December 29, 2025</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-ieee-cyan-15 flex items-center justify-center">
                        <svg className="w-6 h-6 text-ieee-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-ieee-darkblue mb-1 text-sm">Venue</h4>
                      <p className="text-gray-600 text-sm">North South University</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-ieee-blue-15 flex items-center justify-center">
                        <svg className="w-6 h-6 text-ieee-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-ieee-darkblue mb-1 text-sm">Capacity</h4>
                      <p className="text-gray-600 text-sm">300+ Attendees</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Stats */}
            <div className="scroll-animate animation-delay-400 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-ieee-blue mb-2">300+</div>
                <div className="text-gray-600 text-sm">Expected Attendees</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-ieee-cyan mb-2">20+</div>
                <div className="text-gray-600 text-sm">Industry Speakers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-ieee-orange mb-2">1 Day</div>
                <div className="text-gray-600 text-sm">Networking Event</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add slow spin animation */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Registration;