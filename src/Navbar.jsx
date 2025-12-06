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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((s) => !s);

  const activeStyle =
    "text-ieee-orange relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-ieee-orange after:rounded-full after:transition-all after:duration-300";

  const inactiveStyle =
    "text-ieee-white hover:text-ieee-orange nav-link";

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out"
        style={{
          backgroundColor: scrolled || isOpen ? "#002855" : "transparent",
          backdropFilter: scrolled ? "saturate(120%) blur(8px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:hidden flex items-center justify-between py-3">
            <button
              className="text-white p-2 hover:bg-ieee-white-15 rounded-lg transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/">
            <img src="SPAC25LogoMin.png" className="w-35 relative top-1 left-2" alt="SPAC 2025" />
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center space-x-1 lg:space-x-2 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`font-bold text-xs lg:text-sm px-3 lg:px-4 py-2 rounded-full cursor-pointer transition-all duration-300 whitespace-nowrap ${isActive ? activeStyle : inactiveStyle
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div
            className={`md:hidden absolute top-full left-0 right-0 shadow-xl overflow-hidden transition-all duration-300 ease-out rounded-lg ${isOpen
                ? "opacity-100 translate-y-0 max-h-96"
                : "opacity-0 -translate-y-3 max-h-0 pointer-events-none"
              }`}
            style={{
              backgroundColor: "#002855",
              backdropFilter: "blur(10px)"
            }}
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`font-semibold text-sm w-full py-3 px-4 transition-all duration-200 ${isActive
                        ? "text-ieee-orange bg-ieee-white-15"
                        : "text-white hover:bg-ieee-white-15 hover:text-ieee-orange"
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

      <style>{`
        .nav-link {
          position: relative;
          transition: color 200ms ease, text-shadow 200ms ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background: transparent;
          border-radius: 9999px;
          transition: width 250ms ease, background 250ms ease;
        }

        .nav-link:hover {
          color: #FFA300 !important;
          text-shadow: 0 0 10px rgba(255, 163, 0, 0.6);
        }

        .nav-link:hover::after {
          width: 80%;
          background: #FFA300;
          box-shadow: 0 0 8px rgba(255, 163, 0, 0.4);
        }

        .nav-link.active {
          color: #FFA300 !important;
          text-shadow: 0 0 10px rgba(255, 163, 0, 0.4);
        }

        .nav-link.active::after {
          width: 80%;
          background: #FFA300;
          box-shadow: 0 0 8px rgba(255, 163, 0, 0.4);
        }

        nav a {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
};

export default Navbar;