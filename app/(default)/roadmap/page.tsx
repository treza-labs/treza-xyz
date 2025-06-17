export const metadata = {
    title: "Roadmap - Treza",
    description: "From Reactive Tools to Autonomous Execution - Treza's technical roadmap",
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
                    From Reactive Tools to Autonomous Execution
                  </span>
                </div>
                <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                  Building autonomous crypto execution
                </h1>
                <p className="text-lg text-indigo-200/65 mb-8">
                  Treza is building a secure, scalable execution layer for crypto-native agents. This roadmap outlines our infrastructure-first approach—moving from modular data tools to full agent autonomy through sandboxed compute, delegated signing, and decentralized orchestration.
                </p>
              </div>
              

              {/* Technical Evolution Overview */}
              <div className="mx-auto max-w-5xl mb-16">
                <h2 className="text-2xl font-nacelle font-semibold text-gray-200 mb-8 text-center">Technical Evolution</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-4 px-4 text-indigo-200 font-semibold">Phase</th>
                        <th className="text-left py-4 px-4 text-indigo-200 font-semibold">Focus</th>
                        <th className="text-left py-4 px-4 text-indigo-200 font-semibold">Core Engineering Milestones</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4 font-semibold text-indigo-400">1</td>
                        <td className="py-4 px-4">Reactive Tooling</td>
                        <td className="py-4 px-4">Modular analysis layer with stateless tool calls</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4 font-semibold text-indigo-400">2</td>
                        <td className="py-4 px-4">Agent Runtime & Strategy Execution</td>
                        <td className="py-4 px-4">Secure execution containers with wallet control</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4 font-semibold text-indigo-400">3</td>
                        <td className="py-4 px-4">Trustless Compute Infrastructure</td>
                        <td className="py-4 px-4">Sandboxed agent environments with delegated signing and logging</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4 font-semibold text-indigo-400">4</td>
                        <td className="py-4 px-4">Token-Gated Coordination Layer</td>
                        <td className="py-4 px-4">Staking-based access, strategy validation, and incentive alignment</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-semibold text-indigo-400">5</td>
                        <td className="py-4 px-4">Distributed Agent Ecosystem</td>
                        <td className="py-4 px-4">Peer-executed agents, agent-to-agent communication, and persistent memory</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Phases */}
              <div className="mx-auto max-w-4xl space-y-16">
                
                {/* Phase 1 */}
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 mr-4">
                      <span className="text-indigo-400 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Phase 1: Reactive Tooling</h3>
                      <p className="text-indigo-200/70">Enable AI agents to interface with real-time market data</p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Enable AI agents to interface with real-time market data and wallet activity using modular tool calls.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Key Components</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Token analysis, whale tracking, holder distribution, technical indicators
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          REST API architecture for prompt-based research agents
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Stateless task execution with observable outputs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 mr-4">
                      <span className="text-indigo-400 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Phase 2: Agent Runtime & Strategy Execution</h3>
                      <p className="text-indigo-200/70">Move beyond analysis—enable real execution</p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Move beyond analysis—enable agents to execute real trades, strategies, and actions using deterministic runtimes.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Key Components</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          One-click agent deployment framework
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Controlled wallet management using delegated key systems (Privy)
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Persistent job runners tied to wallets and on-chain triggers
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 mr-4">
                      <span className="text-indigo-400 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Phase 3: Trustless Compute Infrastructure</h3>
                      <p className="text-indigo-200/70">Ensure verifiable, reproducible, and secure execution</p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Ensure agent actions are verifiable, reproducible, and secure within sandboxed environments.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Key Components</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Lightweight execution containers (per-agent)
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Secure task signing, audit logs, and tamper-proof execution
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          MCP integration for portable, model-agnostic tool use
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Isolated environments with built-in safety rails
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 mr-4">
                      <span className="text-indigo-400 font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Phase 4: Token-Gated Coordination Layer</h3>
                      <p className="text-indigo-200/70">Coordinate resources through token-powered economics</p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Coordinate resource access and strategy reputation through a token-powered economic system.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Key Components</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Staking access for premium agents and tools
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Strategy scoring and validation tied to agent performance
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Token incentives for compute providers and builders
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Tiered access control and protocol governance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 5 */}
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 mr-4">
                      <span className="text-indigo-400 font-bold text-lg">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-nacelle font-semibold text-gray-200">Phase 5: Distributed Agent Ecosystem</h3>
                      <p className="text-indigo-200/70">Scale into a decentralized agent economy</p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Objective</h4>
                      <p className="text-gray-300 mb-4">Scale Treza into a decentralized agent economy with permissionless execution and autonomous coordination.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Key Components</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          P2P execution nodes for agent task offloading
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Agent marketplace with permissionless publishing
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Long-term memory modules and inter-agent communication
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          Self-updating agents with continuous learning and tooling upgrades
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
                    Building Real Autonomy
                  </h2>
                  <p className="text-lg text-indigo-200/65">
                    Treza is building foundational infrastructure—not dashboards, but real autonomy. Each phase lays the groundwork for crypto agents that don't just react to data but execute securely, trustlessly, and at scale.
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
  