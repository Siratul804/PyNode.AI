import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function DocsPage() {
  return (
    <div className=" bg-background text-foreground">
      <div className="container max-w-3xl py-4 px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link
            href="/docs"
            className="hover:text-foreground transition-colors"
          >
            Docs
          </Link>
          <span>/</span>
          <span>Introduction</span>
        </nav>

        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>

          <p className="text-md text-muted-foreground">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </p>

          <div className="space-y-4">
            <p className="text-md">
              This is <span className="font-bold">NOT</span> a component
              library. It's a collection of re-usable components that you can
              copy and paste into your apps.
            </p>

            <h2 className="text-md font-semibold mt-8">
              What do you mean by not a component library?
            </h2>

            <p className="text-md">
              I mean you do not install it as a dependency. It is not available
              or distributed via npm.
            </p>

            <p className="text-md">
              Pick the components you need. Copy and paste the code into your
              project and customize to your needs. The code is yours.
            </p>

            <p className="text-md italic">
              Use this as a reference to build your own component libraries.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold mt-12">FAQ</h2>
            <Separator className="my-4" />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">
                  Why copy/paste and not packaged as a dependency?
                </AccordionTrigger>
                <AccordionContent>
                  The goal is to give you ownership and control over the code,
                  allowing you to customize and maintain it according to your
                  needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-md">
                  Do you plan to publish it as an npm package?
                </AccordionTrigger>
                <AccordionContent>
                  No. This is meant to be a reference implementation that you
                  can copy, paste, and customize for your specific needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
