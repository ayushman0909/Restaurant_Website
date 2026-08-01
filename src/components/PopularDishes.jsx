import { motion } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";

import pizza from "../assets/images/Pizza.jpg";
// import steak from "../assets/images/steak.jpg";
import pasta from "../assets/images/pasta.jpg";
import burger from "../assets/images/Burger.jpg";
import dessert from "../assets/images/Dessert.jpg";
// import sushi from "../assets/images/sushi.jpg";

const dishes = [
  {
    id: 1,
    name: "Italian Pizza",
    image: pizza,
    price: "$18",
    rating: 4.9,
  },
  
  {
    id: 2,
    name: "Creamy Pasta",
    image: pasta,
    price: "$22",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Classic Burger",
    image: burger,
    price: "$16",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Chocolate Dessert",
    image: dessert,
    price: "$14",
    rating: 4.9,
  },
 
];

const PopularDishes = () => {
  return (
    <section
      id="menu"
      className="bg-[#0F0F0F] py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Our Menu
          </p>

          <h2
            className="text-5xl text-white font-bold mt-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Popular Dishes
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Crafted with premium ingredients and unforgettable flavors.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {dishes.map((dish, index) => (

            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="rounded-3xl overflow-hidden bg-[#181818] border border-white/10"
            >

              <div className="overflow-hidden">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-72 object-cover transition duration-700 hover:scale-110"
                />

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl text-white font-semibold">
                    {dish.name}
                  </h3>

                  <span className="text-[#D4AF37] font-bold text-xl">
                    {dish.price}
                  </span>

                </div>

                <div className="flex items-center gap-2 mt-4 text-[#D4AF37]">

                  <FaStar />

                  <span className="text-white">
                    {dish.rating}
                  </span>

                </div>

                <button className="mt-8 w-full flex items-center justify-center gap-3 bg-[#D4AF37] text-black py-4 rounded-full font-semibold hover:bg-white transition">

                  <FaShoppingCart />

                  Add To Cart

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default PopularDishes;