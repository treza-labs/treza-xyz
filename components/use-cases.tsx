import Image from "next/image";
import Link from "next/link";

interface UseCase {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
}

export default function UseCases() {
  const useCases: UseCase[] = [
    {
      id: 1,
      title: "Secure Crypto Wallet Key Signing",
      description: "Protect private keys and signing operations in hardware-secured enclaves.",
      backgroundImage: "/images/use-case-card-4.png",
    },
    {
      id: 2,
      title: "Autonomous Trading Agents",
      description: "Deploy AI-powered trading bots in secure enclaves with cryptographic privacy guarantees.",
      backgroundImage: "/images/use-case-card-1.png",
    },
    {
      id: 3,
      title: "Secure Media Workflows", 
      description: "Process sensitive media content in hardware-protected environments with complete privacy.",
      backgroundImage: "/images/use-case-card-2.png",
    },
    {
      id: 4,
      title: "HIPAA-Compliant\nHealthcare Workflows",
      description: "Run healthcare applications with regulatory compliance in trusted execution environments.",
      backgroundImage: "/images/use-case-card-3.png",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 text-center md:pb-16 md:text-left">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Use Cases
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Secure Enclaves{' '}<span className="block md:inline">for every workload</span>
            </h2>
            <p className="text-lg text-indigo-200/65">
              Discover how Treza's hardware-protected enclaves enable secure computing across industries.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {useCases.map((useCase, index) => (
              <Link
                href={
                  useCase.id === 1
                    ? "https://docs.trezalabs.com/use-cases/secure-key-signing"
                    : useCase.id === 2
                    ? "https://docs.trezalabs.com/use-cases/autonomous-execution"
                    : useCase.id === 3
                    ? "https://docs.trezalabs.com/use-cases/secure-media-workflows"
                    : "https://docs.trezalabs.com/use-cases/hipaa-compliance"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.02] hover:ring-indigo-400/30 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Shorter than square: about 80% height of width */}
                <div className="before:block before:pt-[80%] before:content-['']"></div>

                {/* Absolute content layer */}
                <div className="absolute inset-0">
                  {/* Background Image */}
                  <Image
                    src={useCase.backgroundImage}
                    alt={useCase.title}
                    fill
                    className="object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                    priority={index < 2}
                  />

                  {/* Bottom gradient scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent"></div>

                  {/* Bottom-left text content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
                    {/* Treza logo above title */}
                    <div className="mb-2 inline-flex items-center gap-2">
                      <Image src="/images/logo.svg" alt="Treza" width={16} height={16} />
                      <span className="text-[10px] font-semibold tracking-[0.25em] text-white/80 translate-y-[1px] leading-none">
                        TREZA
                      </span>
                    </div>
                    <h3 className="whitespace-pre-line mb-1.5 font-nacelle text-lg font-semibold md:text-xl animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent">
                      {useCase.title}
                    </h3>
                    <p className="max-w-[40ch] text-[13px] leading-relaxed text-indigo-100/80 md:text-[14px]">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
