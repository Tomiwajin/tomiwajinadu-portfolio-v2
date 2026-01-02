"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Initial() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-background z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            scale: 1.5,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 1 }}
            exit={{
              scale: 3,
            }}
            transition={{
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            {/* Outer spinning gradient ring - Instagram style */}
            <motion.div
              className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full"
              style={{
                background: "linear-gradient(45deg, #6366f1, #8b5cf6, #d946ef, #6366f1)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                rotate: 360,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                rotate: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                },
                backgroundPosition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            {/* Inner white/bg circle */}
            <motion.div
              className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-background flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />

            {/* Initials with pulsing effect */}
            <motion.div
              className="relative z-10 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.1, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 0.8,
                times: [0, 0.6, 1],
                ease: "easeOut",
              }}
            >
              <motion.span
                className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                TJ
              </motion.span>
            </motion.div>

            {/* Subtle outer glow pulse */}
            <motion.div
              className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-indigo-500/20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="absolute bottom-20 md:bottom-32 text-sm md:text-base font-medium text-foreground/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Loading your experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
