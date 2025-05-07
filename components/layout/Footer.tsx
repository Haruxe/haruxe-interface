import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/haruxe",
      icon: <Github size={20} className="text-foreground/70 hover:text-primary transition-colors" />,
      label: "GitHub",
    },
    {
      href: "https://twitter.com/haruxeETH",
      icon: <Twitter size={20} className="text-foreground/70 hover:text-primary transition-colors" />,
      label: "Twitter",
    },
    {
      href: "https://www.linkedin.com/in/joshfrancisco",
      icon: <Linkedin size={20} className="text-foreground/70 hover:text-primary transition-colors" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:haruxe@proton.me",
      icon: <Mail size={20} className="text-foreground/70 hover:text-primary transition-colors" />,
      label: "Email",
    },
  ];

  return (
    <motion.footer
      className="bg-background/50 border-t border-white/10 py-8 sm:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Logo and Copyright - Stacked on mobile, side-by-side on md+ */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <Link href="/" className="block">
              <span className="text-2xl font-whiteblock text-foreground hover:text-primary transition-colors">
                HARUXE
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-foreground/60 mt-1 sm:mt-0 md:ml-2">
              &copy; {currentYear} Haruxe. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full hover:bg-white/10 transition-colors" // Added padding for better touch target
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
