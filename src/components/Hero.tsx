import { motion } from "framer-motion";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;