export const metadata = {
  title: "Treza Network - Verifiable, Decentralized Trusted Execution",
  description: "A decentralized protocol for deploying and executing arbitrary computation within cryptographically-isolated and verifiable enclaves. TEE-agnostic infrastructure with cryptographic attestation for secure, private workloads.",
  openGraph: {
    title: "Treza Network - Verifiable, Decentralized Trusted Execution",
    description: "A decentralized protocol for deploying and executing arbitrary computation within cryptographically-isolated and verifiable enclaves. TEE-agnostic infrastructure with cryptographic attestation for secure, private workloads.",
    url: "https://treza.xyz",
    siteName: "Treza Network",
    images: [
      {
        url: "/images/treza-banner.png",
        width: 1200,
        height: 630,
        alt: "Treza Network - Verifiable, Decentralized Trusted Execution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treza Network - Verifiable, Decentralized Trusted Execution",
    description: "A decentralized protocol for deploying and executing arbitrary computation within cryptographically-isolated and verifiable enclaves. TEE-agnostic infrastructure with cryptographic attestation for secure, private workloads.",
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
