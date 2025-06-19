export const metadata = {
    title: "Roadmap - Treza",
    description: "Secure enclaves for crypto transactions - Treza's technical roadmap",
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
                Secure enclaves for crypto transactions
                </h1>
                <p className="text-lg text-indigo-200/65 mb-8">
                  Treza is building a secure, scalable execution layer for crypto-native agents. This roadmap outlines our infrastructure-first approach—moving from modular data tools to full agent autonomy through sandboxed compute, delegated signing, and decentralized orchestration.
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
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Agent Execution Framework</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Launch the core infrastructure that allows agents to be deployed, triggered, and monitored in real-time — abstracting away wallet control and execution complexity.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">Before agents can scale, they need a secure, reliable way to interact with crypto systems. Treza makes execution as programmable as reasoning.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Agent orchestration with task scheduling and retry logic
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Delegated wallet signing with support for multi-key custody
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Event-based task triggering from market or system signals
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Developer SDK for seamless integration into agent workflows
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
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Secure Compute via Isolated Environments</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Provision trusted enclave-based containers for sensitive agent tasks — ensuring all logic runs in sealed, tamper-proof environments with cryptographic guarantees.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">In a world where agents hold keys and execute financial logic, execution must be verifiable. Secure enclaves solve this at the hardware level.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Single-use compute environments with zero network exposure
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Cryptographic attestation for code integrity and environment validation
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Secure channel communication and encrypted payloads
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Tamper-resistant logging and auditability for every execution
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
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Token-Governed Resource Allocation</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Introduce a token economy to coordinate access, prioritize workloads, and reward compute providers — aligning incentives across the network.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">A global execution network needs a scalable way to price, allocate, and secure resources. Tokens create programmable trust.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Token staking for access to high-throughput or premium workloads
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Priority queues and task pricing based on demand
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Compute rewards for node operators and enclave hosts
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Governance for protocol rules, safety thresholds, and network tuning
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
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Decentralized Execution Network</h3>
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Distribute enclave compute across global node operators — enabling permissionless agent deployment, verifiable results, and peer-executed workloads.</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Why It Matters</h4>
                      <p className="text-gray-300 mb-4">This is the endgame: a fully decentralized, hardware-secure agent economy that can operate without centralized infrastructure.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">What We're Building</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Distributed enclave provisioning and encrypted task routing
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Agent publishing, reuse, and strategy marketplaces
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Inter-agent coordination with persistent memory and task chaining
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Continuous learning agents that update, evolve, and scale independently
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
                    Treza is building infrastructure, not interfaces.
                  </h2>
                  <p className="text-lg text-indigo-200/65">
                    Our roadmap turns enclave-secured compute into a product — and agent execution into an open, investable market. We believe agents will power the next cycle of crypto infrastructure — and Treza will be the network they run on.
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
  