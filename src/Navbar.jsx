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
  <nav className="relative w-full z-50">
    <div className="max-w-[1100px] mx-auto px-4 py-3 sm:px-6 
      bg-[black/50] mt-4">
      
      <div className="flex justify-between space-x-2 md:space-x-4 overflow-x-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="text-ieee-white font-bold text-xs md:text-sm px-4 py-2 
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
