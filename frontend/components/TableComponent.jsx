"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { useState } from "react";
import { Cabinet } from "@/lib";

export default function TableComponent() {
  const rowsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  return (
    <div>
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold">Cabinet Members</h2>
      </div>
      <div className="overflow-x-auto w-full">
        <Table>
          <TableHeader className="bg-primary text-primary-foreground">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Ministry</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              className={Cabinet.id % 2 === 0 ? "bg-slate-200" : "bg-slate-100"}
            >
              <TableCell className="font-medium">01</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Ministry of ABC</TableCell>
              <TableCell>Cabinet Secretary</TableCell>
              <TableCell>
                <Badge variant="success">Active</Badge>
              </TableCell>
              <TableCell>
                <Link href="#" prefetch={false} target="_blank">
                  Link Here
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={
                  startIndex === 0
                    ? "opacity-50 cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => {
                  setStartIndex(startIndex - rowsPerPage);
                  setEndIndex(endIndex - rowsPerPage);
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                className={
                  endIndex === Cabinet.length - 1
                    ? "opacity-50 cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => {
                  setStartIndex(startIndex + rowsPerPage); //10
                  setEndIndex(endIndex + rowsPerPage); //10 + 10 = 20
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
