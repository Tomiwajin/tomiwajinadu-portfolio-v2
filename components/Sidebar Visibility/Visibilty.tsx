"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Visibility({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/";

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
