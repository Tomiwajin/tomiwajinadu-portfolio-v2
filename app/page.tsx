"use client";

import { useRouter } from "next/navigation";
import { useViewer } from "@/components/Context/ViewerProvider";
import { ThemeToggle } from "@/components/ThemeToggle/Themetoggle";
import Image from "next/image";

export default function HomePage() {
  const { setViewer } = useViewer();
  const router = useRouter();

  const handleSelect = (viewer: "recruiter" | "developer" | "stalker") => {
    setViewer(viewer);
    router.push("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-40 gap-6">
      <h1 className="text-2xl md:text-4xl font-bold">
        Hi, Who are you viewing as?
      </h1>
      <div className="flex  flex-col gap-4 mt-10">
        <button
          onClick={() => handleSelect("recruiter")}
          className="flex items-center justify-between w-full px-20 py-3 rounded-xl border border-theme hover hover:scale-105 active:scale-95 transition"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/Avatars/recruiter.jpeg"
              alt="recuiter avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-sm font-semibold">Recruiter</div>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleSelect("developer")}
          className="flex items-center justify-between w-full px-20 py-3 rounded-xl border border-theme hover hover:scale-105 active:scale-95 transition"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/Avatars/developer.jpg"
              alt="recuiter avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-sm font-semibold">Developer</div>
            </div>
          </div>
        </button>
        <button
          onClick={() => handleSelect("stalker")}
          className="flex items-center justify-between w-full px-20 py-3 rounded-xl border border-theme hover hover:scale-105 active:scale-95 transition"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/Avatars/stalker.jpg"
              alt="recuiter avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-sm font-semibold">Stalker</div>
            </div>
          </div>
        </button>
      </div>
      <ThemeToggle />
    </div>
  );
}
