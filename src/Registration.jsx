import SectionHeadingBG from './SectionHeadingBG'
import { useEffect } from "react";

const Registration = () => {
    useEffect(() => {
      document.title = "Registration | SPAC 2025";
    }, []);
    
    return (
    <>
    <div className="grid-bg w-full h-screen">
    <SectionHeadingBG />
    <div className="max-w-5xl md:mx-auto mt-10 md:mt-15 z-10 relative">
      <h2 className='text-white text-center md:text-left text-[24px] md:text-[30px] font-bold'>
        Registration
      </h2>
    </div>
    </div>
    </>
  )
}

export default Registration
