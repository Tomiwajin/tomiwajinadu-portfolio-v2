"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const categories = ["All", "webDev", "MobileDev", "ML", "JavaDev"];

const projects = [
  {
    id: 1,
    title: "TomiwaJinadu Portfolio-V1",
    description:
      "My personal portfolio built with React, Vite, and Tailwind CSS...",
    image: "/projects/project5.png",
    tags: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://tomiwa-jinadu-portfolio-v1.vercel.app",
    githubUrl: "https://github.com/Tomiwajin/TomiwaJinadu-Portfolio-V1.git",
    category: "webDev",
  },
  {
    id: 2,
    title: "Task Manager Desktop App",
    description: "A JavaFX-based task management desktop application...",
    image: "/projects/project3.png",
    tags: ["Java", "JavaFX", "Maven"],
    demoUrl: "https://task-manager-nr9n.onrender.com",
    githubUrl: "https://github.com/Tomiwajin/Task-Manager.git",
    category: "JavaDev",
  },
  {
    id: 3,
    title: "Multithreaded File Transfer System",
    description: "A Rust-based client-server file transfer system...",
    image: "/projects/project1.png",
    tags: ["Rust", "TCP", "Multithreading"],
    demoUrl: "https://github.com/ja00069-Git/sysprog_proj2_abwe_917594092.git",
    githubUrl:
      "https://github.com/ja00069-Git/sysprog_proj2_abwe_917594092.git",
    category: "JavaDev",
  },
  {
    id: 4,
    title: "House Price Prediction ML App",
    description: "Built a regression model using Scikit-learn to predict...",
    image: "/projects/project2.png",
    tags: ["Python", "Machine Learning", "Render"],
    demoUrl: "https://house-price-prediction-gzd4.onrender.com",
    githubUrl: "https://github.com/Tomiwajin/House-price-prediction",
    category: "ML",
  },
  {
    id: 5,
    title: "Carpool Web App",
    description: "A responsive ride-sharing website...",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://tomiwajin.github.io/OluwatomiwaJinadu_Project/",
    githubUrl: "https://github.com/Tomiwajin/OluwatomiwaJinadu_Project.git",
    category: "webDev",
  },
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className="md:pl-70 flex flex-col  py-12 md:py-0 animate-fade-in">
      <div className="flex flex-wrap items-center gap-4">
        <div className="hidden md:flex flex-wrap gap-4">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-md border-2  cursor-pointer hover:bg-muted transition-colors ${
                selectedCategory === category ? "bg-selected" : "border-theme"
              }`}
            >
              {category}
            </div>
          ))}
        </div>

        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 min-w-[150px] px-4 py-2 rounded-md border-2 border-theme focus:outline-none"
        />

        <div className="md:hidden">
          <Select onValueChange={setSelectedCategory}>
            <SelectTrigger className="px-2 py-5">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="capitalize"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filteredProjects.map((project) => (
            <CardContainer key={project.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                  >
                    Demo →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-white bg-indigo-500 text-xs font-bold"
                  >
                    GitHub
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No results found.
        </p>
      )}
    </div>
  );
};

export default Page;
