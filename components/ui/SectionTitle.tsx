import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a repeating title string (repeat enough times to ensure it covers the width)
  // We'll create two identical strings side by side for seamless looping
  const repeatedTitle = Array(20).fill(`${title} • `).join("");

  // Randomize direction on mount
  const direction = useRef(Math.random() > 0.5 ? -1 : 1);

  // Calculate animation duration based on content length for smoother animation
  const animationDuration = Math.max(20, repeatedTitle.length * 0.2);

  // Set up the animation for seamless looping
  useEffect(() => {
    // For seamless looping, we need to animate from 0% to -50% (half the content width)
    // This works because we have two identical strings side by side
    controls.start({
      x: direction.current > 0 ? "-50%" : "0%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: animationDuration,
          ease: "linear",
        },
      },
    });
  }, [controls, animationDuration]);

  // Reduced parallax effect based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <div ref={containerRef} className="mb-16 md:mb-24 w-full overflow-hidden">
      <motion.div style={{ y }} className="relative">
        <div className="relative overflow-hidden">
          <motion.div
            animate={controls}
            initial={{ x: direction.current > 0 ? "0%" : "-50%" }}
            className="whitespace-nowrap flex"
          >
            {/* First copy of the text */}
            <span className="block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase text-foreground tracking-tighter leading-none">
                {repeatedTitle}
              </h2>
            </span>

            {/* Second copy of the text (identical) for seamless looping */}
            <span className="block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase text-foreground tracking-tighter leading-none">
                {repeatedTitle}
              </h2>
            </span>
          </motion.div>
        </div>
      </motion.div>
      <div className="h-[1px] w-full bg-foreground/10 mt-8"></div>
    </div>
  );
};

export default SectionTitle;
