"use client";

import { useRouter } from "next/navigation";
import { useViewer } from "@/components/Context/ViewerProvider";
import { ThemeToggle } from "@/components/ThemeToggle/Themetoggle";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePage() {
  const { setViewer } = useViewer();
  const router = useRouter();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (viewer: "recruiter" | "developer" | "stalker") => {
    setViewer(viewer);
    router.push("/home");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center mt-40 gap-6 px-4"
      initial={isInitialLoad ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: [0.32, 0.72, 0, 1]
      }}
    >
      <div className="text-center max-w-xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Hi, Who are you viewing as?
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Choose your perspective to see tailored content
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <button
          onClick={() => handleSelect("recruiter")}
          className="flex items-center justify-between w-full px-20 py-3 rounded-xl border border-theme hover hover:scale-105 active:scale-95 transition"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/Avatars/recruiter.jpeg"
              alt="recuiter avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-sm font-semibold">Recruiter</div>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleSelect("developer")}
          className="flex items-center justify-between w-full px-20 py-3 rounded-xl border border-theme hover hover:scale-105 active:scale-95 transition"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/Avatars/developer.jpg"
              alt="recuiter avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-sm font-semibold">Developer</div>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleSelect("stalker")}
          className="flex items-center justify-between w-full px-20 py-3 rounded-xl border border-theme hover hover:scale-105 active:scale-95 transition"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/Avatars/stalker.jpg"
              alt="recuiter avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-sm font-semibold">Stalker</div>
            </div>
          </div>
        </button>
      </div>
      <ThemeToggle />
    </motion.div>
  );
}
