import React from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { PinContainer } from "@/components/ui/3d-pin";
import { Grid, Volume2, ExternalLink } from "lucide-react";
import Image from "next/image";

const StalkerView = () => {
  const words = ["phone", "laptop", "Fridge"];

  return (
    <div className="pl-4 md:pl-100 flex flex-col gap-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-full animate-spin-slow"></div>
          <div className="relative p-[2.5px] rounded-full">
            <Image
              src="/Profile-pic/stalker.gif"
              alt="Projects Post"
              width={256}
              height={384}
              className="rounded-full w-20 h-20 md:w-40 md:h-40 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:px-10">
          <div className="flex flex-row gap-2 items-center">
            <h1 className="font-extrabold text-xl md:text-2xl">
              Tomiwa Jinadu
            </h1>
            <button
              title="Pronounciation"
              onClick={() => {
                const audio = new Audio("Audio/rick_roll.mp4");
                audio.play();
              }}
              className="hover:scale-105 active:scale-95 transition-transform"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => window.open("/TomiwaJinaduResume.pdf", "_blank")}
              className="group relative overflow-hidden rounded-md border-indigo-500 bg-indigo-500 font-semibold shadow-md w-[120px] h-[40px]"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-x-0 group-hover:-translate-x-full text-white">
                Resume
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-x-full group-hover:translate-x-0 text-white">
                Refer me 🙏🏿
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
                HUH
              </span>
            </button>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-extrabold text-gray-500">
              Software Developer
            </p>
            <p className="text-xl font-bold text-indigo-500">
              📍Area 51, Earth
            </p>
            <div className="text-base md:text-lg font-normal">
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
      <div className="flex justify-center -mt-10 md:mt-0 md:-ml-50">
        <Grid />
      </div>

      {/* DeskTop View*/}
      <div className="hidden md:flex flex-col gap-26">
        <div className="hidden md:flex flex-row gap-8">
          <div className="flex -ml-40 -mt-40  md:-ml-30 md:mt-0 opacity-0 animate-fade-in-delay-1">
            <PinContainer title="/About Me" href="/about-me">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="/Posts/about-me.jpg"
                  alt="About-me"
                  width={256}
                  height={384}
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-xl font-semibold">About me</h2>
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="flex -ml-45 -mt-40 md:-ml-30 md:mt-0 opacity-0 animate-fade-in-delay-2">
            <PinContainer title="/GitHub" href="https://github.com/Tomiwajin">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="/Posts/Git-hub.jpg"
                  alt="Git-Hub Post"
                  width={256}
                  height={384}
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
          <div className="flex -ml-65 -mt-40 md:-ml-30 md:mt-0 opacity-0 animate-fade-in-delay-3">
            <PinContainer title="/projects" href="/projects">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="/Posts/Projects.jpg"
                  alt="Projects Post"
                  width={256}
                  height={384}
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
          <div className="flex -ml-40 -mt-40  md:-ml-30 md:mt-0 opacity-0 animate-fade-in-delay-1">
            <PinContainer title="/hobbies" href="/hobbies">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="/Posts/Hobbies.jpg"
                  alt="Hobbies Post"
                  width={256}
                  height={384}
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-xl font-semibold">Hobbies</h2>
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="flex -ml-65 -mt-40 md:-ml-30 md:mt-0 opacity-0 animate-fade-in-delay-2">
            <PinContainer title="/Experience" href="/experience">
              <div className="tracking-tight w-[16rem] h-[24rem]">
                <Image
                  src="/Posts/Experience.jpg"
                  alt="Experience Post"
                  width={256}
                  height={384}
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
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105 opacity-0 animate-fade-in-delay-1"
          >
            <Image
              src="/Posts/about-me.jpg"
              alt="About-me"
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">About Me</h2>
            </div>
          </Link>
          <Link
            href="https://github.com/Tomiwajin"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105 opacity-0 animate-fade-in-delay-2"
            target="blank_"
          >
            <Image
              src="/Posts/Git-hub.jpg"
              alt="Git-Hub Post"
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-900/20"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">My Git-Hub</h2>
              <ExternalLink className="absolute top-3 right-3 w-5 h-5 text-white" />
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-full gap-2 -mt-10">
          <Link
            href="/projects"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105 opacity-0 animate-fade-in-delay-3"
          >
            <Image
              src="/Posts/Projects.jpg"
              alt="Projects Post"
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">Projects</h2>
            </div>
          </Link>
          <Link
            href="/hobbies"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105 opacity-0 animate-fade-in-delay-1"
          >
            <Image
              src="/Posts/Hobbies.jpg"
              alt="Hobbies Post"
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">Hobbies</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-full gap-2 -mt-10">
          <Link
            href="/experience"
            className="w-1/2 h-60 border relative overflow-hidden active:scale-105 opacity-0 animate-fade-in-delay-2"
          >
            <Image
              src="/Posts/Experience.jpg"
              alt="Experience Post"
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
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
