"use client";

import React, { JSX, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Loader2 } from "lucide-react";

import CODE_SAMPLES from "../models.json";
import Link from "next/link";

// ---------------------
// CodePreview Component
// ---------------------
const CodePreview = () => {
  // Filter to only include the service with title "ChatGPT"
  const filteredServices = CODE_SAMPLES.filter(
    (service) => service.title === "Claude"
  );

  // Since we only have ChatGPT, we initialize with "ChatGPT"
  const [selectedService, setSelectedService] = useState("Claude");
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setSelectedLanguage("python");
  }, [selectedService]);

  const handleCopy = (service: string, language: string, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(`${service}-${language}`);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <Card className="flex-1 h-full sm:w-full w-[40vh] ">
      <CardHeader>
        <CardTitle className="text-xl">Integration Code Samples</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Example implementations for different services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedService} onValueChange={setSelectedService}>
          <TabsList className="flex flex-wrap gap-2">
            {filteredServices.map((service) => (
              <div
                key={service.title}
                className="dark:text-slate-300 text-black font-mono text-sm"
              >
                {service.install}
              </div>
            ))}
          </TabsList>

          {filteredServices.map((service) => (
            <TabsContent
              key={service.title}
              value={service.title}
              className="mt-4"
            >
              <Tabs
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                </TabsList>

                <TabsContent value="python" className="mt-4 relative">
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-4 top-4 z-10"
                    onClick={() =>
                      handleCopy(service.title, "python", service.pythonCode)
                    }
                  >
                    {copied === `${service.title}-python` ? "Copied!" : "Copy"}
                  </Button>
                  <SyntaxHighlighter
                    language="python"
                    style={vscDarkPlus}
                    className="rounded-lg p-4 text-sm w-full lg:w-[75vh]"
                    showLineNumbers
                  >
                    {service.pythonCode}
                  </SyntaxHighlighter>
                </TabsContent>

                <TabsContent value="nodejs" className="mt-4 relative">
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-4 top-4 z-10"
                    onClick={() =>
                      handleCopy(service.title, "nodejs", service.nodejsCode)
                    }
                  >
                    {copied === `${service.title}-nodejs` ? "Copied!" : "Copy"}
                  </Button>
                  <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    className="rounded-lg p-4 text-sm w-full lg:w-[75vh]"
                    showLineNumbers
                  >
                    {service.nodejsCode}
                  </SyntaxHighlighter>
                </TabsContent>
              </Tabs>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

// ---------------------
// AIInteraction Component
// ---------------------
interface AIInteractionProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  aiResponse: string;
}

const AIInteraction: React.FC<AIInteractionProps> = ({
  userInput,
  setUserInput,
  handleSubmit,
  isLoading,
  aiResponse,
}) => {
  // Moved filteredServices declaration here, before the return statement.
  const filteredServices = CODE_SAMPLES.filter(
    (service) => service.title === "Claude"
  );

  return (
    <div>
      <Card className="flex-1 w-full lg:w-[55vh]">
        <CardHeader>
          <CardTitle className="text-xl">AI Playground</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Test the AI model with real-time responses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Prompt
              </label>
              <Input
                value={userInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserInput(e.target.value)
                }
                placeholder="Ask me anything..."
                className="py-3 px-4 rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 font-semibold rounded-lg transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Generating...</span>
                </div>
              ) : (
                "Generate Response"
              )}
            </Button>

            {aiResponse && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  AI Response
                </h3>
                <div className="prose dark:prose-invert text-gray-800 dark:text-gray-200">
                  {aiResponse}
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      <Card className="mt-4 flex-1 w-full">
        <CardContent>
          <CardDescription className="text-gray-500 dark:text-gray-400 py-4">
            Test your app with the api key
          </CardDescription>

          {filteredServices.map((service) => (
            <div key={service.title} className="text-slate-300  text-sm">
              <Link href={service.apiKeyUrl} target="_blank">
                <Button
                  type="submit"
                  className="w-full py-3 font-semibold rounded-lg transition-all"
                >
                  Get The Api Key
                </Button>
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

// ---------------------
// Main Page Component
// ---------------------
export default function AIIntegrationPage(): JSX.Element {
  const [userInput, setUserInput] = useState<string>("");
  const [aiResponse, setAIResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAIResponse(
        `Mock response to: "${userInput}"\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto px-4 py-8 max-w-full">
      <div className="flex flex-col md:flex-row gap-6 min-h-[600px]">
        <CodePreview />
        <AIInteraction
          userInput={userInput}
          setUserInput={setUserInput}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          aiResponse={aiResponse}
        />
      </div>
    </div>
  );
}
