import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

import img1 from "../assets/images/Restaurantgallery1.jpg";
import img2 from "../assets/images/Restaurantgallery2.jpg";
import img3 from "../assets/images/Restaurantgallery3.jpg";
import img4 from "../assets/images/Restaurantgallery4.jpg";


const images = [
  img1,
  img2,
  img3,
  img4,
  
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-24 bg-[#0F0F0F] px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Gallery
          </p>

          <h2
            className="text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Our Restaurant Moments
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore our beautiful ambiance, signature dishes,
            and memorable dining experiences.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((img, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
            >

              <img
                src={img}
                alt="Restaurant"
                className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center">

                  <FaSearchPlus
                    size={24}
                    className="text-black"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;