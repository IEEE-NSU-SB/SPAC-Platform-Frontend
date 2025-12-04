import SectionHeadingBG from "./SectionHeadingBG";
import { useEffect } from "react";
import junaiyed_vaiya from "./assets/junaiyed_vaiya.jpg";
import FadeIn from "./FadeIn";

const Ambassadors = () => {
  useEffect(() => {
    document.title = "Ambassadors | SPAC 2025";
  }, []);

  const ambassadors = [
    {
      name: "Md. Shakib Shahariar Junayed",
      image: junaiyed_vaiya,
    },
    {
      name: "Ashraful Islam Shohan",
      image: junaiyed_vaiya,
    },
    {
      name: "Arman Mokammel",
      image: junaiyed_vaiya,
    },
    {
      name: "Rahiq Ahmed",
      image: junaiyed_vaiya,
    },
    {
      name: "Rahiq Ahmed",
      image: junaiyed_vaiya,
    },
  ];

  return (
    <>
      <div className="grid-bg">
        <SectionHeadingBG />
        <div className="max-w-5xl md:mx-auto mt-10 md:mt-25 z-10 relative">
          <FadeIn>
            <h2 className="text-white text-center md:text-left text-[24px] md:text-[30px] font-bold">
              SPAC 2025 Ambassadors
            </h2>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="grid gap-16 grid-cols-1 md:grid-cols-3 max-w-[1020px] mx-auto md:mt-41 mt-25 md:pb-30 pb-20">
            {ambassadors.map((ambassador, index) => (
              <>
                {/* <div
                key={index}
                className="w-[90%] mx-auto md:w-[295px] h-[360px] overflow-hidden shadow-[0_8px_10px_0_rgba(0,0,0,0.3)]
 rounded-[7px] relative z-20"
              > */}
                <div
                  key={index}
                  className="w-[90%] mx-auto md:w-[295px] h-[360px] overflow-hidden shadow-[0_8px_10px_0_rgba(0,0,0,0.3)]
rounded-[7px] relative z-20 transition-all duration-300 ease-out hover:transform hover:shadow-[0_10px_15px_0_rgba(0,0,0,0.3)]"
                >
                  <img
                    src={ambassador.image}
                    alt={ambassador.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300 ease-in-out"
                  />
                  {/* image er nicher text  */}
                  <div className="absolute bottom-0 w-full pl-4 py-3 bg-gradient-to-r from-[#E5F5FF] to-[#D3D6FF] rounded-tr-[40px]">
                    <h1 className="text-black text-[18px] font-bold">
                      {ambassador.name}
                    </h1>
                    <p className="text-[14px]">North South University</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Ambassadors;
