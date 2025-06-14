export const metadata = {
    title: "About us - Open PRO",
    description: "Page description",
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Timeline />
        <Cta />
      </>
    );
  }
  