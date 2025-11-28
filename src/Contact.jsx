import SectionHeadingBG from "./SectionHeadingBG";
import { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    document.title = "Contact | SPAC 2025";
  }, []);

  const scheduleData = [
    {
      title: "Md. Shakib Shahariar Junayed",
      image: "src/assets/images/speaker1.png",
      position: "Secretary, IEEE NSU SB",
      description: "Contact: 0123546798",
    },
    {
      title: "Md. Rakibul Islam",
      image: "src/assets/images/speaker1.png",
      position: "Vice Chairperson, IEEE NSU SB",
      description: "Contact: 0123546798",
    },
    {
      title: "Md. Nashrat",
      image: "src/assets/images/speaker1.png",
      position: "Chairperson, IEEE NSU SB",
      description: "Contact: 0123546798",
    },
  ];

  return (
    <>
      <div className="grid-bg">
        <SectionHeadingBG />
        <div className="max-w-5xl md:mx-auto mt-20 md:mt-30 z-10 relative">
          <h2 className='text-white text-center md:text-left text-[24px] md:text-[30px] font-bold'>
            Contact
          </h2>
        </div>
        <div className="max-w-[1050px] mx-auto md:mt-55 pl-10 mt-25 md:pb-30 pb-20">
          {scheduleData.map((data, index) => (
            <div key={index} className="flex group items-center mt-10">
              {/* Timeline Column suru */}
              <div className="flex flex-col items-center mr-6">
                {/* Node Circle */}
                <div className="w-1 h-32 rounded-full bg-ieee-darkblue shadow-sm z-10 flex-shrink-0" />
              </div>
              <img
                src={data.image}
                alt={data.name}
                className="md:w-[100px] md:h-[100px] object-cover rounded-full mr-6"
              />
              {/* Content Column */}
              <div className="pb-6">
                <h3 className="text-xl font-bold text-[#002855] mb-1">
                  {data.title}
                </h3>
                <div className="text-gray-800 font-medium mb-1">
                  {data.position}
                </div>
                {data.description && (
                  <p className="text-gray-700 text-sm">{data.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;

