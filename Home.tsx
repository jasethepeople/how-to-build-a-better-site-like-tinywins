import Navbar from "@/components/Navbar";
import HeroPremium from "@/components/HeroPremium";
import WorkPortfolioEnhanced from "@/components/WorkPortfolioEnhanced";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MetricsDashboard from "@/components/MetricsDashboard";
import BlogEnhanced from "@/components/BlogEnhanced";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450892053/2swqhfSawdT2pEvWFqfHkB/hero-bg-QCaURVuuWd2psDhuE9bVNs.webp";

  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <HeroPremium backgroundImage={heroImage} />
      <WorkPortfolioEnhanced />
      <About />
      <Services />
      <MetricsDashboard />
      <section className="py-20 md:py-32 bg-black">
        <div className="container">
          <h2 className="text-5xl md:text-7xl font-black mb-16" style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}>
            What Clients Say
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>
      <Testimonials />
      <BlogEnhanced />
      <Newsletter />
      <Footer />
    </div>
  );
}
