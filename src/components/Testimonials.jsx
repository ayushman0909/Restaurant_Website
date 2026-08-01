import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Food Blogger",
    image: client1,
    review:
      "Absolutely incredible experience! The food, ambiance, and service exceeded every expectation. One of the finest restaurants I've ever visited.",
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Business Consultant",
    image: client2,
    review:
      "The steak was perfectly cooked and the staff was exceptionally professional. I highly recommend Luxe for special occasions.",
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Travel Influencer",
    image: client3,
    review:
      "Luxury at its best. Beautiful interiors, delicious cuisine, and an unforgettable dining experience. I'll definitely come back.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#111111] py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Testimonials
          </p>

          <h2
            className="text-5xl text-white font-bold mt-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            What Our Guests Say
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Trusted by thousands of happy customers who love our food,
            atmosphere, and hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37] transition-all duration-300"
            >

              <div className="flex gap-1 text-[#D4AF37] mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300 leading-8 mb-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
                />

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-[#D4AF37] text-sm">
                    {item.role}
                  </p>
                </div>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;