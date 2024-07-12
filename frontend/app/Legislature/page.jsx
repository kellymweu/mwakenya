import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const page = () => {
  return (
    <main>
      <section>
        <div>
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold">Table Title</h2>
          </div>
          <div className="overflow-x-auto w-full">
            <Table>
              <TableHeader className="bg-primary text-primary-foreground">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Constituency</TableHead>
                  <TableHead>Party</TableHead>
                </TableRow>
              </TableHeader>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
