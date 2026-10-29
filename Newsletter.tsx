import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          _subject: "New Newsletter Subscription",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Welcome! Check your email for updates.");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Connection error. Please try again later.");
      console.error("Newsletter subscription error:", error);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            Stay Updated
          </p>

          <h2
            className="text-4xl md:text-6xl font-black leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
          >
            Get Design Insights Delivered
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed mb-12"
            style={{ color: "#D4CECC", fontFamily: "'DM Sans', sans-serif" }}
          >
            Subscribe to our newsletter for exclusive design trends, case study breakdowns, and industry insights delivered to your inbox.
          </p>

          <motion.form
            onSubmit={handleSubscribe}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="flex flex-col md:flex-row gap-3 p-2 border"
              style={{ borderColor: "#2A2A2A", backgroundColor: "rgba(255, 77, 28, 0.02)" }}
            >
              <div className="flex items-center flex-1 px-4">
                <Mail size={20} style={{ color: "#9A9490" }} />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="ml-3 flex-1 bg-transparent text-base outline-none placeholder-gray-600"
                  style={{
                    color: "#F2EDE8",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                style={{
                  border: "1px solid #FF4D1C",
                  color: "#FF4D1C",
                  fontFamily: "'DM Sans', sans-serif",
                  backgroundColor: "transparent",
                  letterSpacing: "0.15em",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.6 : 1,
                }}
                whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                onMouseEnter={(e) => {
                  if (status !== "loading") {
                    e.currentTarget.style.backgroundColor = "#FF4D1C";
                    e.currentTarget.style.color = "#0D0D0D";
                  }
                }}
                onMouseLeave={(e) => {
                  if (status !== "loading") {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#FF4D1C";
                  }
                }}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </div>

            {/* Status Messages */}
            {message && (
              <motion.div
                className="mt-4 flex items-center gap-3 p-4 rounded"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  backgroundColor:
                    status === "success"
                      ? "rgba(34, 197, 94, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                  borderLeft: `3px solid ${status === "success" ? "#22C55E" : "#EF4444"}`,
                }}
              >
                {status === "success" ? (
                  <CheckCircle size={20} style={{ color: "#22C55E" }} />
                ) : (
                  <AlertCircle size={20} style={{ color: "#EF4444" }} />
                )}
                <p
                  style={{
                    color: status === "success" ? "#22C55E" : "#EF4444",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  {message}
                </p>
              </motion.div>
            )}
          </motion.form>

          <p
            className="text-xs mt-6"
            style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
          >
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
