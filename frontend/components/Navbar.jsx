import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import {
  JudiciaryLinks,
  ExecutiveLinks,
  LegislatureLinks,
  EmbassyLinks,
  ParastatalsLinks,
  DevolvedGovtLinks,
} from "@/lib";

export default function Navbar() {
  return (
    <header className="ml-40 flex h-20 w-full shrink-0 items-center px-4 justify-between md:px-6">
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {/* Main Link 1 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Executive</NavigationMenuTrigger>
            <NavigationMenuContent align="start">
              <div className="grid w-[200px] p-2">
                <NavigationMenuLink>
                  {ExecutiveLinks.map((link, index) => {
                    return (
                      <Link
                        href={link.path}
                        key={index}
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {link.name}
                        </div>
                      </Link>
                    );
                  })}
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Main Link 2 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Legislature</NavigationMenuTrigger>
            <NavigationMenuContent align="start">
              <div className="grid w-[200px] p-2">
                <NavigationMenuLink>
                  {LegislatureLinks.map((link, index) => {
                    return (
                      <Link
                        href={link.path}
                        key={index}
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {link.name}
                        </div>
                      </Link>
                    );
                  })}
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Main Link 3 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Judiciary</NavigationMenuTrigger>
            <NavigationMenuContent align="start">
              <div className="grid w-[200px] p-2">
                <NavigationMenuLink>
                  {JudiciaryLinks.map((link, index) => {
                    return (
                      <Link
                        href={link.path}
                        key={index}
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {link.name}
                        </div>
                      </Link>
                    );
                  })}
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Main Link 4 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Devolved Government</NavigationMenuTrigger>
            <NavigationMenuContent align="start">
              <div className="grid w-[200px] p-2">
                <NavigationMenuLink>
                  {DevolvedGovtLinks.map((link, index) => {
                    return (
                      <Link
                        href={link.path}
                        key={index}
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {link.name}
                        </div>
                      </Link>
                    );
                  })}
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Main Link 5 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Embassies</NavigationMenuTrigger>
            <NavigationMenuContent align="start">
              <div className="grid w-[200px] p-2">
                <NavigationMenuLink>
                  {EmbassyLinks.map((link, index) => {
                    return (
                      <Link
                        href={link.path}
                        key={index}
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {link.name}
                        </div>
                      </Link>
                    );
                  })}
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Main Link 6 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Parastatals</NavigationMenuTrigger>
            <NavigationMenuContent align="start">
              <div className="grid w-[200px] p-2">
                <NavigationMenuLink>
                  {ParastatalsLinks.map((link, index) => {
                    return (
                      <Link
                        href={link.path}
                        key={index}
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {link.name}
                        </div>
                      </Link>
                    );
                  })}
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                About{" "}
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-muted p-6" />
              </CollapsibleContent>
            </Collapsible>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
