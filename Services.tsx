import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Brand Strategy", desc: "Market positioning, competitive analysis, and brand architecture" },
  { num: "02", title: "Visual Identity", desc: "Logo design, color systems, typography, and brand guidelines" },
  { num: "03", title: "Digital Design", desc: "Web design, app interfaces, and digital experiences" },
  { num: "04", title: "Marketing", desc: "Campaign strategy, content creation, and social presence" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-black">
      <div className="container">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-5xl md:text-7xl font-black leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
          >
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              className="border-t"
              style={{ borderColor: "#2A2A2A" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="py-8">
                <div className="flex items-baseline gap-4 mb-4">
                  <span
                    className="text-4xl md:text-5xl font-black"
                    style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {service.num}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
