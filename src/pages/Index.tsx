import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Streaks } from "@/components/Streaks";
import { Screenshots } from "@/components/Screenshots";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Screenshots />
      <Streaks />
      <Pricing />
     {/*  <Testimonials /> */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
