import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", company: "", message: "" });
          setSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-full max-w-lg bg-black border p-8 md:p-12 relative"
              style={{ borderColor: "#2A2A2A" }}
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
                  >
                    Thank You!
                  </h3>
                  <p
                    style={{ color: "#D4CECC", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    We'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2
                    className="text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
                  >
                    Let's Talk
                  </h2>
                  <p
                    className="mb-8"
                    style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Tell us about your project
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#F2EDE8", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border px-4 py-2 text-white focus:outline-none transition-colors"
                        style={{ borderColor: "#2A2A2A" }}
                        onFocus={(e) => (e.target.style.borderColor = "#FF4D1C")}
                        onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#F2EDE8", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border px-4 py-2 text-white focus:outline-none transition-colors"
                        style={{ borderColor: "#2A2A2A" }}
                        onFocus={(e) => (e.target.style.borderColor = "#FF4D1C")}
                        onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#F2EDE8", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border px-4 py-2 text-white focus:outline-none transition-colors"
                        style={{ borderColor: "#2A2A2A" }}
                        onFocus={(e) => (e.target.style.borderColor = "#FF4D1C")}
                        onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#F2EDE8", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-transparent border px-4 py-2 text-white focus:outline-none transition-colors resize-none"
                        style={{ borderColor: "#2A2A2A" }}
                        onFocus={(e) => (e.target.style.borderColor = "#FF4D1C")}
                        onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 font-semibold tracking-widest uppercase transition-all duration-300"
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
                      Send Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
