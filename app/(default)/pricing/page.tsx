export const metadata = {
  title: "Pricing - Treza",
  description: "Transparent pricing for Treza's secure enclave platform. Choose the plan that fits your autonomous agent deployment needs.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-pricing";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Pricing() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Faqs />
      <Testimonials />
      <Cta />
    </>
  );
}
