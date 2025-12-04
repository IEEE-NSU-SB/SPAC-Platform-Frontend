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
    <div className="max-w-5xl md:mx-auto mt-10 md:mt-25 z-10 relative">
      <h2 className='text-white text-center md:text-left text-[24px] md:text-[30px] font-bold'>
        Registration
      </h2>
          <div className="flex max-w-[1050px] mx-auto flex-wrap justify-between md:mt-41 mt-25 px-4 md:pb-30 pb-20 z-10 relative ">
            <p className="flex items-center mx-auto md:flex-row flex-col py-10 px-10 mt-10 bg-white p-4 rounded-lg border  border-ieee-blue shadow-md overflow-hidden">
              {/* Content Column */}
              Registration for IEEE SPAC 2025 is not open yet 
            </p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Registration
