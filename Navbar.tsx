/*
 * Neversus Navbar — Dark Luxury Editorial
 * Fixed top nav with transparent-to-dark scroll behavior
 * Logo: NEVERSUS wordmark | Nav: WORK, ABOUT, SERVICES, VICTORIES, CONTACT
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import ContactModal from "./ContactModal";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "VICTORIES", href: "#victories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(13,13,13,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(42,42,42,0.8)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="flex items-center gap-1">
              <span
                className="text-xl md:text-2xl font-black tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#F2EDE8", letterSpacing: "-0.02em" }}
              >
                NEVER
              </span>
              <span
                className="text-xl md:text-2xl font-black tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#FF4D1C", letterSpacing: "-0.02em" }}
              >
                SUS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="link-underline text-xs font-medium tracking-widest transition-colors duration-200"
                style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.15em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2EDE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9490")}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-800 rounded transition-colors"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={20} style={{ color: "#FF4D1C" }} />
              ) : (
                <Moon size={20} style={{ color: "#FF4D1C" }} />
              )}
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-5 py-2 text-xs font-semibold tracking-widest transition-all duration-300"
              style={{
                border: "1px solid #FF4D1C",
                color: "#FF4D1C",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.15em",
                borderRadius: "2px",
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
              LET'S TALK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-px"
              style={{ backgroundColor: "#F2EDE8" }}
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px"
              style={{ backgroundColor: "#F2EDE8" }}
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px"
              style={{ backgroundColor: "#F2EDE8" }}
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-start px-8"
            style={{ backgroundColor: "#0D0D0D" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-4xl font-black tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D1C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F2EDE8")}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => {
                  setMenuOpen(false);
                  setIsContactOpen(true);
                }}
                className="text-left text-4xl font-black tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "#FF4D1C" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1 }}
              >
                LET'S TALK
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
