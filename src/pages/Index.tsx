import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SocialFeed } from "@/components/SocialFeed";
import { Streaks } from "@/components/Streaks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SocialFeed />
      <Streaks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
