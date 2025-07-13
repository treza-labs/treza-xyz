export const metadata = {
    title: "Roadmap - Treza Network",
    description: "Deploy and monetize secure enclaves - Treza's protocol development roadmap for decentralized TEE infrastructure",
  };
  
  import PageIllustration from "@/components/page-illustration";
  import Cta from "@/components/cta";
  
  export default function RoadmapPage() {
    return (
      <>
        <PageIllustration multiple />
        <section>
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="py-12 md:py-20">
              <div className="mx-auto max-w-4xl pb-12 text-center md:pb-20">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    Roadmap
                  </span>
                </div>
                <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Deploy and monetize secure enclaves
                </h1>
                <p className="text-lg text-indigo-200/65 mb-8">
                  Treza is building a decentralized network of secure enclaves using TEE-based compute infrastructure. This roadmap outlines our path from initial execution frameworks to a fully decentralized marketplace for secure computation—supporting any sensitive workload that requires hardware-level protection.
                </p>
              </div>

              {/* Detailed Phases */}
              <div className="mx-auto max-w-4xl">
                
                {/* Phase 1 */}
                <div className="relative py-8 pl-24">
                  <div className="pl-2">
                    <div className="mb-2 flex items-center">
                      <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                        Phase 1
                      </div>
                      <div
                        className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute left-0 ml-20 box-content h-3 w-3 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Core Execution Framework</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Establish the foundational execution layer with TEE abstraction, secure job scheduling, and cryptographic guarantees for arbitrary computation workloads.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">Before any sensitive workload can run securely, we need hardware-rooted execution primitives that provide mathematical guarantees rather than just contractual promises.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          TEE-agnostic execution layer supporting Intel SGX, AMD SEV, and ARM TrustZone
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Secure job orchestration with cryptographic task verification
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Hardware-secured key management and signing capabilities
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Developer SDK for deploying workloads to trusted execution environments
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative py-8 pl-24">
                  <div className="pl-2">
                    <div className="mb-2 flex items-center">
                      <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                        Phase 2
                      </div>
                      <div
                        className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute left-0 ml-20 box-content h-3 w-3 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Cryptographic Attestation & Verification</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Implement hardware-rooted cryptographic attestation with digitally signed execution proofs, enabling mathematically verifiable computation results across heterogeneous TEE technologies.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">Trust-minimized computation requires cryptographic proofs, not just isolation. Attestation transforms opaque execution into verifiable, auditable processes.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Hardware-rooted attestation with digitally signed execution proofs
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Multi-TEE support with unified attestation across Intel SGX, AMD SEV, and ARM TrustZone
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Cryptographic verification of code integrity and environment isolation
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Immutable execution logs with tamper-evident audit trails
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative py-8 pl-24">
                  <div className="pl-2">
                    <div className="mb-2 flex items-center">
                      <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                        Phase 3
                      </div>
                      <div
                        className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute left-0 ml-20 box-content h-3 w-3 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Cryptoeconomic Marketplace</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Launch a cryptoeconomic marketplace where hardware providers monetize underutilized TEE capabilities while developers access secure compute resources through TREZA token-based allocation.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">A sustainable decentralized compute network requires economic incentives that align hardware providers, developers, and the protocol. Tokens create programmable resource allocation.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          TREZA token-based resource allocation and staking mechanisms
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Hardware provider rewards for contributing TEE capacity to the network
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Dynamic pricing and priority queues based on compute demand
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Protocol governance for security parameters and network economics
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="relative py-8 pl-24">
                  <div className="pl-2">
                    <div className="mb-2 flex items-center">
                      <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                        Phase 4
                      </div>
                      <div
                        className="absolute left-0 ml-20 box-content h-3 w-3 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Permissionless Global Network</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Deploy a permissionless, globally scalable infrastructure supporting heterogeneous TEE technologies — enabling any developer to access verifiable compute without barriers.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">This is the endgame: a fully decentralized, hardware-secure compute economy that eliminates centralized points of failure and provides cryptographic guarantees for any sensitive workload.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Permissionless provider onboarding with automated TEE capability discovery
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Global compute marketplace with multi-vendor TEE support
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Workload portability across Intel SGX, AMD SEV, ARM TrustZone, and emerging TEEs
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Self-sovereign execution with cryptographic verification for any sensitive computation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="mx-auto max-w-3xl mt-20 text-center">
                <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                  <h2 className="text-2xl font-nacelle font-semibold text-gray-200 mb-4">
                    Treza is building protocol infrastructure, not applications.
                  </h2>
                  <p className="text-lg text-indigo-200/65">
                    Our roadmap transforms hardware-secured computation into a decentralized protocol — enabling any sensitive workload to run with cryptographic guarantees. We believe verifiable trusted execution will power the next wave of decentralized infrastructure — and Treza will be the protocol foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </>
    );
  }
  