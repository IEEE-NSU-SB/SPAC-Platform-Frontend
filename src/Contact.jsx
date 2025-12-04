import SectionHeadingBG from "./SectionHeadingBG";
import { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    document.title = "Contact | SPAC 2025";
  }, []);

  const scheduleData = [
    {
      title: "Md. Shakib Shahariar Junayed",
      position: "Secretary, IEEE NSU SB",
      email: "@gmail.com",
      description: "Contact: 0123546798",
    },
    {
      title: "Md. Rakibul Islam",
      position: "Vice Chairperson, IEEE NSU SB",
      description: "Contact: 0123546798",
    },
    {
      title: "Md. Nashrat",
      position: "Chairperson, IEEE NSU SB",
      email: "123@gmail.com",
      description: "Contact: 0123546798",
    },
  ];

  return (
    <>
      <div className="grid-bg">
        <SectionHeadingBG />
        <div className="max-w-5xl md:mx-auto mt-10 md:mt-25 z-10 relative">
          <h2 className='text-white text-center md:text-left text-[24px] md:text-[30px] font-bold'>
            Contact
          </h2>
        </div>
        <div className="flex max-w-[1050px] mx-auto flex-wrap justify-between md:mt-31 px-4 mt-15 md:pb-30 pb-20 z-10 relative ">
          {scheduleData.map((data, index) => (
            <div key={index} className="flex w-[500px] items-start md:flex-row flex-col  mt-10 bg-white p-4 rounded border  border-ieee-blue shadow-md overflow-hidden">
              {/* Content Column */}
              <div>
                <h3 className="text-xl font-bold text-[#002855] mb-1">
                  {data.title}
                </h3>
                <div className="text-gray-800 font-medium mb-1">
                  {data.position}
                </div>
                {data.description && (
                  <p className="text-gray-700 text-sm">{data.description}</p>
                )}
                {data.email && (
                  <p className="text-gray-700 text-sm">{data.email}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;

