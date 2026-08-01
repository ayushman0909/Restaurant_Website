import { motion } from "framer-motion";
import {
  FaLeaf,
  FaUtensils,
  FaAward,
  FaClock,
} from "react-icons/fa";

import chef from "../assets/images/Chef.jpg";

const features = [
  {
    icon: <FaLeaf size={28} />,
    title: "Fresh Ingredients",
    desc: "We use only premium quality fresh ingredients every single day.",
  },
  {
    icon: <FaUtensils size={28} />,
    title: "Expert Chefs",
    desc: "Award-winning chefs delivering unforgettable culinary experiences.",
  },
  {
    icon: <FaAward size={28} />,
    title: "Luxury Experience",
    desc: "Elegant interiors with world-class hospitality and premium service.",
  },
  {
    icon: <FaClock size={28} />,
    title: "Fast Service",
    desc: "Quick table service without compromising on quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="bg-[#111111] py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <img
            src={chef}
            alt="Chef"
            className="rounded-3xl object-cover w-full h-[650px]"
          />

          <div className="absolute bottom-8 left-8 bg-[#D4AF37] rounded-2xl px-8 py-5">

            <h2 className="text-4xl font-bold text-black">
              15+
            </h2>

            <p className="text-black font-medium">
              Years Experience
            </p>

          </div>

        </motion.div>

        {/* Right Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Why Choose Us
          </p>

          <h2
            className="text-5xl text-white font-bold mt-4 leading-tight"
            style={{ fontFamily: "Playfair Display" }}
          >
            Fine Dining With Luxury &
            Exceptional Taste
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            Experience a perfect blend of elegance,
            premium ingredients, and unforgettable hospitality.
            Every dish is crafted with passion and precision.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {features.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-[#1A1A1A] rounded-2xl p-7 border border-white/10 hover:border-[#D4AF37] transition-all duration-300"
              >

                <div className="text-[#D4AF37] mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;