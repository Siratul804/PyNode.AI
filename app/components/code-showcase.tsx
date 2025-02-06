"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const codeExamples = {
  python: `
import pynode_ai

# Initialize the AI model
model = pynode_ai.load_model("gpt-3")

# Generate text
response = model.generate("Tell me a joke about programming.")

print(response)
  `,
  nodejs: `
const pynodeAI = require('pynode-ai');

// Initialize the AI model
const model = pynodeAI.loadModel('gpt-3');

// Generate text
model.generate('Tell me a joke about programming.')
  .then(response => console.log(response))
  .catch(error => console.error(error));
  `,
};

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState("python");

  return (
    <section id="code" className="py-20">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-12">
          Simple Integration
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="python" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="python"
                onClick={() => setActiveTab("python")}
              >
                Python
              </TabsTrigger>
              <TabsTrigger
                value="nodejs"
                onClick={() => setActiveTab("nodejs")}
              >
                Node.js
              </TabsTrigger>
            </TabsList>
            <TabsContent value="python">
              <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 overflow-x-auto">
                <code>{codeExamples.python}</code>
              </pre>
            </TabsContent>
            <TabsContent value="nodejs">
              <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 overflow-x-auto">
                <code>{codeExamples.nodejs}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
