import { motion } from "framer-motion";
import ApiSnippet from "./developer/ApiSnippet";
import DeveloperFeatures from "./developer/DeveloperFeatures";
import DocumentationButtons from "./developer/DocumentationButtons";
import { Code2, Brain, Bot, Search, LineChart, Zap } from "lucide-react";

const Developer = () => {
  return (
    <section className="py-20 bg-background relative" id="developers">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for SEO Experts, Powered by AI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Integrate our AI-powered SEO assistant to automate optimization and boost your website's visibility in minutes.
            </p>
          </motion.div>
        </div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-muted-foreground">Custom trained AI models for expert SEO analysis and recommendations.</p>
          </div>
          <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20">
            <Bot className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 AI Assistant</h3>
            <p className="text-muted-foreground">Your personal SEO expert available around the clock for guidance and optimization.</p>
          </div>
          <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20">
            <Search className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Search Intent</h3>
            <p className="text-muted-foreground">Advanced algorithms to understand and match user search intentions.</p>
          </div>
        </motion.div>

        {/* API Integration Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <ApiSnippet />
          </motion.div>

          {/* Developer Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <DeveloperFeatures />
          </motion.div>

          {/* Additional Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20">
              <LineChart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-muted-foreground">Monitor your SEO performance with live metrics and instant insights.</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Keyword tracking
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Competitor analysis
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Performance metrics
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated Optimization</h3>
              <p className="text-muted-foreground">Let AI handle your SEO tasks with smart automations and workflows.</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Content optimization
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Meta tag generation
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Schema markup
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Documentation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <DocumentationButtons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Developer;