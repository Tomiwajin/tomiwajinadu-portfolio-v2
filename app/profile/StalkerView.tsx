import React from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { PinContainer } from "@/components/ui/3d-pin";
import { Grid, Volume2 } from "lucide-react";
import Image from "next/image";

const StalkerView = () => {
  const words = ["phone", "laptop", "Fridge"];

  return (
    <div className="pl-4 md:pl-100 flex flex-col gap-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 p-[3px] rounded-full">
          <Image
            src="Profile-pic/stalker.gif"
            alt="Projects Post"
            width={256}
            height={384}
            className="rounded-full w-20 h-20 md:w-40 md:h-40"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:px-10">
          <div className="flex flex-row gap-2">
            <div className="font-extrabold text-xl">Tomiwa Jinadu</div>
            <div
              title="Pronounciation"
              onClick={() => {
                const audio = new Audio("Audio/rickroll.mp3");
                audio.play();
              }}
              className="hover:scale-105 active:scale-95"
            >
              <Volume2 />
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="group relative overflow-hidden rounded-md border-indigo-500 bg-indigo-500 font-semibold shadow-md w-[120px] h-[40px]"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-x-0 group-hover:-translate-x-full">
                Resume
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-x-full group-hover:translate-x-0">
                Hire me 🙏🏿
              </span>
            </button>

            <button
              onClick={() =>
                window.open("mailto:oluwatomiwajinadu@gmail.com", "_blank")
              }
              className="group relative overflow-hidden rounded-md border font-semibold shadow-md w-[120px] h-[40px] button"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-x-0 group-hover:-translate-x-full">
                Email me
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-x-full group-hover:translate-x-0">
                Let&#39;s collab 💌
              </span>
            </button>
          </div>

          <div>
            <div className="text-xl font-extrabold text-gray-500">
              Software Developer
            </div>
            <div className="text-20 font-normal">
              I build responsive products…
              <br />
              but you already knew that from <br />
              viewing my site on your
              <FlipWords
                words={words}
                className="text-gray-500 font-extrabold inline-block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-10 md:mt-0 md:-ml-30">
        <Grid />
      </div>

      {/* DeskTop View*/}
      <div className="hidden md:flex flex-col gap-26">
        <div className="hidden md:flex flex-row gap-8">
          <div className="flex -ml-40 -mt-40  md:-ml-30 md:mt-0">
            <PinContainer title="/About Me" href="/about-me">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="/Posts/about-me.jpg"
                  alt="About-me"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-xl font-semibold">About me</h2>
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="flex -ml-45 -mt-40 md:-ml-30 md:mt-0">
            <PinContainer title="/GitHub" href="https://github.com/Tomiwajin">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="Posts/Git-Hub.jpg"
                  alt="Git-Hub Post"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-xl font-semibold">
                    My Git-Hub
                  </h2>
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="flex -ml-65 -mt-40 md:-ml-30 md:mt-0">
            <PinContainer title="/projects" href="/projects">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="Posts/Projects.jpg"
                  alt="Projects Post"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-xl font-semibold">Projects</h2>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
        <div className="hidden md:flex flex-row gap-8">
          <div className="flex -ml-40 -mt-40  md:-ml-30 md:mt-0">
            <PinContainer title="/hobbies" href="/hobbies">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="Posts/Hobbies.jpg"
                  alt="Hobbies Post"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-xl font-semibold">Hobbies</h2>
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="flex -ml-65 -mt-40 md:-ml-30 md:mt-0">
            <PinContainer title="/Experience" href="/professional">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="Posts/Experience.jpg"
                  alt="Experience Post"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-xl font-semibold">
                    Experience
                  </h2>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-12">
        <div className="flex flex-row w-full gap-2 -mt-10">
          <Link
            href="/about-me"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105"
          >
            <Image
              src="/Posts/about-me.jpg"
              alt="About-me"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">About Me</h2>
            </div>
          </Link>
          <Link
            href="https://github.com/Tomiwajin"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105"
            target="blank_"
          >
            <Image
              src="Posts/Git-Hub.jpg"
              alt="Git-Hub Post"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">My Git-Hub</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-full gap-2 -mt-10">
          <Link
            href="/projects"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105"
          >
            <Image
              src="Posts/Projects.jpg"
              alt="Projects Post"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">Projects</h2>
            </div>
          </Link>
          <Link
            href="/hobbies"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105"
          >
            <Image
              src="Posts/Hobbies.jpg"
              alt="Hobbies Post"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">Hobbies</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-full gap-2 -mt-10">
          <Link
            href="/professional"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105"
          >
            <Image
              src="Posts/Experience.jpg"
              alt="Experience Post"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">Experience</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StalkerView;
