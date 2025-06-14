export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
// import Pricing from "@/components/pricing-home";
import SplitCarousel from "@/components/split-carousel";
import Clients from "@/components/clients";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Clients />
      <SplitCarousel />
      
      {/* <Pricing /> */}
      <Cta />
    </>
  );
}
