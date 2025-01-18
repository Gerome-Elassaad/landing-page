import { Code2, LineChart, Globe2, Shield, Database, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Easy Integration",
    description: "Simple API integration with our AI assistant and comprehensive documentation",
  },
  {
    icon: LineChart,
    title: "Real-time Analysis",
    description: "Get instant AI-powered SEO insights and recommendations",
  },
  {
    icon: Globe2,
    title: "Global SEO Coverage",
    description: "Optimize for search engines worldwide with region-specific insights",
  },
  {
    icon: Shield,
    title: "Advanced AI Engine",
    description: "Powered by cutting-edge AI models trained on SEO best practices",
  },
  {
    icon: Database,
    title: "Comprehensive Data",
    description: "Access detailed SEO metrics and competitive analysis",
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description: "Implement AI-suggested improvements with one click",
  },
];

const DeveloperFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          <feature.icon className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DeveloperFeatures;