"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="py-20 overflow-hidden">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Simplify <span className="text-primary">AI Model Integration</span>{" "}
            with PyNode.AI
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive code examples and documentation for both Python and
            Node.js. Build and deploy your AI projects faster with our
            cross-platform resources.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              View Docs
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-4xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl"></div>
            <motion.img
              src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-01/ai-chip.jpg"
              alt="PyNode.AI Dashboard"
              className="relative rounded-xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={
                isClicked
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 30px rgba(0, 204, 255, 0.8)",
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
