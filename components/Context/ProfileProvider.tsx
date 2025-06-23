"use client";
import { createContext, useContext, useState } from "react";

type ProfileType = "recruiter" | "developer" | "stalker" | null;

const ProfileContext = createContext<{
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
}>({
  profile: null,
  setProfile: () => {},
});

export const useProfile = () => useContext(ProfileContext);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileType>(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
