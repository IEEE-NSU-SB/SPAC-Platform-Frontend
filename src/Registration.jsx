import FadeIn from './FadeIn';
import SectionHeadingBG from './SectionHeadingBG'
import { useEffect } from "react";

const Registration = () => {
  useEffect(() => {
    document.title = "Registration | SPAC 2025";
  }, []);

  return (
    <>
      <div className="grid-bg">
        <SectionHeadingBG />
        <div className="max-w-5xl md:mx-auto z-10 relative">
          <FadeIn>
            <h2 className='text-white text-center mt-30 md:mt-45 md:text-left text-[24px] md:text-[30px] font-bold'>
              Registration
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col max-w-[1050px] mx-auto flex-wrap justify-between md:mt-35 mt-25 px-4 md:pb-30 pb-20 z-10 relative ">
              <div className='mx-auto w-50 md:w-80'>
                <img src="public/Registration.gif" alt="Registration GIF" className='w-auto h-auto' />
              </div>
              <p className="flex items-center mx-auto md:flex-row flex-col md:py-10 px-10 mt-10 bg-white p-4 rounded-lg border  border-ieee-blue shadow-md overflow-hidden">
                {/* Content Column */}
                Registration for IEEE SPAC 2025 is not open yet
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  )
}

export default Registration
