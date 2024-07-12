import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { membersOfParliament } from "@/lib";

const page = () => {
  return (
    <main>
      <section className="px-40">
        <div>
          <div className="mb-2 text-center">
            <h2 className="text-2xl font-bold">
              Members of the 13th Parliament
            </h2>
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
              <TableBody>
                {membersOfParliament.map((membersOfParliament) => (
                  <TableRow
                    key={membersOfParliament.Name}
                    className={
                      Counties.id % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                    }
                  >
                    <TableCell>{membersOfParliament.Name}</TableCell>
                    <TableCell className="font-medium">
                      {membersOfParliament.Constituency}
                    </TableCell>
                    <TableCell>{membersOfParliament.Party}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total Members</TableCell>
                  <TableCell className="text-center">349</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
