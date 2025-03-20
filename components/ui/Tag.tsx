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
      "bg-[#151515] text-white/90 dark:bg-[#151515] dark:text-white/90 light:bg-[#E5E5E5] light:text-black/90",
    dark: "bg-[#0D0D0D] text-white/70 dark:bg-[#0D0D0D] dark:text-white/70 light:bg-[#EBEBEB] light:text-black/70",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
