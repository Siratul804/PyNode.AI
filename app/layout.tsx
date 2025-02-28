import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import { ThemeWrapper } from "@/app/components/theme-wrapper";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PyNode.AI",
  description:
    "PyNode.AI simplifies AI model integration with comprehensive code examples and documentation for both Python and Node.js.  Build and deploy your AI projects faster with our cross-platform resources.",
  metadataBase: new URL("https://pynodeai.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/thum.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeWrapper>
            <div className="min-h-screen bg-background text-foreground">
              {children}
            </div>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
