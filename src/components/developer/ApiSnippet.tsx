import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "../ui/use-toast";

const ApiSnippet = () => {
  const [copied, setCopied] = useState(false);

  const apiCode = `// Initialize the AI SEO Assistant
const seoAssistant = new RepoBooster.Assistant({
  apiKey: 'your_api_key',
  model: 'seo-expert-v1'
});

// Get AI-powered SEO recommendations
const analysis = await seoAssistant.analyze({
  url: 'https://your-website.com',
  options: {
    contentOptimization: true,
    keywordResearch: true,
    technicalSEO: true,
    competitorAnalysis: true
  }
});

// Access detailed insights and recommendations
console.log(analysis.score);           // Overall SEO health score
console.log(analysis.keywords);        // Keyword opportunities
console.log(analysis.content);         // Content optimization suggestions
console.log(analysis.technical);       // Technical improvements
console.log(analysis.competitors);     // Competitor insights`;

  const handleCopy = () => {
    navigator.clipboard.writeText(apiCode);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "API code snippet has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-secondary/80 backdrop-blur-sm px-4 py-2">
        <span className="text-sm font-medium">AI SEO Assistant Example</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 bg-secondary/50 backdrop-blur-sm overflow-x-auto">
        <code className="text-sm">{apiCode}</code>
      </pre>
    </div>
  );
};

export default ApiSnippet;