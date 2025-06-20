export const metadata = {
  title: "About us - Treza",
  description: "Meet the team behind Treza - secure enclaves for autonomous agents with trusted compute and automated execution.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-about";
import Timeline from "@/components/timeline";
import Team from "@/components/team";
import Benefits from "@/components/benefits";
import Career from "@/components/career";
import Clients from "@/components/clients";
import Cta from "@/components/cta";

export default function About() {
  return (
    <>
      <PageIllustration multiple />
      {/* <Hero /> */}
      {/* <Timeline /> */}
      <Team />
      {/* <Benefits />
      <Career />
      <Clients /> */}
      <Cta />
    </>
  );
}
