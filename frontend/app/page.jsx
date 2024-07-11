import CarouselComponent from "@/components/CarouselComponent";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center gap-4">
        <CarouselComponent />
        <h1>Partyless, Leaderless, Tribeless</h1>
      </section>
    </main>
  );
}
