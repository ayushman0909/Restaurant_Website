import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Menu", to: "menu" },
    { name: "About", to: "about" },
    { name: "Gallery", to: "gallery" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="Luxe Restaurant"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h2
              className="text-2xl font-bold tracking-widest text-[#D4AF37]"
              style={{ fontFamily: "Playfair Display" }}
            >
              LUXE
            </h2>

            <p className="text-[11px] tracking-[4px] text-white uppercase">
              Fine Dining
            </p>
          </div>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              duration={700}
              offset={-80}
              activeClass="text-[#D4AF37]"
              className="cursor-pointer text-white hover:text-[#D4AF37] transition duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Book Button */}

        <div className="hidden lg:block">
          <button className="bg-[#D4AF37] text-black px-7 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300">
            Book Table
          </button>
        </div>

        {/* Mobile Icon */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-125" : "max-h-0"
        }`}
      >
        <div className="bg-[#111111] px-6 py-6 flex flex-col gap-6">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={700}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-white hover:text-[#D4AF37] transition text-lg"
            >
              {item.name}
            </Link>
          ))}

          <button className="bg-[#D4AF37] text-black py-3 rounded-full font-semibold hover:bg-white transition">
            Book Table
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;