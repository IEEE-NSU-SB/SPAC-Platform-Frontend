import React from "react";
import cbl_gram_logo from "./assets/sponser-logo/cbl-gram.png";
import arrow_logo from "./assets/sponser-logo/arrow.png";
import star_logo from "./assets/sponser-logo/star.png";
import FadeIn from "./FadeIn";

import s1 from "./assets/sponser-logo/17.png";
import s2 from "./assets/sponser-logo/18.png";
import s3 from "./assets/sponser-logo/19.png";
import s4 from "./assets/sponser-logo/20.png";
import s5 from "./assets/sponser-logo/21.png";
import s6 from "./assets/sponser-logo/22.png";
import s7 from "./assets/sponser-logo/23.png";
import s8 from "./assets/sponser-logo/24.png";
import s9 from "./assets/sponser-logo/25.png";
import s10 from "./assets/sponser-logo/26.png";
import s11 from "./assets/sponser-logo/27.png";
import s12 from "./assets/sponser-logo/28.png";
import s13 from "./assets/sponser-logo/29.png";
import s14 from "./assets/sponser-logo/30.png";
import s15 from "./assets/sponser-logo/31.png";
import s16 from "./assets/sponser-logo/32.png";
import { div } from "framer-motion/client";

const Sponsors = () => {
  const sponsorData = [
    {
      key: "platinum",
      title: "Platinum",
      items: [
        { id: 1, image: s1 },
        { id: 2, image: s2 },
        { id: 3, image: s3 },
      ],
    },
    {
      key: "gold",
      title: "Gold",
      items: [
        { id: 1, image: s4 },
        { id: 2, image: s5 },
      ],
    },
    {
      key: "silver",
      title: "Silver",
      items: [
        { id: 1, image: s6 },
      ],
    },
    {
      key: "tshirtPartner",
      title: "T-shirt Partner",
      items: [
        { id: 1, image: s7 },
      ],
    },
    {
      key: "electronicPartner",
      title: "Electronic Partner",
      items: [
        { id: 1, image: s8 },
      ],
    },
    {
      key: "mediaPartner",
      title: "Media Partner",
      items: [
        { id: 1, image: s9 },
      ],
    },
    {
      key: "photographyAndCinematography",
      title: "Photography And Cinematography",
      items: [
        { id: 1, image: s10 },
      ],
    },
    {
      key: "PRAndPromotionPartner",
      title: "PR And Promotion Partner",
      items: [
        { id: 1, image: s11 },
      ],
    },
    {
      key: "billboardPartner",
      title: "Billboard Partner",
      items: [
        { id: 1, image: s12 },
      ],
    },
    {
      key: "digitalMediaPartner",
      title: "Digital Media Partner",
      items: [
        { id: 1, image: s13 },
        { id: 2, image: s14 },
        { id: 3, image: s15 },
        { id: 4, image: s16 },
      ],
    },
  ];


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
        <FadeIn>
          <div className="flex flex-col md:flex-row md:gap-25 gap-10 flex-wrap justify-center items-center relative">
            {sponsorData.map((section) => (
              <div key={section.key} className="flex flex-col items-center">
                <h2 className="text-2xl text-[#002855] font-semibold mb-6 text-center">
                  {section.title}
                </h2>

                <div className="flex gap-5 flex-wrap justify-center">
                  {section.items.map((item) => (
                  <div className="overflow-hidden rounded-full">
                    <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className="md:w-26 w-22 h-auto object-cover rounded-full scale-150"
                    />
                  </div>
                  ))}
                </div>
              </div>
            ))}

            {/* star logo */}
            <div className="absolute -bottom-18 -right-19 md:block hidden">
              <img
                src={star_logo}
                alt=""
                className="animate-spin-slow"
                style={{ animation: "spin 8s linear infinite" }}
              />
            </div>
          </div>
        </FadeIn>

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
