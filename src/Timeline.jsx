import SectionHeadingBG from "./SectionHeadingBG";
import { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    document.title = "Timeline | SPAC 2025";
  }, []);

  const scheduleData = [
    {
      title: "Reporting",
      time: "08:00 - 08:30 AM",
      description: "Show your QR Code (sent-via-mail) at the booth",
    },
    {
      title: "Breakfast and Ice-Breaking",
      time: "08:30 - 09:00 AM",
      description: null,
    },
    {
      title: "SPAC Opening Ceremony",
      time: "09:00 - 09:30 AM",
      description: null,
    },
    {
      title: "SPAC Opening Ceremony",
      time: "09:00 - 09:30 AM",
      description: null,
    },
    {
      title: "SPAC Opening Ceremony",
      time: "09:00 - 09:30 AM",
      description: null,
    },
  ];

  return (
    <>
      <div className="grid-bg">
        <SectionHeadingBG />
        <div className="max-w-5xl mx-auto mt-30 z-10 relative">
          <h2 className="text-white text-[30px] font-bold">
            SPAC 2025 Event Timeline
          </h2>
        </div>
        <div className="max-w-[1050px] mx-auto md:mt-55 pl-10 mt-25 md:pb-30 pb-20">
          {scheduleData.map((data, index) => (
            <div key={index} className="flex group">
              {/* Timeline Column suru */}
              <div className="flex flex-col items-center mr-6">
                {/* Node Circle */}
                <div className="w-8 h-8 rounded-full bg-[#FF9D00] shadow-sm z-10 flex-shrink-0" />
                {/* Connecting Line (only if not the last item) */}
                {index !== scheduleData.length - 1 && (
                  <div className="h-23 w-px  bg-black relative mb-1">
                    {/* Arrow Head */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="pb-6 pt-0.5">
                <h3 className="text-xl font-bold text-[#002855] mb-1">
                  {data.title}
                </h3>
                <div className="text-gray-800 font-medium mb-1">
                  {data.time}
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

