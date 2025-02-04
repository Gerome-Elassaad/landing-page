import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Developer from "@/components/Developer";
import Stats from "@/components/Stats";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import { ArcadeEmbed } from "@/components/ArcadeEmbed";

const Index: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Page Components */}
      <Navbar />
      <Hero />
      <Stats />
      <ArcadeEmbed />
      <Features />
      <Security />
      <Developer />
      <Integrations />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
