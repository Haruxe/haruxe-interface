import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  icon: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => {
  return (
    <motion.div
      className="relative flex items-center gap-4 sm:gap-6 mb-10 md:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          zIndex: 0,
        }}
      />

      {/* Content (Icon and Title) - ensure z-index is higher */}
      <div className="relative z-10 flex items-center gap-4 sm:gap-6">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-full p-2 sm:p-3 overflow-hidden shadow-lg">
          <Image
            src={icon}
            fill
            alt={`${title} icon`}
            className="object-contain"
          />
        </div>

        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase bg-gradient-to-r from-white to-white/80 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
