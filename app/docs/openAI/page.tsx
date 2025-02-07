"use client";

import React, { useState } from "react";
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

// Code samples
const pythonCode: string = `import openai

# Replace with your OpenAI API key
api_key = "your-api-key"

def get_ai_response(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            api_key=api_key  # Pass the API key directly
        )
        return response["choices"][0]["message"]["content"]
    except Exception as e:
        return f"Error: {str(e)}"

# Example usage
user_input = input("Enter your prompt: ")
ai_response = get_ai_response(user_input)
print("AI Response:", ai_response)
`;

const nodejsCode: string = `const { OpenAI } = require("openai");

// Replace with your OpenAI API key
const openai = new OpenAI({
    apiKey: "your-api-key",  // Ensure you keep this secret
});

async function getAIResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        console.log("AI Response:", response.choices[0].message.content);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example usage
const userInput = "Hello, how can AI help me today?";
getAIResponse(userInput);
`;

// ---------------------
// CodePreview Component with Copy Option
// ---------------------
interface CodePreviewProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const CodePreview: React.FC<CodePreviewProps> = ({
  selectedLanguage,
  setSelectedLanguage,
}) => {
  // State to track which language's code was copied.
  const [copiedLanguage, setCopiedLanguage] = useState<string | null>(null);

  // Copy the code to clipboard and set a temporary state for feedback.
  const handleCopy = (language: string, code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedLanguage(language);
        setTimeout(() => {
          setCopiedLanguage(null);
        }, 2000);
      })
      .catch((err) => console.error("Failed to copy code: ", err));
  };

  return (
    <Card className="flex-1 h-full">
      <CardHeader>
        <CardTitle className="text-xl">Integration Code Samples</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Example implementations for different languages
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="nodejs">Node.js</TabsTrigger>
          </TabsList>
          <TabsContent value="python" className="mt-4 relative">
            {/* Copy Button for Python */}
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-4 z-10"
              onClick={() => handleCopy("python", pythonCode)}
            >
              {copiedLanguage === "python" ? "Copied" : "Copy"}
            </Button>
            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              className="rounded-lg p-4 text-sm w-full lg:w-[75vh] md:w-[75] "
              showLineNumbers
            >
              {pythonCode}
            </SyntaxHighlighter>
          </TabsContent>
          <TabsContent value="nodejs" className="mt-4 relative">
            {/* Copy Button for Node.js */}
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-4 z-10"
              onClick={() => handleCopy("nodejs", nodejsCode)}
            >
              {copiedLanguage === "nodejs" ? "Copied" : "Copy"}
            </Button>
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              className="rounded-lg p-4 text-sm w-full lg:w-[75vh] md:w-[75] "
              showLineNumbers
            >
              {nodejsCode}
            </SyntaxHighlighter>
          </TabsContent>
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
}) => (
  <Card className="flex-1 h-full w-full lg:w-[55vh] md:w-[55] ">
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
          className="w-full py-3  font-semibold rounded-lg transition-all"
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
);

// ---------------------
// Main Page Component
// ---------------------
export default function AIIntegrationPage(): JSX.Element {
  const [userInput, setUserInput] = useState<string>("");
  const [aiResponse, setAIResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("python");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate a delay, e.g., calling an API endpoint.
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
    <div className=" mx-auto px-4 py-8 max-w-full">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          AI Integration Platform
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Explore code samples and interact with our AI model in real-time
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-6 min-h-[600px]">
        <CodePreview
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />

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
