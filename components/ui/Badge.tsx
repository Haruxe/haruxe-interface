import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "primary" }) => {
  const variantClasses = {
    primary: "bg-gradient text-white",
    secondary: "glass text-white",
    outline: "border border-white/30 text-white",
  };

  return (
    <span
      className={`text-sm px-3 py-1 rounded-full inline-flex items-center ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
