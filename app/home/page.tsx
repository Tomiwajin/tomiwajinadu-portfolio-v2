"use client";
import React from "react";
import { useViewer } from "@/components/Context/ViewerProvider";
import RecruiterView from "./RecruiterView";
import DeveloperView from "./DeveloperView";
import StalkerView from "./StalkerView";

const Page = () => {
  const { viewer } = useViewer();
  return (
    <div className="pt-20 px-4 md:pt-10">
      {viewer === "developer" && <DeveloperView />}
      {viewer === "recruiter" && <RecruiterView />}
      {viewer === "stalker" && <StalkerView />}
    </div>
  );
};

export default Page;
