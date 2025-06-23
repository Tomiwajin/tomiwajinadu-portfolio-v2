"use client";

import { useRouter } from "next/navigation";
import { useViewer } from "@/components/Context/ViewerProvider";

export default function HomePage() {
  const { setViewer } = useViewer();
  const router = useRouter();

  const handleSelect = (viewer: "recruiter" | "developer" | "stalker") => {
    setViewer(viewer);
    router.push("/professional");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">Welcome! Who are you?</h1>
      <div className="flex gap-4">
        <button onClick={() => handleSelect("recruiter")} className="btn">
          Recruiter
        </button>
        <button onClick={() => handleSelect("developer")} className="btn">
          Developer
        </button>
        <button onClick={() => handleSelect("stalker")} className="btn">
          Stalker
        </button>
      </div>
    </div>
  );
}
