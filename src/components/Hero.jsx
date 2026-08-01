import { motion } from "framer-motion";
import { Link } from "react-scroll";
import heroImg from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Luxury Restaurant"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gold Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[8px] text-[#D4AF37] mb-3 mt-6 text-sm"
          >
            Welcome to Luxe
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            Experience Luxury <br />
            Dining Like Never Before
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 text-gray-300 max-w-xl leading-8"
          >
            Enjoy world-class cuisine prepared by our master chefs,
            crafted with the finest ingredients and served in a luxurious atmosphere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <Link
              to="booking"
              smooth
              duration={700}
              offset={-80}
            >
              <button className="bg-[#D4AF37] hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold text-black">
                Book a Table
              </button>
            </Link>

            <Link
              to="menu"
              smooth
              duration={700}
              offset={-80}
            >
              <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Explore Menu
              </button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Floating Cards */}
      <div className="hidden lg:flex absolute bottom-16 right-10 gap-5">

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-5">
          <h3 className="text-[#D4AF37] text-3xl font-bold">15+</h3>
          <p className="text-white text-sm mt-1">
            Years Experience
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-5">
          <h3 className="text-[#D4AF37] text-3xl font-bold">50K+</h3>
          <p className="text-white text-sm mt-1">
            Happy Guests
          </p>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;