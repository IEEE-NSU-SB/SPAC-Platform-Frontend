import { useEffect } from "react";
import Collaborator from "./Collaborator";
import Sponsors from "./Sponsors";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

const Home = () => {
  useEffect(() => {
    document.title = "Home | SPAC 2025";
  }, []);

  return (
    <>
      <div className="grid-bg pb-12">
        {/* Hero Section */}
          <div
            className="relative bottom-20 w-full md:h-[120vh] h-[80vh] flex flex-col items-center justify-center bg-fixed md:bg-bottom bg-cover"
            style={{ backgroundImage: "url('SPACBG.png')" }}
            >
            <FadeIn>
            <img
              className="max-md:w-80 md:w-280 object-cover mx-auto mt-50"
              src="SPAC25LogoMin.png"
              alt=""
            />
            {/* text part  */}
            <h2 className="text-center text-white text-5xl font-bold">
              29th December, 2025
            </h2>
            <h2 className="text-center text-white text-5xl my-6  cinzel font-bold">
              North South University
            </h2>
            <div className="flex items-center justify-center">
              <Link
                to="/registration"
                className="bg-[#d1e3f84a] px-18 py-8  text-3xl rounded-full text-white cursor-pointer 
             hover:bg-[#265E97] transition-all duration-300
          hover:scale-102 "
              >
                Register Now
              </Link>
            </div>
        </FadeIn>
          </div>

        {/* What is SPAC? */}
        <FadeIn>
          <div className="grid md:grid-cols-2 justify-items-center items-center gap-4 mx-auto max-w-5xl md:pb-18 max-md:mx-5">
            <div>
              <h3 className="text-2xl md:text-4xl text-ieee-darkblue font-bold mb-8">
                What is SPAC?
              </h3>
              <p className="md:text-lg text-justify">
                The IEEE Student Professional Awareness Conference (SPAC) is a
                formal networking event & dinner that brings together esteemed
                professionals and allows them to engage with engineering and
                computer science students in their fields.
                <br />
                SPAC is one of the three Student Professional Awareness programs
                offered by IEEE. IEEE NSU Student Branch has successfully hosted
                the prestigious annual event of IEEE, SPAC, consecutively for
                the previous two years. As hundreds of student branches hold
                SPAx events each year, the IEEE NSU Student Branch, with no
                exception, aims to host the event grandly.
              </p>
            </div>

            <div className="w-auto h-auto rounded-[8px] border-1 border-white shadow-[0_8px_10px_0_rgba(0,0,0,0.3)] overflow-hidden my-5 max-md:mb-15">
              <img
                className="md:w-100 md:h-100 w-70 h-70 object-cover relative z-10 hover:scale-105 transition-all ease-in-out duration-300"
                src="WhatIsSPAC.png"
                alt="SPAC Image"
              />
            </div>
          </div>
        </FadeIn>

        {/* Goal Section */}
          <section className="relative w-full md:h-[40vh] flex items-center justify-center overflow-hidden">
            {/* Blurred Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: "url('SPACGoal.jpg')",
                filter: "blur(2px)", // ← Blur amount
                transform: "scale(1.05)", // ← Prevents edges from showing
              }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

              <FadeIn>
            {/* Content */}
            <div className="relative md:p-6 py-15 rounded-xl max-w-3xl mx-5 text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Goal of SPAC '25
              </h3>

              <p className="md:text-lg text-gray-200">
                To cultivate visionary leadership and professional excellence
                among engineering students and graduates by promoting
                innovation, ethical values, and industry-oriented competencies
                essential for future global challenges.
              </p>
            </div>
        </FadeIn>
          </section>

          <Collaborator />
          <Sponsors />

        {/* Last Year SPAC */}
        <FadeIn>
          <section className="w-full">
            <h3 className="text-2xl md:text-4xl font-extrabold text-ieee-darkblue md:pt-14 pt-8 text-center">
              Last Year SPAC
            </h3>
          </section>

          <div className="md:max-w-5xl lg:mx-auto aspect-video overflow-hidden mx-3 rounded-[12px] md:my-12 my-4">
            <video
              className="w-full h-full object-cover"
              src="/src/assets/videos/sample.mp4" // change the video source
              autoPlay
              muted
              playsInline
              loop
            />
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Home;
