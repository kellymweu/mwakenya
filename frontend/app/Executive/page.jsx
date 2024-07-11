import TableComponent from "@/components/TableComponent";
import React from "react";

const executive = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section>President</section>
      <section>Deputy President</section>
      <section>
        <TableComponent />
      </section>
    </main>
  );
};

export default executive;
