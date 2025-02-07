"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Code, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Comprehensive Examples",
    description: "Access a wide range of examples for Python and Node.js.",
    icon: Code,
  },
  {
    title: "Fast Integration",
    description: "Quickly integrate AI models into your projects.",
    icon: Zap,
  },
  {
    title: "Cross-Platform Support",
    description: "Seamlessly work across Python and Node.js environments.",
    icon: Globe,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 flex justify-center  ">
      <div className=" w-full   md:w-3/4 lg:w-2/3 ">
        <h2 className="text-2xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
