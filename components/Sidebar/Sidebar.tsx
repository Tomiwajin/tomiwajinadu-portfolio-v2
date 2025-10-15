"use client";

import { GithubIcon, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utilis";
import React, { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  Folder,
  MessageSquare,
  User,
  Lightbulb,
} from "lucide-react";
import { ThemeToggle } from "../ThemeToggle/Themetoggle";

const navItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Contact", href: "/contact", icon: MessageSquare },
  { name: "Skills", href: "/skills", icon: Lightbulb },
  { name: "Profile", href: "/", icon: User },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <aside className="fixed hidden md:flex h-screen w-62 flex-col border-r z-40 px-5 pt-10 border-theme opacity-0 animate-fade-in-left">
        <Link
          href="/"
          className="text-2xl font-cookie font-bold mb-10 pl-3 hover:opacity-80 transition-opacity"
        >
          Tomiwa Jinadu
        </Link>

        <nav className="flex flex-col gap-6">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className={cn(
                "flex items-center gap-4 hover-nav",
                isActive(href) ? "bg-selected" : "border-theme"
              )}
            >
              <Icon size={24} />
              <span>{name}</span>
            </Link>
          ))}
          <div className="flex flex-col items-center gap-4 mt-16 mr-40">
            <ThemeToggle />
            <a
              className="hover-icon"
              href="https://www.linkedin.com/in/oluwatomiwa-jinadu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              className="hover-icon"
              href="https://github.com/Tomiwajin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={24} />
            </a>
          </div>
        </nav>
      </aside>

      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-background/80 backdrop-blur-md border-b border-theme z-50 flex items-center justify-between px-5">
        <Link
          href="/"
          className="text-xl font-extrabold font-mono hover:opacity-80 transition-opacity"
        >
          TJ
        </Link>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 hover:scale-105 active:scale-95"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 nav-theme z-30 transition-opacity duration-300 md:hidden"
        />
      )}

      <nav
        className={cn(
          "fixed top-0 left-0 h-full w-62 bg-black/70 text-white backdrop-blur-lg z-50",
          "flex flex-col items-start justify-start gap-2 px-6 transform transition-transform duration-300 ease-out md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Link
          href="/"
          className="text-2xl font-cookie font-bold mb-10 pl-3 mt-30"
          onClick={() => setIsMenuOpen(false)}
        >
          Tomiwa Jinadu
        </Link>

        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 text-xl hover-nav-mobile"
          >
            <Icon size={28} />
            <span>{name}</span>
          </Link>
        ))}

        <div className="flex items-center gap-6 mt-20">
          <ThemeToggle />
          <a
            className="hover-icon"
            href="https://www.linkedin.com/in/oluwatomiwa-jinadu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            className="hover-icon"
            href="https://github.com/Tomiwajin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={24} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
