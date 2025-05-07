import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";

interface SlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  company: string;
  date: string;
  description: string;
  link: string;
  skills?: string[];
  type?: string;
  banner: string;
}

const SlidePanel: React.FC<SlidePanelProps> = ({
  isOpen,
  onClose,
  title,
  company,
  date,
  description,
  link,
  skills,
  type,
  banner,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close panel on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-[9999] h-full w-full max-w-md bg-[#0A0A0A] shadow-xl overflow-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/60 transition-all"
              aria-label="Close panel"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5L5 13M5 5L13 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Banner image */}
            <div className="relative h-48 sm:h-56 md:h-64 w-full">
              <Image
                src={banner}
                alt={company}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-whiteblock uppercase text-white tracking-tighter leading-none mb-2">
                {company}
              </h2>
              <p className="text-white/80 text-lg sm:text-xl font-light mb-6">{title}</p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                {type && <Tag variant="dark">{type}</Tag>}
                <Tag variant="light">{date}</Tag>
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-white/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-medium">
                  About
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>

              {skills && skills.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-white/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-medium">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-[#151515] text-white/80 text-xs sm:text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-[1px] w-full bg-white/10 my-4 sm:my-6"></div>

              <Button href={link} external className="w-full text-sm sm:text-base">
                Visit Website
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlidePanel;
