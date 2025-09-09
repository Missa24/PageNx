"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-4 bottom-8 z-[9999] max-w-full overflow-hidden sm:right-6">
      {isVisible && (
        <motion.div
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#f7bd2d] shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg sm:h-12 sm:w-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <svg
            className="h-5 w-5 text-[#030d41] sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
