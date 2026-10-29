import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MetricProps {
  value: number;
  label: string;
  suffix?: string;
}

function AnimatedMetric({ value, label, suffix = "" }: MetricProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl md:text-6xl font-black mb-2" style={{ color: "#FF4D1C" }}>
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
}

export default function MetricsDashboard() {
  const metrics = [
    { value: 150, label: "Projects Completed", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 45, label: "Awards Won", suffix: "+" },
    { value: 12, label: "Years of Excellence", suffix: "" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }} className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
            By The Numbers
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Our Impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatedMetric {...metric} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
