export const metadata = {
  title: "Treza Network - Private enclaves for any workload",
  description: "Deploy your applications in hardware-protected enclaves with cryptographic privacy guarantees. Run Docker containers on AWS Nitro, Google Cloud, and Azure's trusted execution environments.",
  openGraph: {
    title: "Treza Network - Private enclaves for any workload",
    description: "Deploy your applications in hardware-protected enclaves with cryptographic privacy guarantees. Run Docker containers on AWS Nitro, Google Cloud, and Azure's trusted execution environments.",
    url: "https://trezalabs.com",
    siteName: "Treza Network",
    images: [
      {
        url: "/images/treza-banner.png",
        width: 1200,
        height: 630,
        alt: "Treza Network - Private enclaves for any workload",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treza Network - Private enclaves for any workload",
    description: "Deploy your applications in hardware-protected enclaves with cryptographic privacy guarantees. Run Docker containers on AWS Nitro, Google Cloud, and Azure's trusted execution environments.",
    images: ["/images/treza-banner.png"],
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import IntroVideo from "@/components/intro-video";
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
      <IntroVideo />
      <Workflows />
      <Features />
      <Clients />
      <SplitCarousel />
      
      {/* <Pricing /> */}
      <Cta />
    </>
  );
}
