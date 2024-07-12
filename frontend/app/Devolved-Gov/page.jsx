"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { SortingState, getSortedRowModel } from "@tanstack/react-table";

import { Counties } from "@/lib";
import { useState } from "react";

const Page = () => {
  const rowsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  return (
    <main>
      <section className="px-24">
        <div>
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold">Elected Officials</h2>
          </div>
          <div className="overflow-x-auto w-full">
            <Table>
              <TableHeader className="bg-primary text-primary-foreground ">
                <TableRow>
                  <TableHead>Number</TableHead>
                  <TableHead>County</TableHead>
                  <TableHead>Governor</TableHead>
                  <TableHead>Deputy Governor</TableHead>
                  <TableHead>Senator</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Counties.slice(startIndex, endIndex).map((Counties) => (
                  <TableRow key={Counties.id}>
                    <TableCell>{Counties.id}</TableCell>
                    <TableCell className="font-medium">
                      {Counties.Name}
                    </TableCell>
                    <TableCell>{Counties.Governor}</TableCell>
                    <TableCell>{Counties.DeputyGovernor}</TableCell>
                    <TableCell>{Counties.Senator}</TableCell>
                  </TableRow>
                ))}
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
                      endIndex === Counties.length - 1
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
      </section>
    </main>
  );
};

export default Page;
