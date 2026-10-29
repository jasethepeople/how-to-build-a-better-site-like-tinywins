import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/about-section-62ZtE4KA2N4FYjrdb55WUu.webp"
              alt="Neversus Studio"
              className="w-full h-96 object-cover"
              style={{ borderRadius: "2px" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
            >
              About Us
            </p>
            <h2
              className="text-4xl md:text-5xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
            >
              We Build Brands That Never Settle
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: "#D4CECC", fontFamily: "'DM Sans', sans-serif" }}
            >
              Neversus is a global creative studio obsessed with crafting identities that dominate markets and inspire unwavering loyalty. We don't do mediocre. Every project is an opportunity to create something that refuses to be forgotten.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#D4CECC", fontFamily: "'DM Sans', sans-serif" }}
            >
              From brand strategy to digital design, from marketing campaigns to environmental experiences—we bring relentless creativity and strategic thinking to every challenge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
