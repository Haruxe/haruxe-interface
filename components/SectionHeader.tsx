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
      className="flex items-center gap-6 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-full p-3 overflow-hidden shadow-lg">
        <Image
          src={icon}
          fill
          alt={`${title} icon`}
          className="object-contain"
        />
      </div>

      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl uppercase bg-gradient-to-r from-white to-white/80 text-black px-6 py-3 rounded-full shadow-md">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeader;
