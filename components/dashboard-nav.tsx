"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Icons } from "./icons";
import { ChevronDownIcon } from "lucide-react";
import { NavItem } from "@/constants/types";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start">
      {items.map((item, index) => {
        const isActive = item.href == path;
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link
              key={index}
              href={item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center px-5 py-4 text-sm font-medium hover:text-accent-foreground"
                )}
              >
                <Icon
                  className={cn(
                    "mr-2 h-4 w-4",
                    isActive ? "stroke-secondary" : "stroke-[#CFCCD6]"
                  )}
                />
                <span
                  className={cn(
                    "flex-grow",
                    isActive ? "text-secondary" : "text-[#CFCCD6]"
                  )}
                >
                  {item.title}
                </span>
                {item.children && item.children?.length > 0 && (
                  <ChevronDownIcon />
                )}
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
