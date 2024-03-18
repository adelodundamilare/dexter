import { Icons } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
//
import { MonthlyRequests } from "@/components/monthly-requests";
import { Vendors } from "@/components/vendors";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { RatedUsers } from "@/components/rated-users";

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 sm:space-y-0 sm:p-2">
        <div>
          <div className="grid gap-5 sm:gap-2 mb-5 sm:mb-2 sm:grid-cols-2 grid-cols-4">
            <DashboardCard
              title="Vendors"
              value="350"
              icon="users"
              color="#1b264f"
            />
            <DashboardCard
              title="Active Services"
              value="10"
              icon="services"
              color="#f7b32b"
            />
            <DashboardCard
              title="Active Service Requests"
              value="56"
              icon="serviceRequest"
              color="#c1292e"
            />
            <DashboardCard
              title="Users"
              value="1100+"
              icon="users"
              color="#34252f"
            />
          </div>
          <div className="flex sm:flex-col space-x-5 sm:space-x-0">
            <Container className="w-2/3 sm:w-full">
              <div className="mb-5 sm:mb-2 bg-gray-50 rounded-sm px-3 py-2 flex items-center justify-between">
                <h3 className="">Users on Dexter App</h3>
                <div className="flex items-center space-x-1 text-sm">
                  <Calendar size="14" />
                  <p>Last 6 months</p>
                  <ChevronLeft size="14" />
                  <ChevronRight size="14" />
                </div>
              </div>
              <div className="h-[530px] sm:h-[300px]">
                <MonthlyRequests />
              </div>
            </Container>
            <div className="flex-grow">
              <Container className="mb-5 sm:mb-2">
                <h3 className="mb-5 text-center">Top Rated Vendors</h3>
                <div>
                  <Vendors />
                </div>
              </Container>
              <Container className="">
                <h3 className="mb-5 text-center">Top Rated Users</h3>
                <div>
                  <RatedUsers />
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

interface ICard {
  title: string;
  value: string;
  color: string;
  icon: keyof typeof Icons;
}
const DashboardCard = ({ title, icon, value, color }: ICard) => {
  const Icon = Icons[icon || "arrowRight"];
  return (
    <Container>
      <div
        className={cn(
          "relative grid place-content-center w-[50px] h-[50px] bg-opacity-10"
        )}
      >
        <Icon style={{ stroke: color }} className={cn("relative z-10")} />
        <div
          style={{ backgroundColor: color }}
          className="absolute top-0 left-0 z-0 opacity-10 w-[50px] h-[50px] rounded-full "
        ></div>
      </div>
      <div className="text-right">
        <p
          style={{ color: color }}
          className={cn("text-[32px] font-bold", `text-${color}`)}
        >
          {value}
        </p>
        <h3 className="text-sm ">{title}</h3>
      </div>
    </Container>
  );
};

interface IContainer {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: IContainer) => (
  <div className={cn("bg-white border rounded-md p-2", className)}>
    {children}
  </div>
);
