"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreVertical, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Helpers from "@/lib/helpers";
import { IUser } from "@/constants/types";

interface CellActionProps {
  data: IUser;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export const NameColumn: React.FC<CellActionProps> = ({ data }) => {
  return (
    <p>
      {data?.first_name} {data?.last_name}
    </p>
  );
};

export const LocationColumn: React.FC<CellActionProps> = ({ data }) => {
  return <p>{data?.shop?.contact_address?.full_address}</p>;
};

export const DateJoinedColumn: React.FC<CellActionProps> = ({ data }) => {
  return <p>{Helpers.formatDate(data?.created_at)}</p>;
};
export const ServicesRequestedColumn: React.FC<CellActionProps> = ({
  data,
}) => {
  return <p>{data?.shop?.service?.name}</p>;
};
