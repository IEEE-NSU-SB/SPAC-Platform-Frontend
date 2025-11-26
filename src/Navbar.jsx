import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "TIMELINE", path: "/timeline" },
  { label: "SPEAKERS", path: "/speakers" },
  { label: "AMBASSADORS", path: "/ambassadors" },
  { label: "REGISTRATION", path: "/registration" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50">
    <div className="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8 py-2
      bg-white/90 backdrop-blur shadow-[0_2px_4px_rgba(255,255,255,0.6)]
      rounded-2xl mt-4">
      
      <div className="flex justify-between space-x-2 md:space-x-4 overflow-x-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="text-ieee-darkblue font-bold text-xs md:text-sm px-4 py-2 
            rounded-full cursor-pointer transition-colors duration-300 whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>

    </div>
  </nav>
);

export default Navbar;
