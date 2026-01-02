"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Visibility({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/";
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Only show the pop-in animation on initial page load
    const timer = setTimeout(() => setIsInitialLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <motion.main
        className="flex-1 p-6"
        initial={isInitialLoad ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.32, 0.72, 0, 1]
        }}
      >
        {children}
      </motion.main>
    </div>
  );
}
