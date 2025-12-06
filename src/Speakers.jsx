import { useEffect, useRef } from "react";
import SectionHeadingBG from "./SectionHeadingBG";

const Speakers = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    document.title = "Speakers | SPAC 2025";

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

    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const speakersData = [
    {
      name: "Dr. Nabeel Mohammad",
      title: "Associate Professor",
      image: "src/assets/images/speaker1.png",
      description: `Dr. Nabeel Mohammad is a distinguished academic and researcher with a Bachelor's degree in Computer Science from Monash University, Australia. He began his career as a Software Developer at Editure Ltd., before transitioning into academia to pursue his PhD at Monash University. His doctoral research focused on unsupervised image feature extraction and its applications in content-based image retrieval.
Dr. Nabeel's current research interests span Computer Vision and Natural Language Processing, with additional expertise in Artificial Intelligence, Robotics, and Signal & Image Processing. He is deeply passionate about industry–academia collaboration and has successfully partnered with organizations such as Apurba Technologies, HeadBlocks, Giga Tech Ltd., and others.
He also leads the Apurba–NSU R&D Lab, which has made significant contributions to AI projects in collaboration with Apurba Technologies—further demonstrating his commitment to bridging the gap between academic research and real-world applications.`
    },
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Technology Officer",
      image: "src/assets/images/speaker2.png",
      description: `Dr. Sarah Johnson is a renowned technology leader with a Bachelor's degree in Computer Science from Monash University, Australia. He began his career as a Software Developer at Editure Ltd., before transitioning into academia to pursue his PhD at Monash University. His doctoral research focused on unsupervised image feature extraction and its applications in content-based image retrieval.
Dr. Sarah's current research interests span Computer Vision and Natural Language Processing, with additional expertise in Artificial Intelligence, Robotics, and Signal & Image Processing. He is deeply passionate about industry–academia collaboration and has successfully partnered with organizations such as Apurba Technologies, HeadBlocks, Giga Tech Ltd., and others.
He also leads the Apurba–NSU R&D Lab, which has made significant contributions to AI projects in collaboration with Apurba Technologies—further demonstrating his commitment to bridging the gap between academic research and real-world applications.`
    },
  ];

  // Helper function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen grid-bg">
      <SectionHeadingBG
        title="SPAC 2025 Speakers"
        subtitle="Meet Our Distinguished Speakers"
      />

      <div className="relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="space-y-10 md:space-y-12">
            {speakersData.map((speaker, index) => (
              <div
                key={index}
                className="scroll-animate bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Placeholder */}
                  <div className="md:w-1/3 relative bg-gradient-to-br from-ieee-blue to-ieee-cyan p-1">
                    <div className="relative aspect-square md:aspect-auto md:h-full bg-ieee-darkblue flex items-center justify-center overflow-hidden group">
                      {/* Initials */}
                      <div className="text-6xl md:text-8xl font-bold text-white opacity-20">
                        {getInitials(speaker.name)}
                      </div>

                      {/* Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-24 h-24 md:w-32 md:h-32 text-white opacity-50 group-hover:opacity-70 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-ieee-darkblue mb-2">
                          {speaker.name}
                        </h3>
                        <p className="text-lg font-semibold text-ieee-cyan mb-1">
                          {speaker.title}
                        </p>
                      </div>
                    </div>

                    {/* <div className="formal-divider my-6"></div> */}

                    <p className="text-gray-700 text-base leading-relaxed text-justify whitespace-pre-line">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;