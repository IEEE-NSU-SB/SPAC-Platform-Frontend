import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "TIMELINE", path: "/timeline" },
  { label: "SPEAKERS", path: "/speakers" },
  { label: "AMBASSADORS", path: "/ambassadors" },
  { label: "REGISTRATION", path: "/registration" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      // switch to colored bg when user scrolls down a bit
      setScrolled(window.scrollY > 20);
    };

    onScroll(); // set initial state (useful on page reloads)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((s) => !s);

  // styles reused from your earlier version
  const activeStyle =
    "text-[#FF9D00] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-[#FF9D00] after:rounded-full after:transition-all after:duration-300";

  const inactiveStyle =
    "text-ieee-white hover:text-[#FF9D00] hover:after:w-full hover:after:bg-[#FF9D00] nav-link";

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-out"
        // background transitions between transparent and #002855
        style={{
          backgroundColor: scrolled ? "#002855" : "transparent",
          // optional subtle blur when scrolled:
          backdropFilter: scrolled ? "saturate(120%) blur(6px)" : "none",
        }}
      >
        <div
          className="max-w-[1100px] mx-auto px-4 py-3 sm:px-6 mt-4 rounded-lg"
        // keep the inner container layout as before
        >
          <button
            className="md:hidden text-ieee-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation Links (kept exactly like your original layout) */}
          <div className="hidden md:flex justify-between space-x-2 md:space-x-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`font-bold text-xs md:text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-300 whitespace-nowrap ${isActive ? activeStyle : inactiveStyle}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation Menu (kept as before but positioned under fixed nav) */}
          <div
            className={`md:hidden absolute top-full w-[90%] shadow-lg overflow-hidden transition-all duration-300 ease-out mx-auto rounded ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            style={{ backgroundColor:  "#002855", left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="flex flex-col items-start px-4 py-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`font-semibold text-base w-full py-3 px-2 transition-colors ${isActive ? "text-white" : "text-ieee-white hover:bg-gray-800"
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

      {/* local styles for underline + glow (unchanged behavior) */}
      <style>{`
        .nav-link {
          position: relative;
          color: #ffffff;
        }

        /* underline pseudo element */
        a[aria-current] { /* no-op, keep default if used */ }

        /* Create underline + glow using a generic selector for the links */
        .max-w-[1100px] a.font-bold::after,
        .max-w-[1100px] a.font-semibold::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 3px;
          background: #FF9D00; /* ieee-orange */
          border-radius: 9999px;
          transition: width 220ms ease;
        }

        .max-w-[1100px] a.font-bold:hover::after,
        .max-w-[1100px] a.font-bold.active::after,
        .max-w-[1100px] a.font-semibold:hover::after,
        .max-w-[1100px] a.font-semibold.active::after {
          width: 70%;
        }

        .max-w-[1100px] a.font-bold:hover,
        .max-w-[1100px] a.font-bold.active,
        .max-w-[1100px] a.font-semibold:hover,
        .max-w-[1100px] a.font-semibold.active {
          text-shadow: 0 0 10px rgba(255,140,0,0.95);
        }

        /* Keep mobile underline placement ergonomic */
        @media (max-width: 767px) {
          .max-w-[1100px] a.font-semibold::after { bottom: 10px; }
        }
          /* underline animation base */
  .nav-link {
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background: transparent;
    border-radius: 9999px;
    transition: width 250ms ease, background 250ms ease;
  }

  /* hover underline */
  .nav-link:hover::after {
    width: 100%;
    background: #FF9D00; /* ieee-orange */
  }

  /* active underline */
  .nav-link.active::after {
    width: 100%;
    background: #FF9D00;
  }
    /* base */
  .nav-link {
    position: relative;
    transition: color 200ms ease, text-shadow 200ms ease;
  }

  /* hover = ieee-orange */
  .nav-link:hover {
    color: #FF9D00 !important;
    text-shadow: 0 0 10px rgba(255, 140, 0, 0.6);
  }

  .nav-link:hover::after {
    background: #FF9D00;
    box-shadow: 0 0 8px rgba(255, 140, 0, 0.2);
  }

  /* active (current page) = ieee-orange */
  .nav-link.active {
    color: #FF9D00 !important;
    text-shadow: 0 0 10px rgba(255, 140, 0, 0.2);
  }

  .nav-link.active::after {
    background: #FF9D00;
    box-shadow: 0 0 8px rgba(255, 140, 0, 0.2);
  }
      `}</style>
    </>
  );
};

export default Navbar;
