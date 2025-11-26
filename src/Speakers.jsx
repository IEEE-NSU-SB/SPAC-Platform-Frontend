import SectionHeadingBG from './SectionHeadingBG'
import { useEffect } from "react";

const Speakers = () => {
  useEffect(() => {
    document.title = "Speakers | SPAC 2025";
  }, []);

  return (
    <>
    <SectionHeadingBG />
    <div className="max-w-5xl md:mx-auto mt-20 md:mt-30 z-10 relative">
        <h2 className='text-white text-center md:text-left text-[24px] md:text-[30px] font-bold'>SPAC 2025 Speakers</h2>
    </div>
    <div className="grid-bg w-full h-screen"></div>
    </>
  )
}

export default Speakers
