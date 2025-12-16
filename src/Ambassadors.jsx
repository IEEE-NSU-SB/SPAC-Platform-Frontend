import { useEffect, useRef } from "react";
import SectionHeadingBG from "./SectionHeadingBG";
import amb1 from "./assets/ambassador/amb1.jpg";
import amb2 from "./assets/ambassador/amb2.jpg";
import amb3 from "./assets/ambassador/amb3.jpeg";
import amb4 from "./assets/ambassador/amb4.jpg";
import amb5 from "./assets/ambassador/amb5.jpg";
import amb6 from "./assets/ambassador/amb6.jpg";
import amb7 from "./assets/ambassador/amb7.jpg";
import amb8 from "./assets/ambassador/amb8.jpg";
import amb9 from "./assets/ambassador/amb9.jpg";
import amb10 from "./assets/ambassador/amb10.jpg";
import amb11 from "./assets/ambassador/amb11.jpg";
import amb12 from "./assets/ambassador/amb12.jpg";
import amb13 from "./assets/ambassador/amb13.jpg";
import amb14 from "./assets/ambassador/amb14.jpg";
import amb15 from "./assets/ambassador/amb15.jpg";
import amb16 from "./assets/ambassador/amb16.jpeg";
import amb17 from "./assets/ambassador/amb17.jpg";
import amb18 from "./assets/ambassador/amb18.jpg";
import amb19 from "./assets/ambassador/amb19.png";
import amb20 from "./assets/ambassador/amb20.jpg";
import amb21 from "./assets/ambassador/amb21.jpg";
import amb22 from "./assets/ambassador/amb22.jpg";
import amb23 from "./assets/ambassador/amb23.jpg";
import amb24 from "./assets/ambassador/amb24.jpg";
import amb25 from "./assets/ambassador/amb25.jpg";
import amb26 from "./assets/ambassador/amb26.jpg";
import amb27 from "./assets/ambassador/amb27.jpeg";
import amb28 from "./assets/ambassador/amb28.jpeg";
import amb29 from "./assets/ambassador/amb29.jpg";
import amb30 from "./assets/ambassador/amb30.jpg";
import amb31 from "./assets/ambassador/amb31.jpeg";
import amb32 from "./assets/ambassador/amb32.jpg";
import amb33 from "./assets/ambassador/amb33.jpg";


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
    { name: "Nuren Tasnim Risha", university: "American International University - Bangladesh", image: amb1 },
    { name: "MD. Nahiduzzaman", university: "American International University - Bangladesh", image: amb2 },
    { name: "Sanjida Islam Shaila", university: "Ahsanullah University of Science and Technology", image: amb3 },
    { name: "SADAB BIN ZAFAR", university: "Ahsanullah University of Science and Technology", image: amb4 },
    { name: "Jannatul masruk Mukta", university: "Bangladesh University of Business and Technology", image: amb5 },
    { name: "Md. Sadik Mahmud Adive", university: "Bangladesh University of Business and Technology", image: amb6 },
    { name: "Pulak Bhowmik", university: "Chittagong University of Engineering and Technology", image: amb7 },
    { name: "Shah Mohammad Tahsin", university: "Chittagong University of Engineering and Technology", image: amb8 },
    { name: "Arman Hossain", university: "Daffodil International University", image: amb9 },
    { name: "Tanvir Mahamud", university: "Daffodil International University", image: amb10 },
    { name: "Anmona Khan", university: "Dhaka University", image: amb11 },
    { name: "Anika Tabassum Nafisa", university: "East West University", image: amb12 },
    { name: "MD. SHAKIB AL HASAN", university: "East West University", image: amb13 },
    { name: "Md. Abu Rayhan Imran", university: "GREEN UNIVERSITY", image: amb14 },
    { name: "Shahadat Hosen Nishan", university: "GREEN UNIVERSITY", image: amb15 },
    { name: "Mohammad Asaduzzaman", university: "International Islamic University Chittagong", image: amb16 },
    { name: "Masud Talukder Sakil", university: "International Islamic University Chittagong", image: amb17 },
    { name: "Sameer Amin", university: "Independent University", image: amb18 },
    { name: "Rohit Kamble", university: "Jain Institute of Technology (Maharastra, India)", image: amb19 },
    { name: "Vaishnavi Padmakar Kurve", university: "Jain Institute of Technology (Maharastra, India)", image: amb20 },
    { name: "Iftiar Rahman Emon", university: "Jashore University of Sciene and Technology", image: amb21 },
    { name: "Masud Rana", university: "Jashore University of Sciene and Technology", image: amb22 },
    { name: "Muntasir Mohammad", university: "MANARAT INTERNATIONAL UNIVERSITY", image: amb23 },
    { name: "Susmoy Barua", university: "Premier University", image: amb24 },
    { name: "Sawrab Sarker", university: "Southeast University", image: amb25 },
    { name: "Aflatul Kawsar", university: "Stamford University", image: amb26 },
    { name: "Nusrat Jahan", university: "Stamford University", image: amb27 },
    { name: "Yeasir Ramim", university: "United International University", image: amb28 },
    { name: "Md Ashfaqur Rahman", university: "United International University", image: amb29 },
    { name: "Mahir Rahman", university: "University of Asia Pacific", image: amb30 },
    { name: "Golam Moursalin", university: "North South University", image: amb31 },
    { name: "Md REDWAN ISLAM", university: "North South University", image: amb32 },
    { name: "Raisa Juairia", university: "North South University", image: amb33 }
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

  // Get unique gradient for each card
  const getGradient = (index) => {
    const gradients = [
      'from-ieee-blue via-ieee-cyan to-ieee-teal',
      'from-ieee-orange via-ieee-darkyellow to-ieee-yellow',
      'from-ieee-purple via-ieee-darkpurple to-ieee-blue',
      'from-ieee-green via-ieee-brightgreen to-ieee-olivegreen',
      'from-ieee-red via-ieee-darkred to-ieee-orange',
      'from-ieee-cyan via-ieee-blue to-ieee-darkblue',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="min-h-screen grid-bg">
      <SectionHeadingBG
        title="SPAC 2025 Ambassadors"
        subtitle="Student Leaders Driving Innovation"
      />

      <div className="relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ambassadors.map((ambassador, index) => (
              <div
                key={index}
                className="scroll-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-[6px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">

                  {/* Image Container with Perfect Sizing */}
                  <div className="relative w-full h-80 md:h-96 overflow-hidden">
                    <img
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="object-cover w-full h-full"
                    />
                    {/* Floating Badge */}
                    {/* <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-ieee-green animate-pulse"></div>
                        <span className="text-xs font-bold text-ieee-darkblue">Ambassador</span>
                      </div>
                    </div> */}
                  </div>

                  {/* Info Section with Perfect Spacing */}
                  <div className="relative p-6">
                    {/* Name with Icon */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-ieee-darkblue leading-tight group-hover:text-ieee-blue transition-colors duration-300">
                          {ambassador.name}
                        </h3>
                      </div>
                    </div>

                    {/* University with Icon */}
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm text-gray-600 leading-tight h-10">
                        {ambassador.university}
                      </p>
                    </div>

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