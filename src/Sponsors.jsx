import React from "react";
import cbl_gram_logo from "./assets/sponser-logo/cbl-gram.png";
import arrow_logo from "./assets/sponser-logo/arrow.png";
import star_logo from "./assets/sponser-logo/star.png";

const Sponsors = () => {
  const sponsorData = {
    platinum: [
      { id: 1, image: cbl_gram_logo },
      { id: 2, image: cbl_gram_logo },
    ],
    gold: [
      { id: 1, image: cbl_gram_logo },
      { id: 2, image: cbl_gram_logo },
    ],
    silver: [
      { id: 1, image: cbl_gram_logo },
      { id: 2, image: cbl_gram_logo },
      { id: 3, image: cbl_gram_logo },
      { id: 4, image: cbl_gram_logo },
    ],
    foodPartner: [
      { id: 1, image: cbl_gram_logo },
      { id: 2, image: cbl_gram_logo },
    ],
    tshirtPartner: [
      { id: 1, image: cbl_gram_logo },
      { id: 2, image: cbl_gram_logo },
    ],
  };

  return (
    <div className="bg-black md:px-20 md:pb-20 md:pt-10">
      <div className="relative md:pb-18 py-8 pl-4 text-center md:text-left">
        <h2 className="text-white text-[35px] font-semibold">
          Our Spon<span className="text-[#FF9D00]">sors</span>
        </h2>
        <img
          src={arrow_logo}
          className="absolute right-195 top-10 md:block hidden"
          alt=""
        />
      </div>
      {/* moddher div  */}
      <div className="bg-[#FFFCE6E3] p-8 border-2 border-dashed rounded-xl">
        {/* sponser gular parent div  */}
        <div className="flex flex-col  md:flex-row  gap-18 flex-wrap justify-center items-center relative">
          {/* single div  */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-[#002855] font-semibold mb-3">
              Platinum
            </h2>
            {/* Image container */}
            <div className="flex gap-5">
              {sponsorData.platinum.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="w-16 h-auto object-cover"
                />
              ))}
            </div>
          </div>

          {/* single div  */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-[#002855] font-semibold mb-3">Gold</h2>
            {/* Image container */}
            <div className="flex gap-5">
              {sponsorData.gold.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="w-16 h-auto object-cover"
                />
              ))}
            </div>
          </div>

          {/* single div  */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-[#002855] font-semibold mb-3">
              Silver
            </h2>
            {/* Image container */}
            <div className="flex gap-5">
              {sponsorData.silver.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="w-16 h-auto object-cover"
                />
              ))}
            </div>
          </div>
          {/* single div  */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-[#002855] font-semibold mb-3">
              Food Partner
            </h2>
            {/* Image container */}
            <div className="flex gap-5">
              {sponsorData.foodPartner.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="w-16 h-auto object-cover"
                />
              ))}
            </div>
          </div>
          {/* single div  */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-[#002855] font-semibold mb-3">
              T-shirt Partner
            </h2>
            {/* Image container */}
            <div className="flex gap-5">
              {sponsorData.tshirtPartner.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="w-16 h-auto object-cover"
                />
              ))}
            </div>
          </div>
          {/* star logo div  */}
          <div className="absolute -bottom-18 -right-19 md:block hidden">
            <img src={star_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
