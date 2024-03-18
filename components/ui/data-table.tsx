"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./button";
import { ScrollArea, ScrollBar } from "./scroll-area";
import Link from "next/link";
import { IMeta } from "@/constants/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  meta: IMeta;
  searchKey?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  meta,
}: DataTableProps<TData, TValue>) {
  const [tableData, setTableData] = React.useState(data);
  const [isShowingIncompleteUsers, setIsShowingIncompleteUsers] =
    React.useState(false);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const toggleShowIncompleteUsers = () => {
    if (isShowingIncompleteUsers) {
      setTableData(data);
      setIsShowingIncompleteUsers(false);
      return;
    }

    const newData = data.filter((user: any) => {
      if (user?.shop == null && user?.business == null) {
        return user;
      }
    });
    setIsShowingIncompleteUsers(true);
    setTableData(newData);
  };

  return (
    <>
      <Button
        onClick={toggleShowIncompleteUsers}
        variant="outline"
        className={cn("mb-5", isShowingIncompleteUsers ? "bg-secondary" : "")}
        size={"sm"}
      >
        show: {isShowingIncompleteUsers ? "All" : "Incomplete"} Registered Users
      </Button>
      <ScrollArea className="rounded-md border h-[calc(95vh-220px)]">
        <Table className="relative bg-white">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex items-center bg-white mt-5 border justify-end p-2 rounded-lg">
        <div className="flex-1 text-sm ">
          {meta.from} - {meta.to} of {meta.total} items
        </div>
        <div className="space-x-2">
          <Button
            disabled={meta.current_page === 1}
            size={"sm"}
            variant="outline"
          >
            <Link
              href={
                meta.current_page > 1
                  ? `/dashboard/user?page=${meta.current_page - 1}`
                  : ""
              }
            >
              <ChevronLeft size={14} />
            </Link>
          </Button>

          {Array(meta.last_page)
            .fill(0)
            .map((_, i) => (
              <Button
                variant={meta.current_page === i + 1 ? "default" : "outline"}
                size={"sm"}
                className="sm:hidden"
              >
                <Link
                  href={
                    meta.current_page < meta.last_page
                      ? `/dashboard/user?page=${i + 1}`
                      : ""
                  }
                >
                  {i + 1}
                </Link>
              </Button>
            ))}

          <Button
            disabled={meta.current_page === meta.last_page}
            variant="outline"
            size={"sm"}
          >
            <Link
              href={
                meta.current_page < meta.last_page
                  ? `/dashboard/user?page=${meta.current_page + 1}`
                  : ""
              }
            >
              <ChevronRight size={14} />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
