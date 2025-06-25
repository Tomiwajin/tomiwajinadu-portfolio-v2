"use client";
import React from "react";
import { useViewer } from "@/components/Context/ViewerProvider";
import RecruiterView from "./RecruiterView";

const page = () => {
  const { viewer } = useViewer();
  return (
    <div className="pt-20 px-4 md:pt-10">
      {viewer === "developer" && <RecruiterView />}
      {viewer === "recruiter" && <RecruiterView />}
      {viewer === "stalker" && <RecruiterView />}
    </div>
  );
};

export default page;
