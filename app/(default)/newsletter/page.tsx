export const metadata = {
  title: "Features - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import AvatarImg01 from "@/public/images/avatar-group-01.jpg";
import AvatarImg02 from "@/public/images/avatar-group-02.jpg";
import AvatarImg03 from "@/public/images/avatar-group-03.jpg";
import AvatarImg04 from "@/public/images/avatar-group-04.jpg";
import FooterSeparator from "@/components/footer-separator";

export default function Newsletter() {
  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <div className="mb-3 inline-flex">
                <div className="relative flex items-center gap-2 rounded-full bg-gray-900/90 p-1 pr-3 text-sm text-indigo-200/65 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
                  <div className="-ml-0.5 flex -space-x-2">
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg01}
                      width={20}
                      height={20}
                      alt="Avatar 01"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg02}
                      width={20}
                      height={20}
                      alt="Avatar 02"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg03}
                      width={20}
                      height={20}
                      alt="Avatar 03"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg04}
                      width={20}
                      height={20}
                      alt="Avatar 04"
                    />
                  </div>
                  <span>
                    <strong className="font-normal text-gray-200">20K</strong>{" "}
                    have already subscribed.
                  </span>
                </div>
              </div>
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Join our newsletter
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-indigo-200/65">
                  Sign up to get early access to product launches, promotions,
                  and exclusive offers. Join our newsletter today!
                </p>
              </div>
            </div>
            {/* Contact form */}
            <form className="mx-auto max-w-[440px]">
              <div className="flex gap-3">
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email address"
                  aria-label="Email"
                />
                <button className="btn group w-full flex-1 bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                  <span className="relative inline-flex items-center">
                    Subscribe
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </button>
              </div>
            </form>
            <p className="mt-5 text-center text-sm text-gray-600">
              No spam, only helpful content.
            </p>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
