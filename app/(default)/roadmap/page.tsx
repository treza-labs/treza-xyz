export const metadata = {
    title: "Roadmap - Treza Network",
    description: "Private enclaves for any workload - Treza's protocol development roadmap for decentralized TEE infrastructure",
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
                Private enclaves for any workload
                </h1>
                <p className="text-lg text-indigo-200/65 mb-8">
                  Treza is building enterprise-grade private compute infrastructure using TEE-based trusted execution environments. This roadmap outlines our path from core execution frameworks to smart contract integration and enterprise adoption—enabling businesses to run sensitive workloads with cryptographic privacy guarantees.
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
                      <p className="text-gray-300 mb-4">Establish the foundational execution layer with TEE abstraction, private job scheduling, and cryptographic guarantees for arbitrary computation workloads.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">Before any sensitive workload can run privately, we need hardware-rooted execution primitives that provide mathematical privacy guarantees rather than just contractual promises.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          TEE-agnostic execution layer supporting AWS Nitro Enclaves, Google Cloud's confidential VMs, Azure's trusted execution, and NVIDIA H100 secure computing
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Private job orchestration with cryptographic task verification
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Hardware-protected key management and signing capabilities
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Developer SDK for deploying Docker containers and applications to trusted execution environments
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
                      <p className="text-gray-300 mb-4">Implement hardware-rooted cryptographic privacy attestation with digitally signed execution proofs, enabling mathematically verifiable private computation results across heterogeneous TEE technologies.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">Privacy-preserving computation requires cryptographic proofs, not just isolation. Privacy attestation transforms opaque execution into verifiable, auditable private processes.</p>
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
                          Multi-TEE support with unified privacy attestation across AWS Nitro Enclaves, Google Cloud's confidential VMs, Azure's trusted execution, and NVIDIA H100
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
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">On-Chain Verification & Smart Contracts</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Build smart contracts that verify and utilize privacy attestation documents from private enclaves. Enable trustless verification of off-chain computation results through programmable on-chain validation.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">Bridging off-chain private execution with on-chain verification creates trustless computation workflows. Smart contracts can programmatically validate execution integrity without requiring trust in centralized attestation authorities.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Smart contract libraries for verifying TEE privacy attestation documents and execution proofs
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          On-chain validation of off-chain computation results with cryptographic verification
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Programmable verification logic supporting multiple TEE architectures and attestation formats
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Integration APIs enabling DeFi and Web3 applications to consume verified computation results
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
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Enterprise Platform & Go-to-Market</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Launch enterprise-ready platform with comprehensive compliance features, dedicated support, and strategic partnerships — enabling Fortune 500 companies to adopt private compute at scale.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">Enterprise adoption drives sustainable growth and validates our technology at scale. Strategic partnerships and compliance frameworks unlock new markets and establish Treza as the industry standard for private computation.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Enterprise-grade compliance framework supporting SOC 2, HIPAA, and FedRAMP requirements
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Dedicated enterprise support with SLA guarantees and 24/7 technical assistance
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Strategic partnerships with cloud providers and system integrators for market expansion
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Professional services and consulting to accelerate enterprise adoption and implementation
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
                    Treza is building enterprise-grade private compute infrastructure.
                  </h2>
                  <p className="text-lg text-indigo-200/65">
                    Our roadmap delivers private execution environments for enterprise AI, financial services, and regulated industries. Treza provides the private compute foundation they need.
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
  