export const metadata = {
  title: "Treza - Secure Enclaves for Autonomous Agents",
  description: "Trusted compute, automated execution, and secure key management for crypto-native agents and workflows. Deploy agents inside secure enclaves with isolated compute and scoped key access.",
  openGraph: {
    title: "Treza - Secure Enclaves for Autonomous Agents",
    description: "Trusted compute, automated execution, and secure key management for crypto-native agents and workflows. Deploy agents inside secure enclaves with isolated compute and scoped key access.",
    url: "https://treza.xyz",
    siteName: "Treza",
    images: [
      {
        url: "/images/treza-banner.png",
        width: 1200,
        height: 630,
        alt: "Treza - Secure Enclaves for Autonomous Agents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treza - Secure Enclaves for Autonomous Agents",
    description: "Trusted compute, automated execution, and secure key management for crypto-native agents and workflows. Deploy agents inside secure enclaves with isolated compute and scoped key access.",
    images: ["/images/treza-banner.png"],
  },
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
