import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="bg-secondary py-8 md:py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          <motion.div variants={itemVariants} className="opacity-100">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-foreground">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="opacity-100">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="opacity-100">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="opacity-100">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-base text-foreground/80 hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-muted mt-8 md:mt-12 pt-6 md:pt-8 text-center opacity-100"
        >
          <p className="text-sm md:text-base text-foreground/80">© 2024 Sifalo Pay. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;