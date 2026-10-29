import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Neversus transformed our brand from invisible to unforgettable. Their strategic thinking and creative excellence are unmatched.",
    author: "Sarah Chen",
    title: "CEO at Luxora Fragrances",
    image: "👩‍💼",
  },
  {
    quote: "Working with Neversus was a game-changer. They didn't just design—they understood our vision and elevated it beyond expectations.",
    author: "Marcus Rodriguez",
    title: "Founder at FinFlow",
    image: "👨‍💼",
  },
  {
    quote: "The team's attention to detail and commitment to excellence is exceptional. They delivered results that exceeded our KPIs by 40%.",
    author: "Elena Volkov",
    title: "CMO at Prestige Watches",
    image: "👩‍💼",
  },
  {
    quote: "Neversus doesn't settle for mediocrity—they push boundaries and create work that truly stands out. Highly recommended.",
    author: "James Mitchell",
    title: "Creative Director at Modern Design Studio",
    image: "👨‍💼",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4 md:px-12 py-8"
        >
          <div className="flex justify-center mb-6">
            <span className="text-4xl">{testimonials[current].image}</span>
          </div>
          <p className="text-xl md:text-2xl font-light italic mb-6 text-gray-200">
            "{testimonials[current].quote}"
          </p>
          <p className="text-coral font-semibold mb-1">{testimonials[current].author}</p>
          <p className="text-gray-400 text-sm">{testimonials[current].title}</p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <motion.button
          onClick={prev}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={24} style={{ color: "#FF4D1C" }} />
        </motion.button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === current ? "bg-coral w-8" : "bg-gray-600 w-2"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={24} style={{ color: "#FF4D1C" }} />
        </motion.button>
      </div>
    </div>
  );
}
