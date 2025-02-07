"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your AI Integration?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of developers who are building amazing AI-powered
            applications with PyNode.AI
          </p>
          <Button size="lg" className="animate-bounce">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
