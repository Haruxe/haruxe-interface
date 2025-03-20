import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-foreground/10">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} •{" "}
              <span className="text-foreground font-medium">
                Josh Francisco
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
