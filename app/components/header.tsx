"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className=" px-8 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          PyNode<span className="text-slate-500">.AI</span>
        </Link>
        <nav className=" md:flex hidden space-x-6 lg:flex lg:items-center  ">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#code"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Docs
          </Link>

          <Button variant="default">Get Started</Button>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="#features"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#code"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Code
              </Link>
              <Link
                href="#testimonials"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Button variant="default" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
