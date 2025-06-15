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
        <section>
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="py-12 md:py-20">
              <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    Roadmap
                  </span>
                </div>
                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Building autonomous crypto execution
                </h2>
                <p className="text-lg text-indigo-200/65">
                  We started Treza to give crypto users real tools—not dashboards, but agents that act. We believe execution is the future of on-chain intelligence.
                </p>
              </div>
              <Timeline />
            </div>
          </div>
        </section>
        <Cta />
      </>
    );
  }
  