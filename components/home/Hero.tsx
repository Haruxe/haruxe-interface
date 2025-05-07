import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Split the title into individual letters for animation
  const titleLetters = "HARUXE".split("");

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center py-16 sm:py-24 md:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-background" />

        {/* CSS Grid pattern overlay */}
        <div className="absolute inset-0 opacity-50">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px sm:40px sm:40px",
            }}
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-foreground/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 6,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-8 w-full">
        <motion.h1
          className="text-foreground font-whiteblock text-[clamp(2.5rem,15vw,14rem)] sm:text-[clamp(3rem,17vw,18rem)] tracking-tighter leading-none mb-4 sm:mb-6 flex justify-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="text-foreground/60 text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Web3 Developer & Researcher
        </motion.div>
      </div>

      {/* Fixed scroll indicator at the bottom of the viewport */}
      <div className="fixed bottom-6 sm:bottom-8 inset-x-0 flex justify-center items-center z-20">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.p
            className="text-foreground/60 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.p>
          <motion.div
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground/30 rounded-full flex items-center justify-center"
            initial={{ y: 0 }}
          >
            <motion.div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-foreground rounded-full"
              animate={{
                y: [0, 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
