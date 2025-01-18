import { motion } from "framer-motion";

interface IntegrationCardProps {
  name: string;
  logo: string;
  status: string;
}

const IntegrationCard = ({ name, logo, status }: IntegrationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt={name}
          className="h-12 w-auto filter invert opacity-75"
        />
        <span className="text-lg font-semibold">{name}</span>
      </div>
      <span className="text-sm text-muted-foreground">{status}</span>
    </motion.div>
  );
};

export default IntegrationCard;