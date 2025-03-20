import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      // Update position immediately for ultra-smooth tracking
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button") ||
        (e.target as HTMLElement).closest(".group")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "2px solid rgba(var(--foreground), 0.3)",
          left: 0,
          top: 0,
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "linear",
          scale: {
            type: "spring",
            damping: 20,
            stiffness: 300,
          },
        }}
      >
        {/* Inner dot - perfectly centered */}
        <div
          className="absolute rounded-full"
          style={{
            width: "4px",
            height: "4px",
            left: "50%",
            top: "50%",
            backgroundColor: "rgba(var(--foreground), 1)",
            transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
            transition: "transform 0.15s ease",
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
