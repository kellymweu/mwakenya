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
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

import { Counties } from "@/lib";

export default function devolvedGovernment() {
  return (
    <div>
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold">Elected Officials</h2>
      </div>
      <div className="overflow-x-auto w-full">
        <Table className="flex flex-col items-center">
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
            {Counties.map((Counties) => (
              <TableRow key={Counties.id}>
                <TableCell>{Counties.id}</TableCell>
                <TableCell className="font-medium">{Counties.Name}</TableCell>
                <TableCell>{Counties.Governor}</TableCell>
                <TableCell>{Counties.DeputyGovernor}</TableCell>
                <TableCell>{Counties.Senator}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
