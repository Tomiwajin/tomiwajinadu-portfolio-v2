"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageSwitchLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Top gradient loading bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-50 overflow-hidden pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          >
            <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />
          </motion.div>

          {/* Optional: Subtle page fade overlay */}
          <motion.div
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
