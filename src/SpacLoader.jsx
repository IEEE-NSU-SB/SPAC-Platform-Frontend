
// Usage:
// 1) Paste this file into your React project (e.g. src/components/Loader.jsx).
// 2) Install Tailwind CSS or change classes to your CSS framework.
// 3) Import and show <SpacLoader /> while your app is loading.

export default function SpacLoader() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#002855] via-[#002855] to-[#002855] p-6">
      {/* subtle animated network backdrop */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-30"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
        aria-hidden="true"
      >
        <g fill="none" stroke="#0ea5e9" strokeOpacity="0.18">
          <path d="M100 600 L400 420 L720 540 L1050 350 L1420 520 L1700 420" />
          <path d="M40 720 L320 520 L650 640 L980 430 L1300 580 L1820 480" />
        </g>
      </svg>

      {/* centered card to keep the logo centered on mobile/desktop */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 md:gap-10">
            {/* logo */}
            <div className="flex items-center justify-center p-2 md:p-4">
              <img
                src="SPAC25Logo.png"
                alt="SPAC logo"
                className="logoPulse w-[220px] md:w-[520px] max-w-full h-auto"
                style={{ willChange: 'transform, filter' }}
              />
            </div>

            {/* loader text / ring on larger screens */}
            <div className="hidden md:flex flex-col items-start">
              <div className="mt-1 text-sky-300 text-sm uppercase tracking-widest">Student · Professional · Awareness · Conference</div>
            </div>
          </div>
        </div>

        {/* subtle progress dots for extra motion (mobile friendly) */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0s' }} />
          <span className="w-3 h-3 rounded-full bg-sky-400/80 animate-bounce" style={{ animationDelay: '0.15s' }} />
          <span className="w-3 h-3 rounded-full bg-sky-400/60 animate-bounce" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>

      {/* component-scoped styles: pulse effect + responsive tweaks */}
      <style>{`
        .logoPulse {
          animation: pulseLogo 1.6s ease-in-out infinite;
        }

        @keyframes pulseLogo {
          0% {
            transform: translateZ(0) scale(1);
            filter: drop-shadow(0 0 0 rgba(14,165,233,0));
            opacity: 0.98;
          }
          45% {
            transform: translateZ(0) scale(1.035) translateY(-3px);
            filter: drop-shadow(0 10px 30px rgba(2,6,23,0.45)) drop-shadow(0 0 18px rgba(14,165,233,0.06));
            opacity: 1;
          }
          100% {
            transform: translateZ(0) scale(1);
            filter: drop-shadow(0 0 0 rgba(14,165,233,0));
            opacity: 0.98;
          }
        }

        /* responsive adjustments to center properly on tall/short screens */
        @media (max-width: 640px) {
          .logoPulse { width: 240px !important; }
        }

        /* reduce svg backdrop intensity on small screens */
        @media (max-width: 640px) {
          svg { opacity: 0.18; }
        }
      `}</style>
    </div>
  );
}
