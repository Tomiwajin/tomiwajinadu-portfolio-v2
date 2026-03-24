"use client";
import React, { useState } from "react";
import { Mail, Phone, Check, ExternalLink, MapPin, Clock, Briefcase, Zap, PlaneTakeoff, Copy } from "lucide-react";
import { FaLinkedin, FaGithub, FaChessKnight } from "react-icons/fa";

const EMAIL = "oluwatomiwajinadu@gmail.com";
const PHONE = "+1 (470) 357-3129";

const ContactPage = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "email:copy" }),
    }).catch(() => {});
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PHONE);
    setPhoneRevealed(true);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <div className="md:pl-70 py-12 md:py-16 px-6 animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Open to opportunities
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Get in touch</h1>
        <p className="text-foreground/50 text-sm md:text-base max-w-md">
          Whether you have a role, a project, or just want to connect — I usually respond within 24 hours.
        </p>
      </div>

      {/* Three-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">

        {/* Left — contact cards */}
        <div className="flex flex-col gap-3">
          <button
            onClick={copyEmail}
            className="group flex items-center justify-between p-4 rounded-xl border border-theme hover:border-indigo-500/50 bg-background hover:bg-indigo-500/5 transition-all duration-200 text-left"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-lg bg-indigo-500/10 shrink-0">
                <Mail className="w-4 h-4 text-indigo-500" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-foreground/40 font-medium mb-0.5">Email</p>
                <p className="text-sm font-mono font-medium truncate">{EMAIL}</p>
              </div>
            </div>
            <div className="shrink-0 ml-3">
              {emailCopied
                ? <Check className="w-4 h-4 text-green-500" />
                : <Copy className="w-4 h-4 text-foreground/30 group-hover:text-indigo-500 transition-colors" />
              }
            </div>
          </button>

          <button
            onClick={copyPhone}
            className="group flex items-center justify-between p-4 rounded-xl border border-theme hover:border-indigo-500/50 bg-background hover:bg-indigo-500/5 transition-all duration-200 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <Phone className="w-4 h-4 text-indigo-500" />
              </div>
              <div>
                <p className="text-xs text-foreground/40 font-medium mb-0.5">Phone</p>
                <p className="text-sm font-mono font-medium tracking-wide">
                  {phoneRevealed ? PHONE : "•••• ••• ••••"}
                </p>
              </div>
            </div>
            <div className="shrink-0 ml-3 flex items-center gap-1.5">
              {phoneCopied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : phoneRevealed ? (
                <Copy className="w-4 h-4 text-foreground/30 group-hover:text-indigo-500 transition-colors" />
              ) : (
                <span className="text-xs text-foreground/30 group-hover:text-indigo-500 transition-colors whitespace-nowrap">Reveal</span>
              )}
            </div>
          </button>

          <a
            href="https://www.linkedin.com/in/oluwatomiwa-jinadu/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ event: "contact:linkedin" }) }).catch(() => {})}
            className="group flex items-center justify-between p-4 rounded-xl border border-theme hover:border-indigo-500/50 bg-background hover:bg-indigo-500/5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <FaLinkedin className="w-4 h-4 text-indigo-500" />
              </div>
              <div>
                <p className="text-xs text-foreground/40 font-medium mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium">Tomiwa Jinadu</p>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-foreground/30 group-hover:text-indigo-500 transition-colors" />
          </a>

          <a
            href="https://github.com/Tomiwajin"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ event: "contact:github" }) }).catch(() => {})}
            className="group flex items-center justify-between p-4 rounded-xl border border-theme hover:border-indigo-500/50 bg-background hover:bg-indigo-500/5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <FaGithub className="w-4 h-4 text-indigo-500" />
              </div>
              <div>
                <p className="text-xs text-foreground/40 font-medium mb-0.5">GitHub</p>
                <p className="text-sm font-medium">Tomiwajin</p>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-foreground/30 group-hover:text-indigo-500 transition-colors" />
          </a>

        </div>

        {/* Right — about / availability */}
        <div className="flex flex-col gap-4">
          {/* Status */}
          <div className="p-5 rounded-xl border border-theme bg-background">
            <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider mb-3">Current status</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-sm">Atlanta, Georgia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-sm">Eastern Time (ET) · UTC−5</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm">Available · Responds within 24h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PlaneTakeoff className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-sm">Open to relocation</span>
              </div>
            </div>
          </div>

          {/* Looking for */}
          <div className="p-5 rounded-xl border border-theme bg-background">
            <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider mb-3">What I&apos;m looking for</p>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: Briefcase, label: "Full-time software engineering roles" },
                { icon: Zap, label: "Freelance & contract projects" },
                { icon: FaGithub, label: "Open source collaboration" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-sm text-foreground/70">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Third column — Chess board */}
        <a
          href="https://lichess.org/@/Tomiwajin"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => fetch("/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ event: "chess:challenge" }),
          }).catch(() => {})}
          className="group relative overflow-hidden rounded-xl border border-theme hover:border-indigo-500/50 transition-all duration-200 flex flex-col"
        >
          {/* Board */}
          <div className="flex-1 grid grid-cols-8 min-h-[220px]">
            {Array.from({ length: 64 }).map((_, i) => {
              const isLight = (Math.floor(i / 8) + (i % 8)) % 2 === 0;
              return (
                <div
                  key={i}
                  className={isLight ? "bg-foreground/10" : "bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors duration-300"}
                />
              );
            })}
          </div>

          {/* Footer */}
          <div className="relative p-4 border-t border-theme bg-background flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FaChessKnight className="w-4 h-4 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Challenge me to chess</p>
                <p className="text-xs text-foreground/40">Lichess · Tomiwajin</p>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-foreground/30 group-hover:text-indigo-500 transition-colors" />
          </div>
        </a>

      </div>
    </div>
  );
};

export default ContactPage;
