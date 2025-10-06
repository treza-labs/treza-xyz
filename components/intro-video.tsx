import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function IntroVideo() {
  return (
    <section className="relative">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Introduction
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Intro to Treza
            </h2>
            <p className="text-lg text-indigo-200/65">
              Understand how Treza enables secure, verifiable computation in trusted execution environments.
            </p>
          </div>

          {/* Video container */}
          <div className="mx-auto max-w-4xl" data-aos="fade-up">
            <div className="relative overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,var(--color-gray-700/.15),var(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <div className="relative overflow-hidden rounded-[inherit] bg-gray-950">
                {/* Responsive video wrapper */}
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/kbHlC0vi8sQ?rel=0&modestbranding=1&color=white&fs=1&cc_load_policy=0&iv_load_policy=3&theme=dark"
                    title="Intro to Treza"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full rounded-[inherit]"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 