import SPACBG from "./assets/images/SPACBG.png";
import SPACBGPhn from "./assets/images/SPACBGPhn.png";
import SPAC25LogoMin from "./assets/images/SPAC25LogoMin.png";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-ieee-darkblue relative overflow-hidden">
      <img
        src={SPACBG}
        alt="Background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <img
        src={SPACBGPhn}
        alt="Background Mobile"
        className="md:hidden absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 max-w-md mx-auto">
        <img
          src={SPAC25LogoMin}
          alt="SPAC Logo"
          className="w-242 mx-auto mb-6"
        />

        <h1 className="text-6xl font-bold text-ieee-white mb-4">404</h1>
        <p className="text-lg text-white mb-6">
          The page you are looking for doesn’t exist.
        </p>

        <a
          href="/"
          className="inline-block bg-ieee-blue text-white px-6 py-3 rounded-xl hover:bg-ieee-blue-75 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}