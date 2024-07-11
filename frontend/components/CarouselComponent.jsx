import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselComponent() {
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/cat 1.jpg"
            width={448}
            height={252}
            alt="Slide 1"
            className="aspect-video object-cover rounded-md"
          />
          <div className="mt-4 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Slide 1 Caption
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
