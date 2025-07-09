"use client";

import { GithubIcon, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
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
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="fixed hidden md:flex h-screen w-62 flex-col border-r z-40 px-5 pt-10 border-theme">
        <Link href="/" className="text-2xl font-cookie font-bold mb-10 pl-3">
          {" "}
          Tomiwa Jinadu
        </Link>

        <nav className="flex flex-col gap-6">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setSelectedCategory(name)}
              className={cn(
                "flex items-center gap-4 hover-nav",
                selectedCategory === name ? "bg-selected" : "border-theme"
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
              target="
              blank_"
            >
              <Linkedin size={24} name="Linkedin" />
            </a>
            <a
              className="hover-icon"
              href="https://github.com/Tomiwajin"
              target="blank_"
            >
              <GithubIcon size={24} />
            </a>
          </div>
        </nav>
      </aside>

      {/* MOBILE MENU BUTTON  */}
      <div className="md:hidden fixed top-0 w-full h-16 bg-background z-50">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="fixed top-5 right-5 md:hidden p-2 hover:scale-105 active:scale-95"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div>
          <Link
            href="/"
            className=" fixed top-5 left-5 md:hidden p-2 text-xl font-extrabold font-mono"
          >
            TJ
          </Link>
        </div>
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 nav-theme z-30 transition-opacity duration-300 md:hidden"
          />
        )}
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-62 bg-black/70 text-white backdrop-blur-lg z-50 flex flex-col items-start justify-start gap-2 px-6 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <a
          href="#hero"
          className="text-2xl font-cookie font-bold mb-10 pl-3 mt-30"
        >
          Tomiwa Jinadu
        </a>

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
            target="
              blank_"
          >
            <Linkedin size={24} name="Linkedin" />
          </a>
          <a
            className="hover-icon"
            href="https://github.com/Tomiwajin"
            target="blank_"
          >
            <GithubIcon size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
