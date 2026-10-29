import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t" style={{ borderColor: "#2A2A2A" }}>
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#F2EDE8" }}
            >
              NEVERSUS
            </h4>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
            >
              A global creative studio crafting brands that dominate markets and inspire obsession.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
            >
              Navigation
            </h5>
            <ul className="space-y-2">
              {["Work", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F2EDE8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9490")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
            >
              Social
            </h5>
            <ul className="space-y-2">
              {["Instagram", "LinkedIn", "Twitter"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F2EDE8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9490")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h5
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact
            </h5>
            <p
              className="text-sm"
              style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
            >
              hello@neversus.com
            </p>
            <p
              className="text-sm mt-2"
              style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
            >
              +1 (555) 123-4567
            </p>
          </motion.div>
        </div>

        <div
          className="pt-8 border-t text-center"
          style={{ borderColor: "#2A2A2A" }}
        >
          <p
            className="text-xs"
            style={{ color: "#6B6560", fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2026 Neversus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
