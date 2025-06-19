import Image from "next/image";
import VideoThumb from "@/public/images/bg-chart-2.png";
import VideoThumb2 from "@/public/images/bg-chart.png";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background images */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={VideoThumb}
          alt="Hero background 1"
          fill
          className="object-cover opacity-80"
          priority
        />
        <Image
          src={VideoThumb2}
          alt="Hero background 2"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Optional: dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Hero content */}
        <div className="py-16 md:py-55 min-h-[65vh]">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-5">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Secure enclaves for crypto execution
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Sandboxed compute, delegated signing, and decentralized orchestration built for autonomous execution.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://app.treza.xyz"
                  >
                    <span className="relative inline-flex items-center">
                      Deploy Enclaves
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://docs.treza.xyz"
                  >
                   Read The Docs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Only show ModalVideo on desktop */}
          {/*
          <div className="hidden md:block">
            <ModalVideo
              thumb={VideoThumb}
              thumb2={VideoThumb2}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="https://d3ounuq3r911zv.cloudfront.net/treza-xyz/treza.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
