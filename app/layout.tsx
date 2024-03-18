import "@/app/globals.css";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const font = Manrope({
  weight: ["200", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Connect Anywhere",
  description: "Process Manager",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-grow bg-gray-50">
            <div className="p-5 sm:p-2">
              <Header />
            </div>
            <main
              className={cn(
                font.className,
                "w-full overflow-y-auto h-[85vh] px-5 sm:px-0 pb-12"
              )}
            >
              <div>{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
