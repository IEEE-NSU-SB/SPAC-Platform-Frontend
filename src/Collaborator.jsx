import ieee_logo from "./assets/collaborator-logo/ieee-logo.png";
import ieee_logo_bd from "./assets/collaborator-logo/ieee-bd-logo.png";
import nsu_logo from "./assets/collaborator-logo/nsu-logo.png";
import nsu_yf_logo from "./assets/collaborator-logo/ieee-yf.png";
import ieee_nsu_sb from "./assets/collaborator-logo/ieee-nsu-sb-logo.png";

const Collaborator = () => {
  const collaboratorImages = [
    ieee_logo,
    ieee_logo_bd,
    nsu_logo,
    nsu_yf_logo,
    ieee_nsu_sb,
  ];

  const styles = `
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .marquee-wrapper {
      overflow: hidden;
      width: 100%;
      position: relative;
    }

    .marquee-group {
      display: flex;
      width: max-content;
      animation: marquee 15s linear infinite;
    }

    .marquee-inner {
      display: flex;
      gap: 35px;
    }

    .logo-item img {
      height: 80px;
      width: 200px;
      object-fit: contain;
    }
  `;

  return (
    <div className="w-full bg-white py-8">
      <style>{styles}</style>
      <h2 className="text-2xl md:text-4xl text-[#002855] pb-14 font-bold text-center">Collaborators</h2>

      <div className="marquee-wrapper">
        <div className="marquee-group">
          {/* First Row */}
          <div className="marquee-inner">
            {collaboratorImages.map((img, i) => (
              <div key={i} className="logo-item">
                <img src={img} alt="logo" />
              </div>
            ))}
          </div>

          {/* Duplicate Row */}
          <div className="marquee-inner">
            {collaboratorImages.map((img, i) => (
              <div key={`dup-${i}`} className="logo-item">
                <img src={img} alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
