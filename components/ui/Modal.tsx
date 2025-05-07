import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  company: string;
  date: string;
  description?: string;
  link: string;
  skills?: string[];
  type?: string;
  banner: string;
}

const Modal: React.FC<ModalProps> = ({
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
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock scrolling and handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      // Lock scrolling - simpler approach that works with Lenis
      document.body.classList.add("overflow-hidden");

      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (isOpen) {
        // Restore scrolling
        document.body.classList.remove("overflow-hidden");

        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [isOpen, onClose]);

  // Close modal on escape key
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

  // Calculate scrollbar width on mount to prevent layout shift
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
    }
  }, []);

  // Debug log to check if modal is being rendered
  console.log("Modal isOpen:", isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-black/90 dark:bg-black/90 light:bg-white/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-11/12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl max-h-[90vh] overflow-auto bg-background rounded-md shadow-2xl"
            ref={modalRef}
          >
            <div className="relative h-60 sm:h-80 md:h-[400px] rounded-t-md overflow-hidden">
              <Image
                src={banner}
                alt={company}
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/40 dark:bg-black/40 light:bg-white/40 backdrop-blur-sm text-foreground/80 hover:text-foreground hover:bg-black/60 dark:hover:bg-black/60 light:hover:bg-white/60 transition-all"
                aria-label="Close modal"
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

              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-10 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-whiteblock uppercase text-foreground tracking-tighter leading-none mb-1 sm:mb-2">
                  {company}
                </h2>
                <p className="text-foreground/80 text-lg sm:text-xl font-light">{title}</p>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 lg:p-10 pt-4 sm:pt-6">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                {type && <Tag variant="dark">{type}</Tag>}
                <Tag variant="light">{date}</Tag>
              </div>

              <div className="mb-6 sm:mb-8 md:mb-10">
                <h3 className="text-foreground/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-medium">
                  About
                </h3>
                <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              {skills && skills.length > 0 && (
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <h3 className="text-foreground/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-medium">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#151515] dark:bg-[#151515] light:bg-[#E5E5E5] text-foreground/80 text-xs sm:text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-[1px] w-full bg-foreground/10 my-4 sm:my-6"></div>

              <div className="flex justify-end">
                <Button href={link} external>
                  Visit Website
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
