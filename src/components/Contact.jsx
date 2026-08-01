import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#111111] py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Contact
          </p>

          <h2
            className="text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Visit Our Restaurant
          </h2>

          <p className="text-gray-400 mt-5">
            We'd love to welcome you for an unforgettable dining experience.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-60 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
            className="space-y-8"
          >

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center">

                <FaMapMarkerAlt className="text-black"/>

              </div>

              <div>

                <h3 className="text-white text-xl font-semibold">
                  Address
                </h3>

                <p className="text-gray-400 mt-2">
                  123 Luxury Street,
                  New York,
                  USA
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center">

                <FaPhoneAlt className="text-black"/>

              </div>

              <div>

                <h3 className="text-white text-xl font-semibold">
                  Phone
                </h3>

                <p className="text-gray-400 mt-2">
                  +1 (123) 456-7890
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center">

                <FaEnvelope className="text-black"/>

              </div>

              <div>

                <h3 className="text-white text-xl font-semibold">
                  Email
                </h3>

                <p className="text-gray-400 mt-2">
                  hello@luxerestaurant.com
                </p>

              </div>

            </div>

            <div className="flex gap-4 pt-6">

              {[FaInstagram,FaFacebookF,FaTwitter].map((Icon,index)=>(
                <button
                  key={index}
                  className="w-12 h-12 rounded-full bg-[#1B1B1B] border border-white/10 hover:bg-[#D4AF37] hover:text-black transition flex items-center justify-center"
                >
                  <Icon/>
                </button>
              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity:0,x:60 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
          >

            <iframe
              title="map"
              className="rounded-3xl w-full h-125"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=New+York&output=embed"
            ></iframe>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;