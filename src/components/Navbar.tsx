import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24" />
                <path d="M21 3v9h-9" />
              </svg>
            </div>
            <span className="text-xl font-bold">Repo-Booster</span>
          </Link>
          
          {!isMobile && (
            <div className="flex-1 flex justify-center space-x-8">
              <HashLink 
                to="#features" 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Features
              </HashLink>
              <HashLink 
                to="#developers" 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Developers
              </HashLink>
              <HashLink 
                to="#integrations" 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Integrations
              </HashLink>
              <Link 
                to="/pricing" 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link 
                to="/docs" 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Docs
              </Link>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size={isMobile ? "sm" : "default"}>Sign in</Button>
            <Button size={isMobile ? "sm" : "default"}>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;