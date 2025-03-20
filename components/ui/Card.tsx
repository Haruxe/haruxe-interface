import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark";
  delay?: number;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  delay = 0,
  onClick,
}) => {
  return (
    <div
      className={`bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#F5F5F5] transition-all duration-500 rounded-md ${className}`}
      data-lenis-scroll
      data-lenis-scroll-offset="100"
      style={{
        transitionDelay: delay ? `${delay * 0.1}s` : undefined,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
