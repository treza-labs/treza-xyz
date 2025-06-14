import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import TestimonialImage from "@/public/images/large-testimonial-01.jpg";
import PricingTable from "@/components/pricing-table";

export default function PricingHome() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-20 -translate-x-1/3"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-10 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Pick the right plan for your business
            </h2>
          </div>
          {/* Pricing table */}
          <PricingTable />
          {/* Single testimonial */}
          <div className="mx-auto max-w-3xl">
            <div className="pt-12 md:pt-20">
              <div className="text-center">
                <Image
                  className="mb-3 inline-flex rounded-full"
                  src={TestimonialImage}
                  width={40}
                  height={40}
                  alt="Large testimonial"
                />
                <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-xl font-semibold text-transparent">
                  “Open PRO lives up to its name. It's incredibly easy to use
                  yet powerful enough to handle all my content needs
                  effortlessly. It's become an essential part of our work
                  routine.”
                </p>
                <div className="text-sm font-medium text-gray-200">
                  <span>Chris Pick</span>
                  <span className="text-gray-700"> - </span>
                  <a
                    className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                    href="#0"
                  >
                    VP of Product, Disney
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
