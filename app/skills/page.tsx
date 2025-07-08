"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  DiJava,
  DiPython,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiJavascript1,
  DiGit,
  DiVisualstudio,
  DiDatabase,
  DiAws,
  DiDocker,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiFlutter,
  SiExpress,
  SiRust,
  SiPostman,
  SiEclipseide,
  SiAnaconda,
  SiJupyter,
  SiFigma,
  SiVite,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiScikitlearn,
  SiTensorflow,
  SiGithubactions,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiReact,
  SiSpringboot,
  SiHeroku,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  // Frontend
  {
    icon: DiHtml5,
    title: "HTML/CSS",
    description: "Building blocks for structuring and styling web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    category: "frontend",
  },
  {
    icon: DiJavascript1,
    title: "JavaScript",
    description: "High-level language for interactive web development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "frontend",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    description: "High-level language for interactive web development.",
    link: "https://www.typescriptlang.org",
    category: "frontend",
  },
  {
    icon: DiReact,
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    link: "https://reactjs.org",
    category: "frontend",
  },
  {
    icon: SiReact,
    title: "React Native",
    description: "React for native mobile app development.",
    link: "https://reactnative.dev",
    category: "frontend",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for styling web interfaces.",
    link: "https://tailwindcss.com",
    category: "frontend",
  },
  {
    icon: SiNextdotjs,
    title: "Next.js",
    description:
      "React framework for server-side rendering and static websites.",
    link: "https://nextjs.org",
    category: "frontend",
  },
  {
    icon: SiFramer,
    title: "Framer Motion",
    description: "Animation library for React.",
    link: "https://www.framer.com/motion/",
    category: "frontend",
  },
  {
    icon: SiFlutter,
    title: "Flutter",
    description: "Google's UI toolkit for building cross-platform apps.",
    link: "https://flutter.dev",
    category: "frontend",
  },

  // Backend
  {
    icon: DiNodejs,
    title: "Node.js",
    description: "JavaScript runtime for building server-side applications.",
    link: "https://nodejs.org",
    category: "backend",
  },
  {
    icon: SiSpringboot,
    title: "Spring Boot",
    description:
      "Java framework for creating stand-alone, production-grade applications.",
    link: "https://spring.io/projects/spring-boot",
    category: "backend",
  },
  {
    icon: SiExpress,
    title: "Express.js",
    description: "Minimalist web framework for Node.js.",
    link: "https://expressjs.com",
    category: "backend",
  },
  {
    icon: DiPython,
    title: "Python",
    description: "Versatile programming language for backend and data science.",
    link: "https://python.org",
    category: "backend",
  },
  {
    icon: DiJava,
    title: "Java",
    description: "Popular language used in enterprise-level applications.",
    link: "https://www.java.com",
    category: "backend",
  },
  {
    icon: SiRust,
    title: "Rust",
    description: "Safe systems programming language focused on performance.",
    link: "https://www.rust-lang.org",
    category: "backend",
  },
  {
    icon: TbBrandCSharp,
    title: "C#",
    description: "Object-oriented programming language from Microsoft.",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    category: "backend",
  },

  // Tools
  {
    icon: DiGit,
    title: "Git/GitHub",
    description: "Version control system and code hosting platform.",
    link: "https://github.com",
    category: "tools",
  },
  {
    icon: DiVisualstudio,
    title: "VS Code",
    description: "Popular lightweight code editor by Microsoft.",
    link: "https://code.visualstudio.com",
    category: "tools",
  },
  {
    icon: SiPostman,
    title: "Postman",
    description: "API testing and collaboration tool.",
    link: "https://postman.com",
    category: "tools",
  },
  {
    icon: SiEclipseide,
    title: "Eclipse",
    description: "IDE for Java and other programming languages.",
    link: "https://eclipse.org",
    category: "tools",
  },
  {
    icon: SiAnaconda,
    title: "Anaconda",
    description: "Python/R distribution for scientific computing.",
    link: "https://www.anaconda.com/",
    category: "tools",
  },
  {
    icon: SiJupyter,
    title: "Jupyter",
    description: "Notebook environment for interactive data science.",
    link: "https://jupyter.org",
    category: "tools",
  },
  {
    icon: SiFigma,
    title: "Figma",
    description: "Collaborative interface design tool.",
    link: "https://figma.com",
    category: "tools",
  },
  {
    icon: SiVite,
    title: "Vite",
    description: "Next-generation frontend tooling.",
    link: "https://vitejs.dev",
    category: "frontend",
  },
  {
    icon: SiHeroku,
    title: "Heroku",
    description: "Platform as a Service (PaaS) for deploying web apps.",
    link: "https://heroku.com",
    category: "tools",
  },
  {
    icon: SiNetlify,
    title: "Netlify",
    description: "Platform for deploying static sites and apps.",
    link: "https://netlify.com",
    category: "tools",
  },
  {
    icon: SiVercel,
    title: "Vercel",
    description: "Hosting and deployment platform for Next.js apps.",
    link: "https://vercel.com",
    category: "tools",
  },

  // Cloud
  {
    icon: SiFirebase,
    title: "Firebase",
    description: "Backend platform for building web and mobile apps.",
    link: "https://firebase.google.com",
    category: "cloud",
  },
  {
    icon: DiAws,
    title: "AWS (EC2/S3)",
    description: "Cloud computing services from Amazon.",
    link: "https://aws.amazon.com",
    category: "cloud",
  },
  {
    icon: DiDocker,
    title: "Docker",
    description: "Platform to build, run, and ship containers.",
    link: "https://docker.com",
    category: "cloud",
  },
  {
    icon: SiGithubactions,
    title: "GitHub Actions",
    description: "CI/CD workflows for GitHub projects.",
    link: "https://github.com/features/actions",
    category: "cloud",
  },

  // Database
  {
    icon: DiDatabase,
    title: "SQL",
    description: "Language for querying relational databases.",
    link: "https://www.w3schools.com/sql/",
    category: "data",
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    description: "NoSQL database for high-volume data storage.",
    link: "https://mongodb.com",
    category: "data",
  },
  {
    icon: SiPostgresql,
    title: "PostgreSQL",
    description: "Advanced open source relational database.",
    link: "https://postgresql.org",
    category: "data",
  },
  {
    icon: SiScikitlearn,
    title: "Scikit-learn",
    description: "Machine learning library for Python.",
    link: "https://scikit-learn.org",
    category: "data",
  },
  {
    icon: SiTensorflow,
    title: "TensorFlow",
    description: "End-to-end open source machine learning platform.",
    link: "https://tensorflow.org",
    category: "data",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "FrontEnd", value: "frontend" },
  { label: "BackEnd", value: "backend" },
  { label: "Database", value: "data" },
  { label: "Cloud", value: "cloud" },
  { label: "Tools", value: "tools" },
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSkills = skills.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="md:pl-70 flex flex-col gap-20 py-12 md:py-0">
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap gap-4 items-center">
          {categories.map((cat) => (
            <div
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`hidden md:block px-8 py-2 rounded-md border-2 cursor-pointer ${
                selectedCategory === cat.value ? "bg-selected" : "border-theme"
              }`}
            >
              {cat.label}
            </div>
          ))}

          <input
            className="px-2 md:px-10 py-2 rounded-md border-2 border-theme focus:outline-none"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="md:hidden">
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger className="px-2 py-5">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        {filteredSkills.length > 0 ? (
          <HoverEffect items={filteredSkills} />
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
