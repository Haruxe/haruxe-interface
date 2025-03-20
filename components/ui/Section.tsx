import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  speed?: number;
  fullWidth?: boolean;
  spacing?: "normal" | "large" | "small" | "minimal";
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = "",
  speed = 0,
  fullWidth = false,
  spacing = "normal",
}) => {
  const spacingClasses = {
    minimal: "py-8 md:py-12",
    small: "py-12 md:py-16",
    normal: "py-16 md:py-24",
    large: "py-24 md:py-32",
  };

  return (
    <section
      id={id}
      className={`${spacingClasses[spacing]} ${
        fullWidth ? "w-full" : "content-container"
      } ${className}`}
      data-lenis-scroll
      style={
        speed ? ({ "--lenis-speed": speed } as React.CSSProperties) : undefined
      }
    >
      <div className="relative">{children}</div>
    </section>
  );
};

export default Section;
