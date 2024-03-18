"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { Bell } from "lucide-react";

export default function Header() {
  const path = usePathname();

  const parts = path.split("/");
  const currentPage = parts[parts.length - 1];

  return (
    <div className="top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <h2 className="capitalize font-semibold sm:hidden">
          {!currentPage ? "Welcome Dexter Admin" : currentPage}
        </h2>
        <div className="sm:hidden"></div>
        <div className={cn("sm:block hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <Bell className="w-[16px]" />
            <div className="w-[12px] h-[12px]  grid place-content-center bg-primary text-white text-[8px] rounded-full absolute top-0 -right-1">
              2
            </div>
          </div>
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
