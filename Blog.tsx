import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Psychology of Brand Color: Why Coral Dominates Luxury Markets",
    excerpt: "Discover how color psychology influences consumer behavior and why premium brands are shifting toward warm, energetic palettes.",
    category: "Brand Strategy",
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-1-FaaZBnnuHYAxoxoRVfvYQ7.webp",
    slug: "brand-color-psychology",
  },
  {
    id: 2,
    title: "From Concept to Reality: Building a Brand Identity That Lasts",
    excerpt: "A deep dive into our process for creating timeless brand identities that evolve with markets while maintaining core values.",
    category: "Design Process",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-2-jQFeYyknf46Nrz5NWEkSo6.webp",
    slug: "brand-identity-process",
  },
  {
    id: 3,
    title: "2026 Design Trends: What's Next for Creative Studios",
    excerpt: "Exploring emerging design trends, from AI-assisted workflows to sustainable branding practices shaping the industry.",
    category: "Trends",
    date: "March 5, 2026",
    readTime: "6 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/about-section-62ZtE4KA2N4FYjrdb55WUu.webp",
    slug: "2026-design-trends",
  },
  {
    id: 4,
    title: "Why Minimalism Fails: The Case for Maximalist Brand Experiences",
    excerpt: "Challenging conventional design wisdom—how bold, layered brand experiences create stronger emotional connections.",
    category: "Design Philosophy",
    date: "February 28, 2026",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-3-3y8kYrN8Beb3UveSvCM8Pf.webp",
    slug: "maximalist-branding",
  },
];

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-6 overflow-hidden h-64 md:h-80">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-4 text-xs">
          <span
            className="font-semibold tracking-widest uppercase"
            style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          >
            {post.category}
          </span>
          <span style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}>
            {post.date}
          </span>
          <span style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}>
            {post.readTime}
          </span>
        </div>

        <h3
          className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-orange-500 transition-colors"
          style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
        >
          {post.title}
        </h3>

        <p
          className="text-base leading-relaxed"
          style={{ color: "#D4CECC", fontFamily: "'DM Sans', sans-serif" }}
        >
          {post.excerpt}
        </p>

        <motion.button
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mt-4"
          style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
          whileHover={{ x: 5 }}
        >
          Read Article
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-black">
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
            Insights
          </p>
          <h2
            className="text-5xl md:text-7xl font-black leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
          >
            Latest Articles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
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
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
