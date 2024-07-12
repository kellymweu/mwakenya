import { Button } from "@/components/ui/button";
import { HelpLinks } from "@/lib";
import Link from "next/link";

export default function HelpComponent() {
  return (
    <section className="w-full px-14">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            0800 - 720 - 434
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Report Harrassment kwa Maandamano - Toll Free
          </p>
          <p className="text-xl md:text-2xl mb-8">
            For legal assistance, illegal detainment, injuries - Law Society Of
            Kenya
          </p>
        </div>
      </div>
      <div className="py-2">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold">
              Support Fellow Kenyans
            </h2>
            <p className="text-muted-foreground">
              Your donation counts. Choose from the options below to support our
              mission.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {HelpLinks.map((link, index) => {
                return (
                  <Link
                    href={link.path}
                    key={index}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      {link.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
