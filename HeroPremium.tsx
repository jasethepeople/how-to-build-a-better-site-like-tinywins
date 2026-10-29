import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroPremiumProps {
  backgroundImage: string;
}

export default function HeroPremium({ backgroundImage }: HeroPremiumProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  } as any;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: scrollY * 0.5,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 z-2 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FF4D1C 1px, transparent 1px), linear-gradient(#FF4D1C 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          y: scrollY * 0.3,
        }}
      />

      {/* Content */}
      <motion.div
        className="container relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Accent */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 md:mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#FF4D1C" }}
            animate={{ scale: [1, 1.2, 1] } as any}
            transition={{ duration: 2, repeat: Infinity as any } as any}
          />
          <span
            className="text-xs md:text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            Creative Excellence
          </span>
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#FF4D1C" }}
            animate={{ scale: [1, 1.2, 1] } as any}
            transition={{ duration: 2, repeat: Infinity as any, delay: 0.3 } as any}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
          >
            Brands That
            <br />
            <motion.span
              style={{ color: "#FF4D1C" }}
              animate={{ opacity: [0.8, 1, 0.8] } as any}
              transition={{ duration: 3, repeat: Infinity as any } as any}
            >
              Never Settle
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12 md:mb-16"
          style={{ color: "#D4CECC", fontFamily: "'DM Sans', sans-serif" }}
          variants={itemVariants}
        >
          We craft identities that dominate markets, inspire obsession, and refuse to compromise. Every brand tells a story—we make sure yours is unforgettable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 md:px-12 py-4 text-sm md:text-base font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              border: "2px solid #FF4D1C",
              color: "#FF4D1C",
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: "transparent",
              letterSpacing: "0.15em",
            }}
            whileHover={{
              backgroundColor: "#FF4D1C",
              color: "#0D0D0D",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>

          <motion.button
            className="px-8 md:px-12 py-4 text-sm md:text-base font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              border: "2px solid #9A9490",
              color: "#9A9490",
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: "transparent",
              letterSpacing: "0.15em",
            }}
            whileHover={{
              borderColor: "#F2EDE8",
              color: "#F2EDE8",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] } as any}
        transition={{ duration: 2, repeat: Infinity as any } as any}
      >
        <ChevronDown size={32} style={{ color: "#FF4D1C" }} />
      </motion.div>
    </section>
  );
}
