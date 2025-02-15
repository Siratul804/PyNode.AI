import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function Into() {
  return (
    <div className=" bg-background text-foreground">
      <div className="container max-w-3xl py-4 px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link
            href="/docs/intro"
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
            Beautifully documented code examples for integrating AI models into
            your apps. Accessible. Customizable. Open Source (presumably, given
            the focus on code examples).
          </p>

          <div className="space-y-4">
            <p className="text-md">
              This is <span className="font-bold">NOT</span> a pre-built AI
              model or a cloud-hosted AI service. It's a collection of reusable
              code examples and documentation that you can copy and adapt for
              your AI integration needs.
            </p>

            <h2 className="text-md font-semibold mt-8">
              What do you mean by not a pre-built AI model or cloud service?
            </h2>

            <p className="text-md">
              I mean you do not install a specific PyNode.AI package or connect
              to a PyNode.AI hosted service.
            </p>

            <p className="text-md">
              Pick the code examples relevant to your AI model and platform
              (Python or Node.js). Copy and paste the code into your project and
              customize it to your specific AI model and application. The code
              is yours to modify and use.
            </p>

            <p className="text-md italic">
              Use this as a reference to build your own AI integration
              solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold mt-12">FAQ</h2>
            <Separator className="my-4" />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">
                  Why copy/paste code examples and not provide a pre-built
                  library or service?
                </AccordionTrigger>
                <AccordionContent>
                  The copy/paste approach prioritizes flexibility,
                  customization, and educational value by allowing developers to
                  directly adapt and understand the integration code. It also
                  reduces maintenance overhead compared to building and
                  supporting multiple libraries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
