import { useEffect } from "react";
import Collaborator from "./Collaborator";
import Sponsors from "./Sponsors";

const Home = () => {
  useEffect(() => {
    document.title = "Home | SPAC 2025";
  }, []);

  return (
    <>
      <div className="grid-bg pb-12">
      {/* Hero Section */}
      <div
        className="relative bottom-20 w-full h-[110vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('SPACBG.png')" }}
      >
        <img
          className="max-md:w-80 md:w-280 object-cover mx-auto"
          src="SPAC25Logo.png"
          alt=""
        />
      </div>

        {/* What is SPAC? */}
        <div className="grid md:grid-cols-2 justify-items-center items-center gap-4 mx-auto max-w-5xl md:py-5 md:pb-15 max-md:mx-5">
          <div>
            <h3 className="text-2xl md:text-4xl text-ieee-darkblue font-bold mb-8">
              What is SPAC?
            </h3>
            <p className="md:text-lg">
              The IEEE Student Professional Awareness Conference (SPAC) is a
              formal networking event & dinner that brings together esteemed
              professionals and allows them to engage with engineering and
              computer science students in their fields.
              <br />
              SPAC is one of the three Student Professional Awareness programs
              offered by IEEE. IEEE NSU Student Branch has successfully hosted
              the prestigious annual event of IEEE, SPAC, consecutively for the
              previous two years. As hundreds of student branches hold SPAx events
              each year, the IEEE NSU Student Branch, with no exception, aims to
              host the event grandly.
            </p>
          </div>

          <div className="w-auto h-auto rounded-[8px] overflow-hidden my-5 max-md:mb-15">
            <img
              className="md:w-100 md:h-100 w-70 h-70 object-cover relative z-10"
              src="https://api.ieeensusb.org/media_files/Event_Banner_Image/Student_Professional_Awarness_Conference_SPAC_2024.jpeg"
              alt=""
            />
          </div>
        </div>

        {/* Goal Section */}
        <section
          className="w-full bg-cover bg-center py-20 text-center flex justify-center"
          style={{
            backgroundImage: "url('/src/assets/images/goalBackground1.jpg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-6 rounded-xl max-w-3xl mx-5">
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Goal of SPAC '25
            </h3>
            <p className="md:text-lg text-gray-200 leading-relaxed">
              To cultivate visionary leadership and professional excellence among
              engineering students and graduates by promoting innovation, ethical
              values, and industry-oriented competencies essential for future
              global challenges.
            </p>
          </div>
        </section>

        <Collaborator />
        <Sponsors />

        {/* Last Year SPAC */}
        <section className="w-full">
          <h3 className="text-2xl md:text-4xl font-extrabold text-ieee-darkblue md:pt-14 pt-8 text-center">
            Last Year SPAC
          </h3>
        </section>

          <div className="md:w-5xl mx-auto aspect-video overflow-hidden max-md:mx-3 rounded-[12px] md:py-12 py-4">
            <video
              className="w-full h-full object-cover"
              src="/src/assets/videos/sample.mp4" // change the video source
              autoPlay
              muted
              playsInline
              loop
            />
          </div>

      </div>
    </>
  );
};

export default Home;
