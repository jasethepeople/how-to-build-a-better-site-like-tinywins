import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Luxora Brand Identity",
    category: "Brand Strategy",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-1-FaaZBnnuHYAxoxoRVfvYQ7.webp",
    description: "Complete brand overhaul for luxury fragrance house",
    challenge: "Luxora faced intense competition in the luxury fragrance market with a dated brand identity that failed to resonate with millennial and Gen-Z consumers.",
    solution: "We developed a sophisticated visual identity system combining minimalist design with sensory-driven storytelling. New brand guidelines, packaging design, and digital presence.",
    results: ["45% increase in brand recognition", "3x social media engagement", "Expanded to 12 new markets"],
  },
  {
    id: 2,
    title: "Digital Product Design",
    category: "UX/UI Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-2-jQFeYyknf46Nrz5NWEkSo6.webp",
    description: "Mobile app redesign for fintech startup",
    challenge: "FinFlow's app had high user churn due to complex navigation and poor onboarding experience. Users struggled to understand core features.",
    solution: "Complete UX overhaul with streamlined navigation, intuitive onboarding flow, and modern visual design. Implemented accessibility standards and performance optimization.",
    results: ["62% reduction in churn rate", "4.8-star app rating", "2M+ downloads"],
  },
  {
    id: 3,
    title: "Studio Workspace",
    category: "Environmental Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/about-section-62ZtE4KA2N4FYjrdb55WUu.webp",
    description: "Creative workspace branding and design",
    challenge: "A creative agency needed to rebrand their physical and digital workspace to reflect their premium positioning and attract top talent.",
    solution: "Comprehensive environmental branding including office design, signage, digital displays, and brand guidelines. Created immersive brand experience.",
    results: ["35% increase in talent applications", "Featured in 5 design publications", "Client retention increased to 92%"],
  },
  {
    id: 4,
    title: "Campaign Strategy",
    category: "Marketing",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-3-3y8kYrN8Beb3UveSvCM8Pf.webp",
    description: "Integrated marketing campaign for luxury brand",
    challenge: "Luxury watchmaker needed to launch new collection and increase brand awareness among affluent demographics in competitive market.",
    solution: "Multi-channel campaign combining editorial content, influencer partnerships, experiential events, and targeted digital advertising.",
    results: ["$8.5M revenue from campaign", "15K social followers gained", "Sold out first collection in 6 weeks"],
  },
  {
    id: 5,
    title: "Visual Identity System",
    category: "Brand Strategy",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-1-FaaZBnnuHYAxoxoRVfvYQ7.webp",
    description: "Comprehensive design system for tech startup",
    challenge: "Startup needed cohesive visual language across 15+ digital products with inconsistent branding.",
    solution: "Built modular design system with reusable components, color palettes, and typography guidelines ensuring consistency across all touchpoints.",
    results: ["50% faster design handoff", "Unified brand perception", "Reduced design debt by 70%"],
  },
  {
    id: 6,
    title: "E-Commerce Transformation",
    category: "UX/UI Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-2-jQFeYyknf46Nrz5NWEkSo6.webp",
    description: "Complete redesign of luxury retail platform",
    challenge: "E-commerce platform had 40% cart abandonment rate and poor mobile experience affecting revenue.",
    solution: "Redesigned checkout flow, implemented progressive disclosure, optimized for mobile-first experience with personalization engine.",
    results: ["Cart abandonment reduced to 18%", "32% increase in AOV", "$2.3M additional annual revenue"],
  },
];

const categories = ["All", "Brand Strategy", "UX/UI Design", "Environmental Design", "Marketing"];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-square overflow-hidden bg-black">
        <motion.img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-black/40"
          animate={{ opacity: isHovered ? 0.75 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            {study.category}
          </span>
        </div>
        <h3
          className="text-2xl md:text-3xl font-bold mb-2 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
        >
          {study.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#B8B2AD", fontFamily: "'DM Sans', sans-serif" }}
        >
          {study.description}
        </p>
        <motion.div
          className="mt-4 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <p
            className="text-xs font-semibold"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            Key Results:
          </p>
          {study.results.map((result, i) => (
            <p
              key={i}
              className="text-xs"
              style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
            >
              • {result}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function WorkPortfolioEnhanced() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-32 bg-black">
      <div className="container">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            Our Work
          </p>
          <h2
            className="text-5xl md:text-7xl font-black leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
          >
            Selected Projects
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 md:gap-4 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className="px-6 py-3 text-xs md:text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                border: activeFilter === category ? "1px solid #FF4D1C" : "1px solid #3A3A3A",
                color: activeFilter === category ? "#FF4D1C" : "#9A9490",
                backgroundColor: activeFilter === category ? "rgba(255, 77, 28, 0.1)" : "transparent",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.15em",
              }}
              whileHover={{
                borderColor: "#FF4D1C",
                color: "#FF4D1C",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
