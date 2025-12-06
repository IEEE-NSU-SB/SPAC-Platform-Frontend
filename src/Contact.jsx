import { useEffect, useRef } from "react";
import SectionHeadingBG from "./SectionHeadingBG";

const Contact = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    document.title = "Contact | SPAC 2025";

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

  const contactData = [
    {
      name: "Md. Shakib Shahariar Junayed",
      position: "Secretary, IEEE NSU SB",
      email: "secretary@ieeensusb.org",
      phone: "+880 1234-567890",
    },
    {
      name: "Md. Rakibul Islam",
      position: "Vice Chairperson, IEEE NSU SB",
      email: "vice.chair@ieeensusb.org",
      phone: "+880 1234-567891",
    },
    {
      name: "Md. Nafiur Rahman",
      position: "Chairperson, IEEE NSU SB",
      email: "chair@ieeensusb.org",
      phone: "+880 1234-567892",
    },
  ];

  return (
    <div className="min-h-screen grid-bg">
      <SectionHeadingBG
        title="Contact Us"
        subtitle="Get In Touch With Our Team"
      />

      <div className="relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactData.map((contact, index) => (
              <div
                key={index}
                className="scroll-animate bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-ieee-cyan group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ieee-blue to-ieee-cyan flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Contact Details */}
                <h3 className="text-xl font-bold text-ieee-darkblue mb-2 group-hover:text-ieee-blue transition-colors">
                  {contact.name}
                </h3>
                <p className="text-ieee-cyan font-semibold mb-4 text-sm">
                  {contact.position}
                </p>

                <div className="space-y-3">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ieee-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-ieee-blue transition-colors text-sm break-all">
                      {contact.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-ieee-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${contact.phone}`} className="text-gray-600 hover:text-ieee-blue transition-colors text-sm">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="scroll-animate bg-white rounded-2xl p-8 md:p-12 shadow-xl" style={{ animationDelay: '0.4s' }}>
            <div className="max-w-3xl mx-auto text-center">

              <h3 className="text-2xl md:text-3xl font-bold text-ieee-darkblue mb-4">
                IEEE NSU Student Branch
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                For general inquiries about SPAC 2025, please reach out to us
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-ieee-blue-15 flex items-center justify-center">
                      <svg className="w-6 h-6 text-ieee-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-ieee-darkblue mb-1">Address</h4>
                    <p className="text-gray-600 text-sm">
                      North South University<br />
                      Bashundhara, Dhaka-1229<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-ieee-cyan-15 flex items-center justify-center">
                      <svg className="w-6 h-6 text-ieee-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-ieee-darkblue mb-1">Follow Us</h4>
                    <div className="flex gap-3">
                      <a href="#" className="text-ieee-blue hover:text-ieee-cyan transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="#" className="text-ieee-blue hover:text-ieee-cyan transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;