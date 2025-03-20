import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  external = false,
  className = "",
  onClick,
}) => {
  const buttonClasses = `bg-gradient-to-r from-white to-white/90 text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        className={buttonClasses}
      >
        <motion.span
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
