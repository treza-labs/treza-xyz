export const metadata = {
  title: "Treza Network - Deploy and monetize secure enclaves",
  description: "Deploy sensitive workloads in hardware-secured enclaves with cryptographic verification. TEE-agnostic protocol supporting Intel SGX, AMD SEV, and ARM TrustZone.",
  openGraph: {
    title: "Treza Network - Deploy and monetize secure enclaves",
    description: "Deploy sensitive workloads in hardware-secured enclaves with cryptographic verification. TEE-agnostic protocol supporting Intel SGX, AMD SEV, and ARM TrustZone.",
    url: "https://treza.xyz",
    siteName: "Treza Network",
    images: [
      {
        url: "/images/treza-banner.png",
        width: 1200,
        height: 630,
        alt: "Treza Network - Deploy and monetize secure enclaves",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treza Network - Deploy and monetize secure enclaves",
    description: "Deploy sensitive workloads in hardware-secured enclaves with cryptographic verification. TEE-agnostic protocol supporting Intel SGX, AMD SEV, and ARM TrustZone.",
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
