"use client";
import { ColumnDef } from "@tanstack/react-table";
import {
  CellAction,
  DateJoinedColumn,
  LocationColumn,
  NameColumn,
  ServicesRequestedColumn,
} from "./cell-action";
import { IUser } from "@/constants/types";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <NameColumn data={row.original} />,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <LocationColumn data={row.original} />,
  },
  {
    accessorKey: "date_joined",
    header: "Date Joined",
    cell: ({ row }) => <DateJoinedColumn data={row.original} />,
  },
  {
    accessorKey: "services_registered",
    header: "Services Registered",
    cell: ({ row }) => <ServicesRequestedColumn data={row.original} />,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
