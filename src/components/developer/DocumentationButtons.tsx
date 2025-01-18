import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

const DocumentationButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <a href="https://docs.repobooster.com/api" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="group">
          API Documentation
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </a>
      <a href="https://docs.repobooster.com/guides" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="group">
          Integration Guides
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </a>
    </div>
  );
};

export default DocumentationButtons;