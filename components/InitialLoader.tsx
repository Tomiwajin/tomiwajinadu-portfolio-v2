"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Initial() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-background z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative text-6xl font-extrabold text-foreground flex">
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: -50 }}
              transition={{ duration: 1.5 }}
              exit={{ opacity: 0 }}
            >
              T
            </motion.span>
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: 50 }}
              transition={{ duration: 1.5 }}
              exit={{ opacity: 0 }}
            >
              J
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
