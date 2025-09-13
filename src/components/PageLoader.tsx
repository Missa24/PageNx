"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#030e44] via-[#0a1f75] to-[#051a61]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#f7bd2d"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </svg>
        </div>
        {isMounted &&
          [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#f7bd2d]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#f7bd2d]/10 to-transparent blur-xl" />
          <div className="absolute -inset-8 rounded-full bg-gradient-to-b from-[#f7bd2d]/5 to-transparent blur-2xl" />
          <motion.h1
            className="relative z-10 bg-gradient-to-r from-[#f7bd2d] via-[#f9d76c] to-[#f7bd2d] bg-clip-text text-5xl font-bold text-transparent md:text-9xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
              textShadow: "0 0 30px rgba(247, 189, 45, 0.5)",
            }}
          >
            NOXUN
          </motion.h1>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-lg font-light tracking-widest text-white/80 uppercase">
            SIMPLIFICANDO TUS PROCESOS
          </p>
        </motion.div>
        <motion.div
          className="mt-12 h-1 w-48 overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#f7bd2d] to-[#f9d76c]"
            animate={{
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
      {isMounted && (
        <div className="pointer-events-none absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-[#f7bd2d]/20"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-[#f7bd2d]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-[#f7bd2d]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#f7bd2d]/10 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#f7bd2d]/10 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#f7bd2d]/10 to-transparent" />
      </div>
    </div>
  );
};

export default PageLoader;
