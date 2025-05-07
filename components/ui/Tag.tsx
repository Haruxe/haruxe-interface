import React from "react";

interface TagProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = "light",
  className = "",
}) => {
  const variantClasses = {
    light:
      "bg-foreground/10 text-foreground/80 dark:bg-white/10 dark:text-white/80 light:bg-black/5 light:text-black/70",
    dark: "bg-foreground/20 text-foreground/90 dark:bg-white/20 dark:text-white/90 light:bg-black/10 light:text-black/80",
  };

  return (
    <span
      className={`inline-block px-3 py-1.5 text-xs font-medium rounded-full ${variantClasses[variant]} ${className} tracking-wider`}
    >
      {children}
    </span>
  );
};

export default Tag;
