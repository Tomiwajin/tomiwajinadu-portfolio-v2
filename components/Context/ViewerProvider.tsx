"use client";
import { createContext, useContext, useState } from "react";

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
  const [viewer, setViewer] = useState<ViewerType>(null);

  return (
    <ViewerContext.Provider value={{ viewer, setViewer }}>
      {children}
    </ViewerContext.Provider>
  );
}
