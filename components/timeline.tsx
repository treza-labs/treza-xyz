export default function Timeline() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Items */}
          <div
            className="-my-4 mx-auto max-w-3xl md:-my-6"
            data-aos-id-timeline=""
          >
            {/* 1st item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                The idea
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    Q4, 2024
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                  From idea to execution
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                Crypto tooling felt reactive, fragmented, and noisy. We imagined a future where agents could reason, coordinate, and execute across any chain.
                </p>
              </div>
            </div>
            {/* 2nd item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                First launch
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                  Q1, 2025
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                  Released Treza's Research & Execution Tools
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                Released Treza's Research & Execution Tools
                From token analysis to whale tracking, our first suite of tools made it easy to generate insights and test agent-driven workflows.
                </p>
              </div>
            </div>
            {/* 3rd item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                Real agents

                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                  Q2, 2025
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                  Launched agent deployment + execution
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                One-click agents became real—capable of running strategies, monitoring wallets, and executing trades on Solana and beyond.
                </p>
              </div>
            </div>
            {/* 4th item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                Launching Treza

                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                  Q3, 2025
                  </div>
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    The Treza token goes live on Ethereum
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                Our native token powers the next phase of Treza's access to advanced agents, enabling staking for strategy validation, and aligning incentives across the network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
