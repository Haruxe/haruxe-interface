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
    "inline-flex items-center justify-center rounded-md font-medium tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    default: "px-6 py-3 text-sm sm:text-base",
    small: "px-4 py-2 text-xs sm:text-sm",
  };

  const variantClasses = {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
    outline:
      "border border-primary text-primary hover:bg-primary/10 hover:text-primary/90",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

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
