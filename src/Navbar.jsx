import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // 👈 Import useLocation
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "TIMELINE", path: "/timeline" },
  { label: "SPEAKERS", "path": "/speakers" },
  { label: "AMBASSADORS", path: "/ambassadors" },
  { label: "REGISTRATION", path: "/registration" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // 👈 Get the current location object

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the common active and inactive styles
  const activeStyle = "text-ieee-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-white after:rounded-full after:transition-all after:duration-300";
  const inactiveStyle = "text-ieee-white hover:bg-white/20"; // A subtle hover for inactive links

  return (
    <nav className="relative w-full z-50">
      <div className="max-w-[1100px] mx-auto px-4 py-3 sm:px-6 
        bg-[black/50] mt-4 rounded-lg">

        <button
          className="md:hidden text-ieee-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-between space-x-2 md:space-x-4">
          {navItems.map((item) => {
            // Check if the current path matches the item's path
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`font-bold text-xs md:text-sm px-4 py-2 
                  rounded-full cursor-pointer transition-all duration-300 
                  whitespace-nowrap ${isActive ? activeStyle : inactiveStyle}`} // 👈 Apply conditional styles
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full w-[90%] bg-ieee-darkblue shadow-lg
    overflow-hidden transition-all duration-300 ease-out mx-auto rounded
    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
  `}
        >
          <div className="flex flex-col items-start px-4 py-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`font-semibold text-base w-full py-3 px-2 
            transition-colors ${isActive
                      ? "text-white border-b"
                      : "text-ieee-white hover:bg-gray-800"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;