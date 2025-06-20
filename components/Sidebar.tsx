"use client";

import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utilis";
import React, { useState } from "react";
import {
  Home,
  Briefcase,
  Folder,
  MessageSquare,
  User,
  Lightbulb,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#select-profile", icon: Home },
  { name: "Professional", href: "#professional", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Contact", href: "#contact", icon: MessageSquare },
  { name: "Skills", href: "#skills", icon: Lightbulb },
  { name: "Profile", href: "#profile", icon: User },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 flex-col border-r border-white/35 text-white bg-black z-40 px-5 pt-10">
        <a href="#hero" className="text-3xl font-cookie font-bold mb-10">
          Tomiwa Jinadu
        </a>

        <nav className="flex flex-col gap-6">
          {navItems.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-4 hover-nav"
            >
              <Icon size={24} />
              <span>{name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* MOBILE MENU BUTTON (top right) */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed top-5 right-5 md:hidden p-2 text-white z-50"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE NAV OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 px-6 text-white transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 text-xl hover-nav"
          >
            <Icon size={28} />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
