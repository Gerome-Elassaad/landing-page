import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "./ui/use-toast";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest updates soon.",
    });
    setEmail("");
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center opacity-100">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl font-bold mb-4 text-foreground"
          >
            Claim Free Resources
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground mb-8 opacity-100"
          >
            Get exclusive access to case studies, engineering insights, and best practices.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-4 opacity-100"
          >
            <Input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </motion.form>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-foreground mt-4 opacity-100"
          >
            By submitting your email address, you agree to our privacy policy.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;