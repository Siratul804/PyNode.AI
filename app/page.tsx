import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import CodeShowcase from "@/app/components/code-showcase";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CodeShowcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
