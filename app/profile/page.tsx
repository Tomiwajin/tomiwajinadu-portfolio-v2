"use client";
import React from "react";
import { useViewer } from "@/components/Context/ViewerProvider";
import RecruiterView from "./RecruiterView";
import DeveloperView from "./DeveloperView";

const page = () => {
  const { viewer } = useViewer();
  return (
    <div className="pt-20 px-4 md:pt-10">
      {viewer === "developer" && <DeveloperView />}
      {viewer === "recruiter" && <RecruiterView />}
      {viewer === "stalker" && <RecruiterView />}
    </div>
  );
};

export default page;
