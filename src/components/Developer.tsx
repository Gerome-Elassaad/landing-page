import { Button } from "./ui/button";
import { Copy, Terminal, Code2, Zap, ExternalLink } from "lucide-react";
import { toast } from "./ui/use-toast";
import { motion } from "framer-motion";
import ApiSnippet from "./developer/ApiSnippet";
import DeveloperFeatures from "./developer/DeveloperFeatures";
import DocumentationButtons from "./developer/DocumentationButtons";

const Developer = () => {
  const apiSnippet = {
    url: "https://api.repo-booster.com/api/gateway/",
    method: "POST",
    headers: {
      "Authorization": "Basic {YOUR_API_KEY}",
      "Content-Type": "application/json"
    },
    body: {
      account: "65xxxxxxx",
      gateway: "edahab",
      amount: "100",
      currency: "USD",
      order_id: "ABC123"
    }
  };
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The code snippet has been copied to your clipboard.",
    });
  };
  return (
    <section className="py-20 bg-background relative" id="developers">
      {/* Background Elements */}
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Start accepting payments in minutes with our developer-friendly REST API.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://developer.sifalo.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group">
                  Mobile Money API Docs
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://developer.sifalopay.com/sifalo-pay-checkout" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group">
                  Checkout API Docs
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <DocumentationButtons />
          </motion.div>
        </div>
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-secondary/80 backdrop-blur-sm p-8 rounded-lg overflow-hidden border border-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  REST API Example
                </h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleCopy(JSON.stringify(apiSnippet, null, 2))}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="px-2 py-1 bg-primary/20 rounded text-primary font-mono">POST</span>
                  <span className="font-mono text-foreground">{apiSnippet.url}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Headers:</p>
                  <pre className="bg-black/20 p-3 rounded-lg overflow-x-auto">
                    <code className="text-sm text-foreground font-mono">
                      {JSON.stringify(apiSnippet.headers, null, 2)}
                    </code>
                  </pre>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Request Body:</p>
                  <pre className="bg-black/20 p-3 rounded-lg overflow-x-auto">
                    <code className="text-sm text-foreground font-mono">
                      {JSON.stringify(apiSnippet.body, null, 2)}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <ApiSnippet />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
              <Terminal className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quick Integration</h3>
              <p className="text-muted-foreground">
                Integrate payments in minutes with our simple API
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
              <Code2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Clear Documentation</h3>
              <p className="text-muted-foreground">
                Comprehensive API documentation with examples
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Developer-first support whenever you need it
              </p>
            </div>
            <DeveloperFeatures />
          </motion.div>
        </div>
      </div>
