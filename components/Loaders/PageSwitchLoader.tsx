"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageSwitchLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 overflow-hidden pointer-events-none">
      <div className="w-full h-full bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-gradientMove" />
    </div>
  );
}
