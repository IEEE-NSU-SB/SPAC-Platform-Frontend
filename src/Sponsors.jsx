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
    <div className="bg-[#091d33] md:px-20 md:pb-30 md:pt-10">
      <div className="relative max-w-5xl mx-auto md:pb-18 py-8 pl-4 text-center md:text-left">
        <h2 className="text-white text-2xl md:text-4xl font-semibold">
          Our Spon<span className="text-[#FF9D00]">sors</span>
        </h2>
        <img
          src={arrow_logo}
          className="absolute right-173 top-12 md:block hidden"
          alt=""
        />
      </div>
      {/* moddher div  */}
      <div className="bg-[#FFFCE6E3] max-w-5xl mx-auto p-8 md:border-2 md:border-dashed rounded-xl">
        {/* sponser gular parent div  */}
        <div className="flex flex-col   md:flex-row  md:gap-25 gap-10 flex-wrap justify-center items-center relative">
          {/* single div  */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-[#002855] font-semibold mb-3">
              Platinum
            </h2>
            {/* Image container */}
            <div className="flex gap-5 flex-wrap justify-center">
              {sponsorData.platinum.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="md:w-16 w-13 h-auto object-cover"
                />
              ))}
            </div>
          </div>

          {/* single div  */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-[#002855] font-semibold mb-3">Gold</h2>
            {/* Image container */}
            <div className="flex gap-5 flex-wrap justify-center">
              {sponsorData.gold.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="md:w-16 w-13 h-auto object-cover"
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
            <div className="flex gap-5 flex-wrap justify-center">
              {sponsorData.silver.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="md:w-16 w-13 h-auto object-cover"
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
            <div className="flex gap-5 flex-wrap justify-center">
              {sponsorData.foodPartner.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="md:w-16 w-13 h-auto object-cover"
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
            <div className="flex gap-5 flex-wrap justify-center">
              {sponsorData.tshirtPartner.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="md:w-16 w-13 h-auto object-cover"
                />
              ))}
            </div>
          </div>
          {/* star logo div  */}
          <div className="absolute -bottom-18 -right-19 md:block hidden">
            <img
              src={star_logo}
              alt=""
              className="animate-spin-slow"
              style={{
                animation: "spin 8s linear infinite",
              }}
            />
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
      </style>

    </div>

  );
};

// just for check 

export default Sponsors;
