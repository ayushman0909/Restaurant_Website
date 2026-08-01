import { useState } from "react";
import { motion } from "framer-motion";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      guests: "2",
      date: "",
      time: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="booking"
      className="py-24 bg-[#0F0F0F] px-6 lg:px-10"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="bg-[#181818] rounded-3xl border border-white/10 p-8 lg:p-14"
        >

          <div className="text-center mb-12">

            <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
              Reservation
            </p>

            <h2
              className="text-5xl text-white font-bold mt-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Book Your Table
            </h2>

            <p className="text-gray-400 mt-5">
              Reserve your table in just a few seconds.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-[#242424] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-[#242424] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="bg-[#242424] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="bg-[#242424] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            >
              <option>1</option>
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
            </select>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="bg-[#242424] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="bg-[#242424] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[#D4AF37] text-black py-4 rounded-full font-semibold hover:bg-white transition duration-300"
            >
              Reserve Table
            </button>

          </form>

          {success && (
            <div className="mt-8 text-center bg-green-600 rounded-xl py-4 font-semibold">
              🎉 Table Reserved Successfully!
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
};

export default Booking;