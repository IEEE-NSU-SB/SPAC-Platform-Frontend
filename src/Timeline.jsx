import { useEffect, useRef } from "react";
import SectionHeadingBG from "./SectionHeadingBG";

const Timeline = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    document.title = "Timeline | SPAC 2025";

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

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scheduleData = [
    {
      title: "Registration & Reporting",
      time: "08:00 - 08:30 AM",
      description: "Show your QR Code (sent-via-mail) at the booth",
    },
    {
      title: "Breakfast and Ice-Breaking",
      time: "08:30 - 09:00 AM",
      description: "Network with fellow attendees and enjoy refreshments",
    },
    {
      title: "SPAC Opening Ceremony",
      time: "09:00 - 09:30 AM",
      description: "Official welcome and introduction to SPAC 2025",
    },
    {
      title: "Keynote Speaker Session",
      time: "09:30 - 10:30 AM",
      description: "Featured industry expert presentation",
    },
    {
      title: "Panel Discussion",
      time: "10:30 - 11:30 AM",
      description: "Interactive session with professionals",
    },
    {
      title: "Lunch Break",
      time: "11:30 AM - 01:00 PM",
      description: "Networking lunch with speakers and attendees",
    },
    {
      title: "Closing Ceremony",
      time: "01:00 - 02:00 PM",
      description: "Awards and final remarks",
    },
  ];

  return (
    <>
      <div className="grid-bg min-h-screen">
        <SectionHeadingBG
          title="Event Timeline"
          subtitle="December 29, 2025 | North South University"
        />

        <div className="relative -mt-12 md:-mt-16 z-20">
          <div className="max-w-[1050px] mx-auto px-6 md:px-10 py-16 md:py-24">
            {scheduleData.map((data, index) => (
              <div
                key={index}
                className="flex group scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-6">
                  {/* Node Circle */}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-ieee-orange-75 border-2 border-white shadow-lg z-10 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-ieee-orange group-hover:shadow-xl" />

                  {/* Connecting Line (only if not the last item) */}
                  {index !== scheduleData.length - 1 && (
                    <div className="h-30 w-[2px] bg-ieee-darkblue relative mb-1 transition-all duration-300 group-hover:bg-ieee-cyan">
                      {/* Arrow Head */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2 scale-200 text-ieee-darkblue transition-colors duration-300 group-hover:text-ieee-cyan">
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
                <div className="pb-8 pt-0.5 flex-1">
                  <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:translate-x-1">
                    <h3 className="text-xl md:text-2xl font-bold text-ieee-darkblue mb-2 transition-colors duration-300 group-hover:text-ieee-blue">
                      {data.title}
                    </h3>
                    <div className="flex items-center gap-2 text-ieee-orange font-semibold mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {data.time}
                    </div>
                    {data.description && (
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {data.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;