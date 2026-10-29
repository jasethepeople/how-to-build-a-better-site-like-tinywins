import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Neversus transformed our brand from invisible to unforgettable. Their strategic thinking and creative excellence are unmatched.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Luxora Fragrances",
  },
  {
    id: 2,
    quote: "Working with Neversus was a game-changer. They didn't just design—they understood our vision and elevated it beyond expectations.",
    author: "Marcus Rodriguez",
    role: "Founder",
    company: "FinFlow",
  },
  {
    id: 3,
    quote: "The team's attention to detail and commitment to excellence is exceptional. They delivered results that exceeded our KPIs by 40%.",
    author: "Elena Volkov",
    role: "CMO",
    company: "Prestige Watches",
  },
  {
    id: 4,
    quote: "Neversus doesn't settle for mediocrity—they push boundaries and create work that truly stands out. Highly recommended.",
    author: "James Mitchell",
    role: "Creative Director",
    company: "Modern Design Studio",
  },
];

const clients = [
  "Luxora",
  "FinFlow",
  "Prestige",
  "Modern Studio",
  "Echo Labs",
  "Zenith Co",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-black">
      <div className="container">
        {/* Testimonials Section */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            What Clients Say
          </p>
          <h2
            className="text-5xl md:text-7xl font-black leading-tight mb-16 md:mb-24"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
          >
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="border p-8 md:p-10"
                style={{ borderColor: "#2A2A2A" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p
                  className="text-lg md:text-xl leading-relaxed mb-8 italic"
                  style={{ color: "#D4CECC", fontFamily: "'DM Sans', sans-serif" }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "#F2EDE8", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          className="border-t pt-20 md:pt-32"
          style={{ borderColor: "#2A2A2A" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-12"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            Trusted By
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <p
                  className="text-lg md:text-xl font-bold text-center"
                  style={{ color: "#6B6560", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {client}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
