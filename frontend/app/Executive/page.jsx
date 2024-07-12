import TableComponent from "@/components/TableComponent";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section id="1">President</section>
      <section id="2">Deputy President</section>
      <section id="3">
        <TableComponent />
      </section>
      <section id="4">NPS</section>
    </main>
  );
};

export default page;
