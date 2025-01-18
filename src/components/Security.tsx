import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, UserCheck } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and infrastructure"
    },
    {
      icon: Lock,
      title: "PCI DSS Level 1",
      description: "Highest level of payment security certification"
    },
    {
      icon: FileCheck,
      title: "Data Encryption",
      description: "End-to-end encryption for all transactions"
    },
    {
      icon: UserCheck,
      title: "Fraud Prevention",
      description: "AI-powered fraud detection and prevention"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="security">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your security is our top priority. We implement the highest standards of security
            to protect your business and customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;