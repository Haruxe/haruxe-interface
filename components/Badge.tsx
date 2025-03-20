import React from "react";

interface BadgeProps {
  text: string;
  variant?: "light" | "dark";
}

const Badge: React.FC<BadgeProps> = ({ text, variant = "light" }) => {
  return (
    <span
      className={`py-1.5 px-4 text-sm font-medium rounded-full inline-block ${
        variant === "light"
          ? "bg-white text-black shadow-sm"
          : "bg-white/20 text-white backdrop-blur-sm"
      }`}
    >
      {text}
    </span>
  );
};

export default Badge;
