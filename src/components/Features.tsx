import { Brain, Bot, Search, LineChart, Shield, Zap, Database, Globe2, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Custom trained AI models for expert SEO analysis and recommendations",
  },
  {
    icon: Bot,
    title: "24/7 AI Assistant",
    description: "Your personal SEO expert available around the clock for guidance",
  },
  {
    icon: Search,
    title: "Smart Search Intent",
    description: "Advanced algorithms to understand and match user search intentions",
  },
  {
    icon: Globe2,
    title: "Global Coverage",
    description: "Optimize your content for search engines worldwide with region-specific insights",
  },
  {
    icon: Shield,
    title: "Content Protection",
    description: "Advanced AI-powered content quality and plagiarism detection",
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description: "Get real-time SEO improvements and implement them with one click",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Comprehensive SEO analytics and reporting dashboard",
  },
  {
    icon: LineChart,
    title: "Rank Tracking",
    description: "Real-time rank tracking and performance monitoring tools",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Enterprise-grade security to protect your SEO data and strategies",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Boost your visibility with AI-powered SEO tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've built a comprehensive AI assistant that helps you optimize your content,
            track rankings, and improve your search visibility with powerful automation tools.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-muted hover:border-primary/50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;