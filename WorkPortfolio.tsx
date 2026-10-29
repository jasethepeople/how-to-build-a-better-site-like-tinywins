import { motion } from "framer-motion";
import { useLocation } from "wouter";

const caseStudies = [
  { id: "luxora", title: "Luxora", category: "Brand Strategy", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-1-FaaZBnnuHYAxoxoRVfvYQ7.webp" },
  { id: "finflow", title: "FinFlow", category: "UX/UI Design", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-2-jQFeYyknf46Nrz5NWEkSo6.webp" },
  { id: "studio", title: "Studio", category: "Environmental Design", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/about-section-62ZtE4KA2N4FYjrdb55WUu.webp" },
  { id: "prestige", title: "Prestige", category: "Marketing", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/case-study-3-3y8kYrN8Beb3UveSvCM8Pf.webp" },
];

export default function WorkPortfolio() {
  const [, navigate] = useLocation();

  return (
    <section id="work" className="py-20 md:py-32 bg-black">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16 md:mb-24">
          <p style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }} className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">Our Work</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }} className="text-5xl md:text-7xl font-black leading-tight">Selected Projects</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => navigate(`/case-study/${study.id}`)}
            >
              <img src={study.image} alt={study.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <p style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }} className="text-xs font-semibold tracking-widest uppercase mb-2">{study.category}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }} className="text-2xl font-bold">{study.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
