import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import AvatarImg01 from "@/public/images/avatar-01.jpg";
import AvatarImg02 from "@/public/images/avatar-02.jpg";
import AvatarImg03 from "@/public/images/avatar-03.jpg";
import AvatarImg04 from "@/public/images/avatar-04.jpg";
import PricingTable from "@/components/pricing-table";

export default function HeroPricing() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-12 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Pick the right plan for your business
            </h1>
          </div>
          <div className="relative">
            {/* Secondary illustration */}
            <div
              className="pointer-events-none absolute bottom-28 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
              aria-hidden="true"
            >
              <Image
                className="md:max-w-none"
                src={SecondaryIllustration}
                width={1165}
                height={1012}
                alt="Secondary illustration"
              />
            </div>
            <PricingTable />
            {/* Team CTA */}
            <div className="mx-auto mt-8 max-w-2xl xl:max-w-none">
              <a
                className="group flex items-center justify-between gap-3 rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 bg-[length:100%_100%] bg-[center] px-4 py-3 backdrop-blur-xs transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:400%_100%]"
                href="#0"
              >
                <span className="text-indigo-200/65">
                  <span className="font-medium text-gray-200">Large team?</span>{" "}
                  Schedule a Business demo with a member of our team.
                </span>
                <span
                  className="flex shrink-0 items-center gap-3"
                  aria-hidden="true"
                >
                  {/* Avatars */}
                  <span className="-ml-0.5 flex -space-x-3">
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg01}
                      width={24}
                      height={24}
                      alt="Avatar 01"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg02}
                      width={24}
                      height={24}
                      alt="Avatar 02"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg03}
                      width={24}
                      height={24}
                      alt="Avatar 03"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg04}
                      width={24}
                      height={24}
                      alt="Avatar 04"
                    />
                  </span>
                  {/* Arrow */}
                  <span className="tracking-normal text-indigo-500 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
