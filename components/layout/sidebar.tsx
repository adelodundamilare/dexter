import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import Logo from "../logo";

export default function Sidebar() {
  return (
    <nav
      className={cn(
        `relative bg-primary sm:hidden h-screen border-r pt-8 w-72`
      )}
    >
      <div className="">
        <div className="sm:hidden mb-10 px-5">
          <Logo />
        </div>
        <DashboardNav items={navItems} />
      </div>
    </nav>
  );
}
