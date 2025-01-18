import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Shield, Globe2, ArrowUpRight, Clock } from "lucide-react";

const stats = [
  {
    value: "99.99%",
    label: "Uptime",
    icon: Clock,
    description: "Enterprise-grade reliability"
  },
  {
    value: "150+",
    label: "Countries",
    icon: Globe2,
    description: "Global coverage"
  },
  {
    value: "10M+",
    label: "Transactions",
    icon: ArrowUpRight,
    description: "Processed annually"
  },
  {
    value: "24/7",
    label: "Support",
    icon: Shield,
    description: "Always here to help"
  },
];

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section className="py-20 bg-background relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;