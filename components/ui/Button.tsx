import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline";
  external?: boolean;
  className?: string;
  size?: "default" | "small";
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "default",
  external = false,
  className = "",
  size = "default",
}) => {
  const baseClasses =
    "inline-block text-center font-medium transition-all duration-300";

  const variantClasses = {
    default: "bg-foreground text-background hover:bg-foreground/90",
    outline:
      "bg-transparent border border-foreground text-foreground hover:bg-foreground/10",
  };

  const sizeClasses = {
    default: "px-6 py-3 text-base",
    small: "px-4 py-2 text-sm",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
