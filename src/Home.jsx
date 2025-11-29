import { useEffect } from "react";
import Collaborator from "./Collaborator";
import Sponsors from "./Sponsors";

const Home = () => {
  useEffect(() => {
    document.title = "Home | SPAC 2025";
  }, []);

  return (
      <><div className="grid-bg">
    {/* Wallpaper */}
    <div className="relative bottom-14">
      <img src="https://api.ieeensusb.org/media_files/Event_Banner_Image/Student_Professional_Awarness_Conference_SPAC_2024.jpeg" alt="" />
    </div>
    {/* What is SPAC? */}
    <div className="grid grid-cols-2 justify-items-center items-center gap-4 mx-auto max-w-5xl mt-50">
      <div>
        <h3 className="text-4xl text-ieee-darkblue font-bold mb-8">What is SPAC?</h3>
        <p className="text-lg">The IEEE Student Professional Awareness Conference (SPAC) is a formal networking event & dinner that brings together esteemed professionals and allows them to engage with engineering and computer science students in their fields.
          <br />
          SPAC is one of the three Student Professional Awareness programs offered by IEEE.
          IEEE NSU Student Branch has successfully hosted the prestigious annual event of IEEE, SPAC, consecutively for the previous two years. As hundreds of student branches hold SPAx events each year, the IEEE NSU Student Branch, with no exception, aims to host the event grandly.</p>
      </div>
      <div className="w-auto h-auto rounded-[8px] overflow-hidden">
        <img className="w-100 h-100 object-cover" src="https://api.ieeensusb.org/media_files/Event_Banner_Image/Student_Professional_Awarness_Conference_SPAC_2024.jpeg"/>
      </div>
    </div>
    <div>
    <img className="z-50" src="SPACDesign1.png" alt="" />
    </div>
    </div>
    <Collaborator></Collaborator>
    <Sponsors></Sponsors>
    </>
  )
}

export default Home
