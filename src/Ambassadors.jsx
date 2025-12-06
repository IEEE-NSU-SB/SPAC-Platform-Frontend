import { useEffect, useRef } from "react";
import SectionHeadingBG from "./SectionHeadingBG";

const Ambassadors = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    document.title = "Ambassadors | SPAC 2025";

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

  const ambassadors = [
    {
      name: "Md. Shakib Shahariar Junayed",
      university: "North South University",
      department: "Computer Science & Engineering",
      image: "junaiyed_vaiya.jpg",
    },
    {
      name: "Ashraful Islam Shohan",
      university: "North South University",
      department: "Electrical & Electronic Engineering",
      image: "shohan.jpg",
    },
    {
      name: "Arman Mokammel",
      university: "North South University",
      department: "Computer Science & Engineering",
      image: "arman.jpg",
    },
    {
      name: "Rahiq Ahmed",
      university: "North South University",
      department: "Computer Science & Engineering",
      image: "rahiq.jpg",
    },
    {
      name: "Tasnia Rahman",
      university: "North South University",
      department: "Electrical & Electronic Engineering",
      image: "tasnia.jpg",
    },
    {
      name: "Fahim Hassan",
      university: "North South University",
      department: "Computer Science & Engineering",
      image: "fahim.jpg",
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
        title="SPAC 2025 Ambassadors"
        subtitle="Student Leaders Driving Innovation"
      />

      <div className="relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ambassadors.map((ambassador, index) => (
              <div
                key={index}
                className="scroll-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-ieee-blue via-ieee-cyan to-ieee-blue overflow-hidden">
                    {/* Initials Background */}
                    <div className="absolute inset-0 flex items-center justify-center bg-ieee-darkblue">
                      <div className="text-8xl font-bold text-white opacity-10">
                        {getInitials(ambassador.name)}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-32 h-32 text-white opacity-40 group-hover:opacity-60 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ieee-darkblue via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Info Card */}
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold text-ieee-darkblue mb-2 group-hover:text-ieee-blue transition-colors">
                      {ambassador.name}
                    </h3>
                    <p className="text-sm font-semibold text-ieee-cyan mb-1">
                      {ambassador.department}
                    </p>
                    <p className="text-sm text-gray-600">
                      {ambassador.university}
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

export default Ambassadors;