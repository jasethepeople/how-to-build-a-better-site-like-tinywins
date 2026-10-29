/*
 * Neversus Hero Section — Dark Luxury Editorial
 * Full-bleed hero with dramatic background image, overlay, and animated text
 * Design: Asymmetric layout, large serif headline, coral accent, scroll indicator
 */

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  backgroundImage: string;
}

export default function Hero({ backgroundImage }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10 flex flex-col justify-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl">
          {/* Eyebrow Text */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <p
              className="text-xs md:text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ Creative Excellence
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 md:mb-8 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 900,
              color: "#F2EDE8",
              letterSpacing: "-0.02em",
            }}
          >
            Brands That
            <br />
            <span style={{ color: "#FF4D1C" }}>Never Settle</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mb-8 md:mb-12 text-lg md:text-xl leading-relaxed max-w-xl"
            style={{ color: "#D4CECC", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            We craft identities that dominate markets, inspire obsession, and refuse to compromise. Every brand tells a story—we make sure yours is unforgettable.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            className="inline-block px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              border: "1px solid #FF4D1C",
              color: "#FF4D1C",
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: "transparent",
              letterSpacing: "0.15em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FF4D1C";
              e.currentTarget.style.color = "#0D0D0D";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#FF4D1C";
            }}
          >
            Start a Project
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} style={{ color: "#FF4D1C" }} />
      </motion.div>
    </section>
  );
}
