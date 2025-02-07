"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative py-10 flex items-center justify-center  overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo Badge */}
          <Badge
            variant="outline"
            className="px-4 py-2 mb-8 inline-flex items-center gap-2 "
          >
            <Code2 className="w-4 h-4" />
            PyNode.AI
          </Badge>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-300 dark:to-neutral-500  "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Integrate, Develop, and
            <span className="block">Deploy Seamlessly.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="max-w-3xl mx-auto text-md md:text-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            PyNode.AI simplifies AI model integration with comprehensive code
            examples and documentation for both Python and Node.js. Build and
            deploy your AI projects faster with our cross-platform resources.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" variant="default" className="text-base px-8">
              View Documentation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
