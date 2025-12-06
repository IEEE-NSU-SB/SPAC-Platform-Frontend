import { useEffect, useState, useRef } from "react";
import Collaborator from "./Collaborator";
import Sponsors from "./Sponsors";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import Logo from "./assets/images/SPAC25LogoMin.png";
import SPACimg from "./assets/images/WhatIsSPAC.png";
import SPACBG from "./assets/images/SPACBG.png";
import SPACBGPhn from "./assets/images/SPACBGPhn.png";

const Home = () => {


  const [bgImage, setBgImage] = useState(SPACBG);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 768) {
        setBgImage(SPACBGPhn);
      } else {
        setBgImage(SPACBG);
      }
    };

    checkSize(); // initial
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const observerRef = useRef(null);

  useEffect(() => {
    document.title = "Home | SPAC 2025";

    // Intersection Observer for scroll animations
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

    // Observe all elements with scroll-animate classes
    const animatedElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale"
    );
    animatedElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className="grid-bg pb-12">
        {/* Hero Section - Formal & Elegant */}
        <div
          className="relative bottom-20 w-full md:h-[120vh] h-[90vh] flex flex-col items-center justify-center bg-fixed md:bg-bottom bg-cover bg-auto overflow-hidden"
          style={{ backgroundImage: `url(${bgImage})` }}
        >

          {/* Gradient Overlay with Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-ieee-black-75 via-ieee-black-50 to-ieee-black-75"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-ieee-black-50"></div>

          <FadeIn duration={0.3}>
            <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-7xl">
              {/* Formal Header Line */}
              {/* <div className="animate-fade-in-down animation-delay-100 mb-8 md:mb-12">
              <div className="formal-divider"></div>
            </div> */}

              {/* Logo */}
              <img
                className="w-64 md:mt-35 mt-30 md:w-[600px] lg:w-[800px] object-contain mx-auto animate-scale-in animation-delay-200 will-change-transform drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                src={Logo}
                alt="SPAC 2025 Logo"
                loading="eager"
                fetchpriority="high"
                width="700"
                height="auto"
              />

              {/* Formal Subtitle */}
              {/* <div className="animate-fade-in-up animation-delay-400 mt-8 md:mt-12 mb-4 md:mb-6">
              <p className="text-center text-ieee-white-75 uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
                29th Annual Conference
              </p>
            </div> */}

              {/* Date - Formal Typography */}
              <div className="animate-fade-in-up animation-delay-500">
                <h2 className="text-center text-white font-bold tracking-wider
                text-2xl md:text-3xl lg:text-4xl
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
                border-b-2 border-ieee-white pb-3 mb-6">
                  December 29, 2025
                </h2>
              </div>

              {/* Venue - Elegant Serif Font */}
              <div className="animate-fade-in-up animation-delay-600 mb-8 md:mb-10">
                <h3 className="text-center cinzel font-semibold tracking-widest
                text-xl md:text-2xl lg:text-3xl
                text-white
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
                relative">
                  <span className="relative z-10">North South University</span>
                  <span className="absolute inset-0 blur-sm bg-gradient-to-r from-ieee-cyan/20 via-ieee-blue/20 to-ieee-cyan/20"></span>
                </h3>
                <p className="text-center text-ieee-white-75 text-sm md:text-base mt-2 tracking-wide">
                  Dhaka, Bangladesh
                </p>
              </div>

              {/* Formal Divider */}
              {/* <div className="animate-fade-in-up animation-delay-700 my-6 md:my-8">
              <div className="formal-divider"></div>
            </div> */}

              {/* Register Button - Formal & Professional */}
              {/* <div className="animate-fade-in-up animation-delay-800">
                <Link
                  to="/registration"
                  className="group relative inline-flex items-center justify-center
                  px-10 md:px-16 lg:px-20
                  py-4 md:py-5 lg:py-6
                  text-sm md:text-base lg:text-lg
                  font-bold uppercase tracking-[0.2em]
                  text-white
                  bg-ieee-darkblue
                  border-2 border-ieee-cyan
                  overflow-hidden
                  transition-all duration-500 ease-out
                  hover:shadow-[0_0_40px_rgba(0,181,226,0.5)]
                  active:scale-95
                  will-change-transform"
                >
                   Background Gradient Effect 
                  <span className="absolute inset-0 bg-gradient-to-r from-ieee-blue via-ieee-cyan to-ieee-blue 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                  Animated Border Glow
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0,181,226,0.5), transparent)',
                      animation: 'shimmer 2s infinite',
                    }}></span>

                  Button Content
                  <span className="relative z-10 flex items-center gap-3">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Register Now
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div> */}

              {/* Bottom Formal Line */}
              {/* <div className="animate-fade-in-up animation-delay-900 mt-10 md:mt-14">
              <div className="formal-divider"></div>
              </div> */}
            </div>
          </FadeIn>
        </div>

        {/* What is SPAC? - With Scroll Animation */}
        <div className="grid md:grid-cols-2 justify-items-center items-center gap-8 mx-auto max-w-6xl md:pb-20 px-5 md:px-8 my-16 md:my-24">
          <div className="scroll-animate-left">
            <FadeIn>
              <div className="formal-divider mb-6"></div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-ieee-darkblue font-bold mb-6 tracking-tight">
                What is <span className="text-ieee-cyan">SPAC?</span>
              </h3>
            </FadeIn>
            <FadeIn>
              <p className="md:text-lg text-gray-700 leading-relaxed text-justify">
                The <strong>IEEE Student Professional Awareness Conference (SPAC)</strong> is a
                prestigious formal networking event and dinner that brings together esteemed
                professionals and allows them to engage with engineering and
                computer science students in their fields.
              </p>
              <p className="md:text-lg text-gray-700 leading-relaxed text-justify mt-4">
                SPAC is one of the three Student Professional Awareness programs
                offered by IEEE. The IEEE NSU Student Branch has successfully hosted
                this prestigious annual event consecutively for the
                previous two years. As hundreds of student branches hold SPAx
                events each year, the IEEE NSU Student Branch aims to host the event with
                unparalleled grandeur and professionalism.
              </p>
            </FadeIn>
          </div>

          <div className="scroll-animate-right w-full max-w-md">
            <div className="relative group">
              {/* Decorative Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-ieee-blue via-ieee-cyan to-ieee-blue rounded-xl opacity-20 group-hover:opacity-50 blur transition duration-500"></div>

              {/* Image Container */}
              <FadeIn>
                <div className="relative rounded-[6px] overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-105"
                    src={SPACimg}
                    alt="SPAC Event"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Goal Section - With Particles Animation */}
        <section className="relative w-full md:h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden my-16 md:my-20" style={{ marginBottom: "0" }}>
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-ieee-darkblue via-[#001a3d] to-ieee-darkblue"></div>

          {/* Particles Container */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Particles */}
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
            <div className="particle particle-7"></div>
            <div className="particle particle-8"></div>
            <div className="particle particle-9"></div>
            <div className="particle particle-10"></div>

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: `
            linear-gradient(rgba(0, 181, 226, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 181, 226, 0.3) 1px, transparent 1px)
          `,
                  backgroundSize: '50px 50px',
                  animation: 'gridMove 20s linear infinite'
                }}
              ></div>
            </div>

            {/* Glowing Orbs */}
            <div className="glow-orb glow-orb-1"></div>
            <div className="glow-orb glow-orb-2"></div>
            <div className="glow-orb glow-orb-3"></div>
          </div>

          {/* Content */}
          <div className="scroll-animate-scale relative z-10 p-8 md:p-12 lg:p-16 rounded-2xl max-w-4xl mx-5 text-center backdrop-blur-sm bg-ieee-darkblue-50 border border-ieee-cyan-25 shadow-[0_0_50px_rgba(0,181,226,0.2)]">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-wide">
              Goal of <span className="text-ieee-cyan">SPAC '25</span>
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
              To cultivate <strong className="text-white">visionary leadership</strong> and professional excellence
              among engineering students and graduates by promoting <strong className="text-white">innovation</strong>,
              ethical values, and industry-oriented competencies essential for
              future global challenges.
            </p>
          </div>
        </section>

        {/* Collaborators - With Animation */}
        <div className="scroll-animate">
          <Collaborator />
        </div>

        {/* Sponsors - With Animation */}
        <div className="my-16 md:my-20" style={{ marginTop: "0" }}>
          <Sponsors />
        </div>

        {/* Last Year SPAC - With Animation */}
        <section className="scroll-animate w-full my-16 md:my-20">
          <div className="formal-divider mb-8"></div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ieee-darkblue text-center mb-4">
            Last Year's <span className="text-ieee-cyan">SPAC</span>
          </h3>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto px-4">
            Relive the memorable moments from SPAC 2024
          </p>

          <div className="md:max-w-5xl lg:mx-auto mx-5">
            <div className="relative group">
              {/* Decorative Border for Video */}
              <div className="absolute -inset-1 bg-gradient-to-r from-ieee-blue via-ieee-cyan to-ieee-blue rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>

              {/* Video Container */}
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  src="https://api.ieeensusb.org/media_files/main_website_files/homepage/landing_video/compress.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
};

export default Home;