import Image from "next/image";

export default function ApplicationsTeaser() {
  return (
    <section className="relative">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none opacity-20"
          src="/images/blurred-shape-gray.svg"
          width={760}
          height={668}
          alt="Background decoration"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Confidential Applications
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              One-click confidential apps
            </h2>
            <p className="text-lg text-indigo-200/65">
              Deploy secure applications instantly with cryptographic privacy guarantees.
            </p>
          </div>

          {/* Main content card */}
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-400/10 to-purple-600/5 p-8 backdrop-blur-sm border border-indigo-500/20">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Left side - Deployment summary */}
                <div className="flex justify-center lg:justify-start">
                  <div className="w-full max-w-sm rounded-2xl bg-gray-900/90 border border-gray-700/50 p-6 shadow-xl backdrop-blur-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="h-3 w-3 bg-red-400"></div>
                        <div className="h-3 w-3 bg-yellow-400"></div>
                        <div className="h-3 w-3 bg-green-400"></div>
                      </div>
                    </div>
                    
                    <h3 className="mb-4 text-lg font-semibold text-gray-200">
                      Pricing & Specs
                    </h3>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">$0.19</span>
                        <span className="text-gray-300">/hour</span>
                        <span className="text-sm text-gray-400">($140/mo)</span>
                      </div>
                      <div className="mt-1 text-sm text-gray-400">
                        2 vCPU • 1GB RAM • m6i.xlarge
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Region:</span>
                        <span className="text-gray-300">us-east-1</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Enclave Type:</span>
                        <span className="text-gray-300">AWS Nitro</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Attestation:</span>
                        <span className="text-green-400">Verified</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Deploy Time:</span>
                        <span className="text-gray-300">~2 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                    Private Enclaves
                  </h3>
                  <p className="mb-6 text-lg text-indigo-200/80">
                    Starting at <span className="font-semibold text-indigo-400">$0.19/hour</span>
                  </p>
                  <p className="mb-8 text-indigo-200/65">
                    Launch secure business applications instantly. From trading algorithms to compliance tools, 
                    deploy with enterprise-grade privacy protection and regulatory compliance built-in.
                  </p>
                  
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/applications"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/20"
                    >
                      Explore Applications
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-gray-200"
                    >
                      Request Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 font-semibold text-gray-200">Instant</h4>
              <p className="text-sm text-indigo-200/65">Launch applications instantly</p>
            </div>
            
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 font-semibold text-gray-200">Compliant</h4>
              <p className="text-sm text-indigo-200/65">Regulatory ready</p>
            </div>
            
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 font-semibold text-gray-200">Verified</h4>
              <p className="text-sm text-indigo-200/65">Cryptographic attestation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
