import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Sun, Moon } from "styled-icons/bootstrap";

const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize dark mode from localStorage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // If there's a saved preference, use it; otherwise, use system preference
    const initialDarkMode =
      savedMode !== null ? savedMode === "true" : prefersDark;

    setDarkMode(initialDarkMode);

    // Apply the initial theme
    document.documentElement.classList.toggle("light-mode", !initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Create and append the transition element
    const transitionElement = document.createElement("div");
    transitionElement.className = "mode-transition-element";
    document.body.appendChild(transitionElement);

    // Force a reflow to ensure the initial state is applied
    void transitionElement.offsetWidth;

    // Trigger the animation
    transitionElement.classList.add("animate");

    // After animation completes, update the actual mode
    setTimeout(() => {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);

      // Save preference to localStorage
      localStorage.setItem("darkMode", String(newDarkMode));

      // Toggle the light-mode class on the html element
      document.documentElement.classList.toggle("light-mode", !newDarkMode);

      // Remove the transition element
      document.body.removeChild(transitionElement);
      setIsTransitioning(false);
    }, 600); // Match this with the CSS animation duration
  };

  return (
    <header className="w-full z-50">
      <div className="w-full bg-background dark:bg-black light:bg-[#FFFFFD] transition-colors duration-300">
        <div className="flex items-center justify-between h-16 px-6 md:px-12">
          <div />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
