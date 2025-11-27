import SectionHeadingBG from './SectionHeadingBG'
import { useEffect } from "react";

const speakersData = [
  {
    name: "Dr. Nabeel Mohammad",
    title: "Associate Professor",
    image: "src/assets/images/speaker1.png",
    description: `Dr. Nabeel Mohammad is a distinguished academic and researcher with a Bachelor's degree in Computer Science from Monash University, Australia. He began his career as a Software Developer at Editure Ltd., before transitioning into academia to pursue his PhD at Monash University. His doctoral research focused on unsupervised image feature extraction and its applications in content-based image retrieval.
Dr. Nabeel’s current research interests span Computer Vision and Natural Language Processing, with additional expertise in Artificial Intelligence, Robotics, and Signal & Image Processing. He is deeply passionate about industry–academia collaboration and has successfully partnered with organizations such as Apurba Technologies, HeadBlocks, Giga Tech Ltd., and others.
He also leads the Apurba–NSU R&D Lab, which has made significant contributions to AI projects in collaboration with Apurba Technologies—further demonstrating his commitment to bridging the gap between academic research and real-world applications.`
  },
  {
    name: "Dr. Nabeel Mohammad",
    title: "Associate Professor",
    image: "src/assets/images/speaker1.png",
    description: `Dr. Nabeel Mohammad is a distinguished academic and researcher with a Bachelor's degree in Computer Science from Monash University, Australia. He began his career as a Software Developer at Editure Ltd., before transitioning into academia to pursue his PhD at Monash University. His doctoral research focused on unsupervised image feature extraction and its applications in content-based image retrieval.
Dr. Nabeel’s current research interests span Computer Vision and Natural Language Processing, with additional expertise in Artificial Intelligence, Robotics, and Signal & Image Processing. He is deeply passionate about industry–academia collaboration and has successfully partnered with organizations such as Apurba Technologies, HeadBlocks, Giga Tech Ltd., and others.
He also leads the Apurba–NSU R&D Lab, which has made significant contributions to AI projects in collaboration with Apurba Technologies—further demonstrating his commitment to bridging the gap between academic research and real-world applications.`
  },
];

const Speakers = () => {

  useEffect(() => {
    document.title = "Speakers | SPAC 2025";
  }, []);

  return (
    <>
      <SectionHeadingBG />
      <div className="max-w-5xl md:mx-auto mt-20 md:mt-30 z-10 relative px-4">
        <h2 className='text-white text-center md:text-left text-[24px] md:text-[30px] font-bold'>
          SPAC 2025 Speakers
        </h2>
      </div>

      <div className="max-w-5xl mx-auto mt-10 space-y-10 px-4 relative z-20 pb-20">
        {speakersData.map((speaker, index) => (
          <div 
            key={index} 
            className="bg-white border border-[#C0C0C0] rounded-[10px] 
                       shadow-md shadow-black/25 p-6 flex flex-col md:flex-row gap-6"
          >
            <img 
              src={speaker.image} 
              alt={speaker.name}
              className="w-[241px] h-[279px] object-cover rounded-[10px]"
            />

            <div>
              <h3 className="text-[24px] font-semibold leading-none">
                {speaker.name}
              </h3>
              <p className="text-[16px] font-semibold leading-none mt-1 mb-3">{speaker.title}</p>
              <p className="text-[15px] font-light leading-none text-justify tracking-normal whitespace-pre-line">
                {speaker.description}
              </p>
            </div>
          </div>
        ))}

      </div>

      <div className="grid-bg w-full h-screen absolute top-0 left-0 -z-10"></div>
    </>
  );
};

export default Speakers;
