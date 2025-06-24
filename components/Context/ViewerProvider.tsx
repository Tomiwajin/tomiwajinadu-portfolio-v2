"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ViewerType = "recruiter" | "developer" | "stalker" | null;

const ViewerContext = createContext<{
  viewer: ViewerType;
  setViewer: (viewer: ViewerType) => void;
}>({
  viewer: null,
  setViewer: () => {},
});

export const useViewer = () => useContext(ViewerContext);

export function ViewerProvider({ children }: { children: React.ReactNode }) {
  const [viewer, setViewerState] = useState<ViewerType>(null);

  useEffect(() => {
    const stored = localStorage.getItem("viewer");
    if (
      stored === "developer" ||
      stored === "recruiter" ||
      stored === "stalker"
    ) {
      setViewerState(stored);
    }
  }, []);

  const setViewer = (viewer: ViewerType) => {
    setViewerState(viewer);
    if (viewer) {
      localStorage.setItem("viewer", viewer);
    } else {
      localStorage.removeItem("viewer");
    }
  };

  return (
    <ViewerContext.Provider value={{ viewer, setViewer }}>
      {children}
    </ViewerContext.Provider>
  );
}
