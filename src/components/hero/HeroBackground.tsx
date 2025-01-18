import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" 
        />
      </div>
      
      {/* Network Map Graphics */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
        {/* Animated Connection Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-primary/20 to-accent/20"
            style={{
              top: `${20 + i * 15}%`,
              left: '20%',
              width: '60%',
              transform: 'rotate(-5deg)'
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: 0.5,
              transition: {
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HeroBackground;