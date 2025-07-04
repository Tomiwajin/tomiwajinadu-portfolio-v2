import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12 gap-6 px-4">
      <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
      <div className="flex flex-col max-w-2xl text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        <p>
          I'm a developer who thrives at the intersection of design and
          engineering — crafting accessible, pixel-perfect user interfaces that
          are as thoughtful as they are performant. I enjoy building experiences
          that feel intuitive, look clean, and are engineered with precision.
        </p>
        <div className="mt-4">
          I recently earned a B.S. in Computing from the{" "}
          <LinkPreview url="https://www.westga.edu" className="font-bold">
            {" "}
            University of West Georgia.
          </LinkPreview>
          , where I contributed to projects ranging from a Flutter-based elderly
          assistance app to a systems-level client-server model in Rust. My
          experience spans both frontend and backend technologies, with growing
          interests in mobile development, cloud infrastructure, and
          cybersecurity.
        </div>
        <p className="mt-4">
          Along the way, I’ve collaborated on team projects, developed
          real-world tools, and organized student events that blend technology
          and community. I care deeply about accessibility, clean code, and
          building tools that improve everyday lives.
        </p>
      </div>
    </section>
  );
};

export default Page;
