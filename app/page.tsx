import { CtaSignup } from "@/components/CtaSignup";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { ScreenshotShowcase } from "@/components/ScreenshotShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ScreenshotShowcase />
        <Features />
        <Pricing />
        <CtaSignup />
      </main>
      <Footer />
    </>
  );
}
