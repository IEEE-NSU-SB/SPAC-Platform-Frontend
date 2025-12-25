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
      title: "Participant Reporting & Registration",
      time: "8:30 AM - 9:00 AM",
      description: "Show your QR Code (sent-via-mail) at the booth",
    },
    {
      title: "Breakfast and Orientation",
      time: "9:00 AM - 9:30 AM",
      description: "Network with fellow attendees and enjoy refreshments",
    },
    {
      title: "Inaugural ceremony",
      time: "9:30 AM - 10:00 AM",
    },
    {
      title: `Harnessing Solar Energy:
      Powering a Clean and
      Sustainable Future`,
      time: "10:00 AM - 10:40 AM",
    },
    {
      title: `Creating Your Own Market: A
      Guide to Innovative
      Entrepreneurship`,
      time: "10:40 AM - 11:20 AM",
    },
    {
      title: `Sustainable Energy
      Technologies for Bangladesh’s
      Future: Opportunities,
      Challenges, and Global
      Perspectives`,
      time: "11:20 AM - 12:00 PM",
    },
    {
      title: `Engineering High
      Performance Connectivity
      (MDE & IoT) Solutions
      `,
      time: "12:00 PM - 12:40 PM",
    },
    {
      title: `Lunch And Prayer Break`,
      time: "12:40 PM - 2:00 PM",
    },
    {
      title: `Panel Discussion
“AI in the Enterprise: Hype,
Reality, and Engineering
Challenges”`,
      time: "2:00 PM - 3:20 PM",
    },
    {
      title: `The Journey Toward Localized
Hardware Manufacturing in
Bangladesh`,
      time: "3:20 PM - 4:00 PM",
    },
    {
      title: `Competition`,
      time: "4:20 PM - 5:45 PM",
    },
    {
      title: `Break and Evening Snacks`,
      time: "5:45 PM - 6:00 PM",
    },
    {
      title: `Diversity and Inclusion for
Women
Empowerment;Retention and
Advancement
`,
      time: "6:00 PM - 7:00 PM",
    },
    {
      title: `Closing Ceremony with Prize
Giving
`,
      time: "7:00 PM - 8:00 PM",
    },
    {
      title: `Cultural and Dinner
`,
      time: "8:00 PM - 9:00 PM",
    }
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
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-ieee-orange-75 border-2 border-white shadow-lg z-10 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-ieee-orange group-hover:shadow-xl" />

                  {index !== scheduleData.length - 1 && (
                    <div className="md:h-35 h-58 w-[2px] bg-ieee-darkblue relative mb-1 transition-all duration-300 group-hover:bg-ieee-cyan">
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
          {/* <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-ieee-darkblue mb-4">
                Timeline will be updated soon
              </h2>
              <p className="text-gray-600">
                Stay tuned for the official SPAC 2025 schedule.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;