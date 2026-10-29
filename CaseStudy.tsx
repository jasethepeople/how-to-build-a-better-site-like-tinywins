import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies: Record<string, any> = {
  luxora: {
    title: "Luxora Brand Identity",
    subtitle: "Complete brand transformation for luxury fragrances",
    category: "Brand Strategy",
    year: 2024,
    client: "Luxora Fragrances",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/hero-bg-QCaURVuuWd2psDhuE9bVNs.webp",
    challenge:
      "Luxora was a new luxury fragrance brand struggling to establish market presence in a saturated industry. They needed a distinctive identity that communicated premium quality and exclusivity.",
    solution:
      "We developed a comprehensive brand strategy centered on warm, energetic coral tones paired with sophisticated serif typography. The visual identity combines minimalist elegance with bold accents, creating a memorable presence across all touchpoints.",
    results: [
      "40% increase in brand recognition within 6 months",
      "3x engagement rate on social media",
      "Successfully launched in 15 retail locations",
      "Brand valuation increased by $2.5M",
    ],
    process: [
      {
        phase: "Research & Strategy",
        description: "Market analysis, competitor benchmarking, and brand positioning workshop",
      },
      {
        phase: "Visual Development",
        description: "Logo design, color system, typography, and brand guidelines",
      },
      {
        phase: "Implementation",
        description: "Packaging design, retail displays, and digital assets",
      },
    ],
    testimonial:
      "Neversus didn't just create a logo—they built a complete brand ecosystem that elevated our perception in the market. The strategic thinking behind every decision was evident.",
    testimonialAuthor: "Sarah Chen, CEO at Luxora Fragrances",
    website: "https://luxora.example.com",
  },
  finflow: {
    title: "FinFlow Digital Product Design",
    subtitle: "UX/UI design for fintech platform",
    category: "UX/UI Design",
    year: 2024,
    client: "FinFlow",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/hero-bg-QCaURVuuWd2psDhuE9bVNs.webp",
    challenge:
      "FinFlow needed a modern, intuitive interface for their financial management platform. Users were struggling with complex workflows and poor information hierarchy.",
    solution:
      "We redesigned the entire platform with a focus on simplicity and accessibility. Implemented a clean design system, streamlined workflows, and created intuitive data visualizations.",
    results: [
      "50% reduction in user onboarding time",
      "35% increase in daily active users",
      "NPS score improved from 32 to 72",
      "Mobile app downloads exceeded 100k",
    ],
    process: [
      {
        phase: "User Research",
        description: "Interviews, usability testing, and user journey mapping",
      },
      {
        phase: "Design System",
        description: "Component library, design tokens, and interaction patterns",
      },
      {
        phase: "Development Support",
        description: "Handoff documentation and implementation guidance",
      },
    ],
    testimonial:
      "The team understood our vision immediately and delivered a product that exceeded expectations. Their attention to detail in every interaction is remarkable.",
    testimonialAuthor: "Marcus Rodriguez, Founder at FinFlow",
    website: "https://finflow.example.com",
  },
  prestige: {
    title: "Prestige Campaign Strategy",
    subtitle: "Integrated marketing campaign for luxury watches",
    category: "Marketing",
    year: 2024,
    client: "Prestige Watches",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/hero-bg-QCaURVuuWd2psDhuE9bVNs.webp",
    challenge:
      "Prestige Watches needed to reach younger demographics while maintaining luxury positioning. Traditional marketing wasn't resonating with their target audience.",
    solution:
      "We developed an integrated campaign combining influencer partnerships, editorial content, and experiential events. Leveraged storytelling to create emotional connections with the brand.",
    results: [
      "2.5M impressions across all channels",
      "15% increase in online sales",
      "Successfully launched limited edition collection",
      "Brand sentiment improved by 45%",
    ],
    process: [
      {
        phase: "Strategy Development",
        description: "Audience analysis, channel selection, and messaging framework",
      },
      {
        phase: "Content Creation",
        description: "Photography, videography, and editorial content production",
      },
      {
        phase: "Campaign Execution",
        description: "Media buying, influencer coordination, and event management",
      },
    ],
    testimonial:
      "Neversus delivered results that exceeded our KPIs by 40%. Their creative approach and strategic execution made all the difference.",
    testimonialAuthor: "Elena Volkov, CMO at Prestige Watches",
    website: "https://prestige.example.com",
  },
  studio: {
    title: "Studio Workspace Branding",
    subtitle: "Environmental design and branding for creative workspace",
    category: "Environmental Design",
    year: 2023,
    client: "Modern Design Studio",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/hero-bg-QCaURVuuWd2psDhuE9bVNs.webp",
    challenge:
      "Modern Design Studio wanted to create an inspiring workspace that reflected their creative values and attracted top talent.",
    solution:
      "We designed an immersive brand experience through environmental graphics, wayfinding systems, and interior design elements that reinforced brand identity.",
    results: [
      "Increased employee satisfaction by 60%",
      "Became a destination for industry events",
      "Featured in 5 design publications",
      "Attracted 3 major clients due to workspace impression",
    ],
    process: [
      {
        phase: "Space Planning",
        description: "Layout design, traffic flow, and functional zones",
      },
      {
        phase: "Brand Integration",
        description: "Graphics, signage, and brand touchpoints",
      },
      {
        phase: "Implementation",
        description: "Project management and installation oversight",
      },
    ],
    testimonial:
      "The workspace transformed how we work and how clients perceive us. It's become a powerful marketing tool in itself.",
    testimonialAuthor: "James Mitchell, Creative Director at Modern Design Studio",
    website: "https://moderndesignstudio.example.com",
  },
};

export default function CaseStudy() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const study = caseStudies[params.id || ""];

  if (!study) {
    return (
      <div className="min-h-screen bg-black text-cream">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-coral hover:underline flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative min-h-[60vh] flex items-end pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${study.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="container relative z-10 pb-12">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-coral mb-8 hover:gap-3 transition-all"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            Back to Work
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-coral text-sm font-semibold tracking-widest uppercase mb-4">
              {study.category} • {study.year}
            </p>
            <h1 className="text-6xl md:text-7xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {study.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">{study.subtitle}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Challenge
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">{study.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Solution
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">{study.solution}</p>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          className="bg-gradient-to-r from-coral/10 to-transparent border border-coral/20 rounded-lg p-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.results.map((result: string, idx: number) => (
              <motion.div
                key={idx}
                className="flex gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0" />
                <p className="text-lg text-gray-200">{result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.process.map((step: any, idx: number) => (
              <motion.div
                key={idx}
                className="border border-gray-700 rounded-lg p-8 hover:border-coral transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-coral text-sm font-semibold tracking-widest uppercase mb-4">
                  {idx + 1}. {step.phase}
                </div>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonial */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-light mb-8 italic text-gray-200">
              "{study.testimonial}"
            </p>
            <p className="text-coral font-semibold">{study.testimonialAuthor}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Start Your Project?
          </h2>
          <motion.button
            className="px-12 py-4 border-2 border-coral text-coral font-semibold tracking-widest uppercase hover:bg-coral hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
