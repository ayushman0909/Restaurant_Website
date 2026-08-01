import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-8 relative">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2
              className="text-4xl text-[#D4AF37] font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              LUXE
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Experience fine dining with world-class chefs,
              elegant ambiance and unforgettable flavors.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="home"
                smooth
                duration={700}
                className="cursor-pointer text-gray-400 hover:text-[#D4AF37]"
              >
                Home
              </Link>

              <Link
                to="menu"
                smooth
                duration={700}
                className="cursor-pointer text-gray-400 hover:text-[#D4AF37]"
              >
                Menu
              </Link>

              <Link
                to="about"
                smooth
                duration={700}
                className="cursor-pointer text-gray-400 hover:text-[#D4AF37]"
              >
                About
              </Link>

              <Link
                to="gallery"
                smooth
                duration={700}
                className="cursor-pointer text-gray-400 hover:text-[#D4AF37]"
              >
                Gallery
              </Link>

              <Link
                to="contact"
                smooth
                duration={700}
                className="cursor-pointer text-gray-400 hover:text-[#D4AF37]"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Opening Hours */}

          <div>

            <h3 className="text-white text-2xl font-semibold mb-6">
              Opening Hours
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Monday - Friday</p>
              <p>10:00 AM - 10:00 PM</p>

              <br />

              <p>Saturday - Sunday</p>
              <p>11:00 AM - 11:30 PM</p>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-white text-2xl font-semibold mb-6">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-6">
              Subscribe for special offers and latest updates.
            </p>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#1B1B1B] border border-white/10 rounded-full px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <button className="w-full mt-4 bg-[#D4AF37] text-black py-4 rounded-full font-semibold hover:bg-white transition">
              Subscribe
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 my-12"></div>

        {/* Bottom */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <p className="text-gray-500">
            © 2026 LUXE Restaurant. All Rights Reserved.
          </p>

          <div className="flex gap-4">

            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
              (Icon, index) => (
                <button
                  key={index}
                  className="w-11 h-11 rounded-full bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black transition flex items-center justify-center"
                >
                  <Icon />
                </button>
              )
            )}

          </div>

        </div>

      </div>

      {/* Scroll To Top */}

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#D4AF37] text-black shadow-xl hover:scale-110 transition z-50 flex items-center justify-center"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
};

export default Footer;