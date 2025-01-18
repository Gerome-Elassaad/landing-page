import { Button } from "../ui/button";
import { Globe, ArrowRight, Link2, ShoppingCart, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto relative z-10 px-4 md:px-0"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center bg-primary/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-6 md:mb-8 border border-primary/20 hover:border-primary/40 transition-colors group">
          <span className="text-primary text-xs md:text-sm font-medium">Now Available Worldwide</span>
          <Globe className="w-3 h-3 md:w-4 md:h-4 ml-2 text-primary group-hover:rotate-12 transition-transform" />
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-accent">
            The native payments platform
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-primary">
            built for entrepreneurs
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4 md:px-0">
          Your go-to e-commerce platform for entrepreneurs, empowering businesses to build,
          grow, and scale their online presence with ease.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-20">
          <Button size="lg" className="w-full sm:w-auto min-w-[200px] group">
            Start Selling
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px]">
            Contact Sales
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          <div className="p-4 md:p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <Link2 className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4" />
            <h4 className="text-base md:text-lg font-semibold mb-2">Invoice Links</h4>
            <p className="text-sm md:text-base text-muted-foreground">Create payment links for invoices</p>
          </div>
          <div className="p-4 md:p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4" />
            <h4 className="text-base md:text-lg font-semibold mb-2">Product Sale</h4>
            <p className="text-sm md:text-base text-muted-foreground">Sell products with simple links</p>
          </div>
          <div className="p-4 md:p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4" />
            <h4 className="text-base md:text-lg font-semibold mb-2">Scheduling</h4>
            <p className="text-sm md:text-base text-muted-foreground">Book appointments easily</p>
          </div>
          <div className="p-4 md:p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <Users className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4" />
            <h4 className="text-base md:text-lg font-semibold mb-2">Crowdfunding</h4>
            <p className="text-sm md:text-base text-muted-foreground">Create fundraising campaigns</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroContent;