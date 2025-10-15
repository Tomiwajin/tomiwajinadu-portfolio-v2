import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utilis";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      if (!storedTheme) {
        localStorage.setItem("theme", "dark");
      }
    } else if (!storedTheme) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={cn(
        "relative z-50 p-3 rounded-full transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        isDarkMode
          ? "bg-slate-800/50 hover:bg-slate-700/60 focus:ring-yellow-400 backdrop-blur-sm"
          : "bg-slate-200/50 hover:bg-slate-300/60 focus:ring-blue-500 backdrop-blur-sm",
        "shadow-lg hover:shadow-xl",
        isAnimating && "animate-spin"
      )}
    >
      <div className="relative w-6 h-6">
        <Sun
          className={cn(
            "absolute inset-0 h-6 w-6 transition-all duration-500",
            isDarkMode
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-6 w-6 transition-all duration-500",
            isDarkMode
              ? "rotate-0 scale-100 opacity-100 text-slate-200"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  );
};
