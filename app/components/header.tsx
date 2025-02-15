"use client";

import { useState } from "react";
import { Github } from "lucide-react";
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
import { ThemeToggle } from "@/app/components/theme-toggle";
import { Code2 } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="px-8 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-primary flex ">
          <Code2 className="w-4 h-4" />
          PyNode<span className="">.AI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/docs/intro"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Docs
          </Link>

          <ThemeToggle />

          <Link
            href="https://github.com/Siratul804/PyNode.AI"
            target="_blank"
            className=" hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
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
                href="/docs/intro"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="#features"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <ThemeToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
