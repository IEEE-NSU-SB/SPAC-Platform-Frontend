export default function SpacLoader() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#001933]">

      {/* ========================== */}
      {/* BACKGROUND ANIMATED LAYERS */}
      {/* ========================== */}

      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ieee-darkblue via-[#001a3d] to-[#000F26]" />

      {/* Animated cyber grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 181, 226, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 181, 226, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          animation: "gridMove 22s linear infinite",
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`particle-${i}`}
          style={{
            position: "absolute",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "rgba(0, 181, 226, 0.8)",
            filter: "blur(2px)",
            animation: `floatParticle ${6 + i}s ease-in-out infinite`,
            top: `${20 + i * 6}%`,
            left: `${10 + (i * 7) % 80}%`,
          }}
        />
      ))}

      {/* Cyan glow orbs */}
      <div className="glow-orb -left-10 -top-10"></div>
      <div className="glow-orb right-0 bottom-0"></div>

      {/* ================= */}
      {/* LOADER MAIN CARD */}
      {/* ================= */}

      <div className="relative z-10 flex flex-col items-center gap-6 select-none">

        {/* SPAC Logo with glow + pulse */}
        <div className="flex items-center justify-center p-4">
          <img
            src="SPAC25LogoMin.png"
            alt="SPAC 2025"
            className="logoPulse w-[240px] md:w-[480px] drop-shadow-[0_10px_40px_rgba(0,180,226,0.45)]"
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-sky-300 text-xl md:text-2xl tracking-[0.25em] font-semibold">
            LOADING • SPAC 2025
          </h2>
        </div>

        {/* Floating dots */}
        <div className="flex items-center gap-3 mt-2">
          <span className="w-3 h-3 rounded-full bg-ieee-cyan animate-bounce" />
          <span
            className="w-3 h-3 rounded-full bg-ieee-cyan/75 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="w-3 h-3 rounded-full bg-ieee-cyan/50 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>

      {/* ================= */}
      {/* STYLE DEFINITIONS */}
      {/* ================= */}

      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }

        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.7; }
          50% { transform: translateY(-25px) translateX(10px); opacity: 1; }
        }

        .glow-orb {
          position: absolute;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(0,181,226,0.35), transparent 70%);
          filter: blur(40px);
          animation: orbFloat 10s ease-in-out infinite alternate;
        }

        @keyframes orbFloat {
          from { transform: translateY(0px) translateX(0px); }
          to { transform: translateY(-20px) translateX(20px); }
        }

        /* SPAC Logo Pulse */
        .logoPulse {
          animation: logoPulse 2.4s ease-in-out infinite;
        }

        @keyframes logoPulse {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(0,181,226,0.3));
            opacity: 0.95;
          }
          50% {
            transform: scale(1.04);
            filter: drop-shadow(0 0 35px rgba(0,181,226,0.55));
            opacity: 1;
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(0,181,226,0.3));
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
}
