"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { ExternalLink, Search, Heart, Eye, Bookmark } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const categoryLabels: Record<string, string> = {
  All: "All",
  webDev: "Web Dev",
  MobileDev: "Mobile",
  ML: "ML",
  JavaDev: "Java",
};

const categories = ["All", "webDev", "MobileDev", "ML", "JavaDev"];

const projects = [
  {
    id: 7,
    title: "Haul United Driver App",
    description:
      "Production Flutter app live on the App Store & Google Play. Built solo — real-time GPS tracking, SOS emergency flows, Mapbox truck routing, push notifications, and full load management.",
    image: "/projects/haul-united-driver.png",
    tags: ["Flutter", "Supabase", "Mapbox", "GraphQL"],
    demoUrl: "https://apps.apple.com/us/app/haul-united-driver/id6759404204",
    githubUrl: "",
    category: "MobileDev",
    views: 3241,
    likes: 418,
    featured: true,
  },
  {
    id: 1,
    title: "CareerSync",
    description:
      "An AI job application tracker built with Next.js, TypeScript, Google API and HuggingFace. Tracks applications, surfaces resume insights, and syncs with Gmail.",
    image: "/projects/project6.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Google API"],
    demoUrl: "https://job-app-tracker-gmail.vercel.app/",
    githubUrl: "https://github.com/Tomiwajin/job-app-tracker-gmail.git",
    category: "webDev",
    views: 2847,
    likes: 342,
    featured: false,
  },
  {
    id: 8,
    title: "DAKDAAN HR Portal",
    description:
      "Internal HR platform for 11 DAKDAAN brands used by 350+ staff daily. 7-tier RBAC, multi-level approvals, task assignment, document sharing, and integrations with Slack, LinkedIn, and OpenAI.",
    image: "/projects/staff2-hr-portal.png",
    tags: ["Next.js", "TypeScript", "ASP.NET", "PostgreSQL"],
    demoUrl: "",
    githubUrl: "",
    category: "webDev",
    views: 1876,
    likes: 203,
    featured: true,
  },
  {
    id: 2,
    title: "TomiwaJinadu Portfolio-V1",
    description:
      "My personal portfolio built with React, Vite, and Tailwind CSS...",
    image: "/projects/project5.png",
    tags: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://tomiwa-jinadu-portfolio-v1.vercel.app",
    githubUrl: "https://github.com/Tomiwajin/TomiwaJinadu-Portfolio-V1.git",
    category: "webDev",
    views: 1923,
    likes: 287,
    featured: false,
  },
  {
    id: 3,
    title: "Task Manager Desktop App",
    description: "A JavaFX-based task management desktop application...",
    image: "/projects/project3.png",
    tags: ["Java", "JavaFX", "Maven"],
    demoUrl: "https://task-manager-nr9n.onrender.com",
    githubUrl: "https://github.com/Tomiwajin/Task-Manager.git",
    category: "JavaDev",
    views: 1456,
    likes: 198,
    featured: false,
  },
  {
    id: 4,
    title: "Multithreaded FTS",
    description: "A Rust-based client-server file transfer system...",
    image: "/projects/project1.png",
    tags: ["Rust", "TCP", "Multithreading"],
    demoUrl: "https://github.com/ja00069-Git/sysprog_proj2_abwe_917594092.git",
    githubUrl:
      "https://github.com/ja00069-Git/sysprog_proj2_abwe_917594092.git",
    category: "JavaDev",
    views: 892,
    likes: 134,
    featured: false,
  },
  {
    id: 5,
    title: "House Price Prediction ML App",
    description: "Built a regression model using Scikit-learn to predict...",
    image: "/projects/project2.png",
    tags: ["Python", "Machine Learning", "Render"],
    demoUrl: "https://house-price-prediction-gzd4.onrender.com",
    githubUrl: "https://github.com/Tomiwajin/House-price-prediction",
    category: "ML",
    views: 1672,
    likes: 245,
    featured: false,
  },
  {
    id: 6,
    title: "Carpool Web App",
    description: "A responsive ride-sharing website...",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://tomiwajin.github.io/OluwatomiwaJinadu_Project/",
    githubUrl: "https://github.com/Tomiwajin/OluwatomiwaJinadu_Project.git",
    category: "webDev",
    views: 1034,
    likes: 156,
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchCategory && matchSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <div className="md:pl-70 flex flex-col py-8 md:py-0 animate-fade-in">
      {/* Sticky Header */}
      <div className="sticky top-0 mt-6 md:mt-0 z-10 bg-background/80 backdrop-blur-lg pb-4 mb-6 border-b">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="search"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg border-2 border-theme bg-background focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="md:w-48">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full py-6 rounded-lg">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {categoryLabels[category]}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {sortedProjects.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="relative aspect-square group cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 flex flex-col items-center justify-center gap-3 p-4">
                    <span className="text-white/20 text-5xl md:text-7xl font-black tracking-tighter select-none">
                      {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
                    </span>
                    <div className="flex flex-col items-center gap-1">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-white/30 text-xs font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-indigo-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    ★ Featured
                  </div>
                )}

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/80 transition-opacity duration-300 flex flex-col justify-between p-4 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Top Stats */}
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-white" />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                    <Bookmark className="w-5 h-5 cursor-pointer hover:fill-white transition-all" />
                  </div>

                  {/* Center Content */}
                  <div className="flex flex-col items-center justify-center flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 text-center">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm text-center mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-4 justify-center">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-indigo-500/80 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex gap-3 justify-center">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ event: "project:demo", metadata: { project: project.title } }) }).catch(() => {});
                        }}
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-black" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Mobile — persistent bottom bar with real tap target */}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-xs bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-white" />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="md:hidden absolute bottom-2 left-2 right-2 flex items-center gap-3 text-white text-xs bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{project.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-white" />
                      <span>{project.likes}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-2">
          <p className="text-lg font-semibold text-foreground/80">
            Nothing matched
          </p>
          <p className="text-sm text-foreground/40">
            Try a different filter or{" "}
            <button
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="underline underline-offset-2 hover:text-foreground/70 transition-colors"
            >
              clear the search
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
