import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import CodeShowcase from "@/app/components/code-showcase";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";
import { HeroVideo } from "./components/HeroVideo";
import BeamMultiple from "./components/BeamMultiple";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <BeamMultiple />
      <CodeShowcase />
      <HeroVideo />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
