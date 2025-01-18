import { motion } from "framer-motion";
import IntegrationCard from "./integrations/IntegrationCard";

const Integrations = () => {
  const platforms = [
    {
      name: "WooCommerce",
      logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
      status: "Ready to use"
    },
    {
      name: "Odoo",
      logo: "https://cdn.worldvectorlogo.com/logos/odoo.svg",
      status: "Ready to use"
    },
    {
      name: "Shopify",
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      status: "Coming soon"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="integrations">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
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
            Seamless Integrations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with your favorite platforms and tools. Our API integrates with leading
            e-commerce platforms and business tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 max-w-3xl mx-auto"
        >
          {platforms.map((platform, index) => (
            <IntegrationCard key={index} {...platform} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;