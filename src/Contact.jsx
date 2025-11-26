import SectionHeadingBG from './SectionHeadingBG'
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | SPAC 2025";
  }, []);
  
  return (
    <>
    <SectionHeadingBG />
    <div className="max-w-5xl mx-auto mt-30 z-10 relative">
        <h2 className='text-white text-[30px] font-bold'>Contact</h2>
    </div>
    <div className="grid-bg w-full h-screen"></div>
    </>
  )
}

export default Contact
