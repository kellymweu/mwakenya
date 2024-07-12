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

export default function TableComponent() {
  const rowsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setendIndex] = useState(0);

  return (
    <div>
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold">Table Title</h2>
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
            <TableRow className="bg-muted">
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
