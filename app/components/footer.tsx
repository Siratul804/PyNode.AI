import Link from "next/link";
import { Github } from "lucide-react";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className=" px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary flex ">
              <Code2 className="w-4 h-4" />
              PyNode<span className="">.AI</span>
            </Link>
            <p className="mt-2 text-sm ">
              Simplifying AI integration for developers
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link
              href="#"
              className="text-sm  hover:text-primary transition-colors"
            >
              Documentation
            </Link>

            <Link
              href="mailto: islamsiratul@gmail.com"
              className="text-sm  hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2025 PyNode.AI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className=" hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
