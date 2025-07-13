"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { TabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import CarouselImg01 from "@/public/images/carousel-01.png";
import CarouselImg02 from "@/public/images/carousel-02.png";
import CarouselImg03 from "@/public/images/carousel-03.png";
import SmallTestimonialImg from "@/public/images/small-testimonial.jpg";

const tabs = [
  {
    title: "Cryptographic Attestation",
    description:
      "Hardware-rooted proofs of execution integrity with digitally signed attestations. Every computational job provides mathematically verifiable evidence of code authenticity and environment isolation.",
    img: CarouselImg01,
    imgAlt: "Carousel image 01",
  },
  {
    title: "Provider Network",
    description:
      "Distributed fleet of compute providers running TEE-enabled hardware. Autonomous agents discover capabilities, bid on jobs, execute in isolated enclaves, and submit verifiable results.",
    img: CarouselImg02,
    imgAlt: "Carousel image 02",
  },
  {
    title: "TEE Abstraction Layer",
    description:
      "Unified interface across Intel SGX, AMD SEV, ARM TrustZone, and RISC-V architectures. Hardware-agnostic deployment with consistent security guarantees across heterogeneous infrastructure.",
    img: CarouselImg03,
    imgAlt: "Carousel image 03",
  },
];

export default function SplitCarousel() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <section>
      <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab} vertical>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
            <div className="flex flex-col items-center justify-between pb-12 md:flex-row md:gap-8 md:pb-20 lg:gap-16">
              {/* Left content */}
              <div className="shrink-0 md:w-[500px] *:pl-7">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  Decentralized Protocol
                  </span>
                </div>
                <div className="relative mb-6 border-l [border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-400/.25),transparent)1] after:absolute after:left-0 after:top-0 after:h-4 after:w-px after:origin-bottom after:-translate-y-full after:animate-shine after:bg-[linear-gradient(180deg,transparent,--theme(--color-indigo-500/.5)_25%,--theme(--color-indigo-500)_50%,--theme(--color-indigo-500/.5)_75%,transparent)] after:opacity-0">
                  <div className="mb-4">
                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                    Trust-minimized compute marketplace
                    </h2>
                    <p className="text-indigo-200/65">
                    Treza creates a global marketplace for verifiable computation where hardware providers monetize TEE capabilities and developers access cryptographically-isolated execution environments.
                    </p>
                  </div>

                  {/* Buttons */}
                  <TabList className="space-y-2">
                    {tabs.map((tab, index) => (
                      <Tab key={index} as={Fragment}>
                        <button
                          className={`-mx-2 flex gap-2 p-2 text-left transition-opacity focus-visible:outline-hidden ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 ${selectedTab !== index ? "opacity-50 hover:opacity-70" : ""}}`}
                        >
                          <svg
                            className={`shrink-0 ${selectedTab !== index ? "fill-gray-600" : "fill-indigo-500"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                          >
                            <path d="m14.092 5.207-8.207 8.207-3.592-3.591 1.414-1.415 2.178 2.178 6.793-6.793 1.414 1.414Z" />
                          </svg>
                          <span>
                            <span className="font-medium text-gray-200">
                              {tab.title}
                            </span>
                            <span className="text-gray-700"> - </span>
                            <span className="text-indigo-200/65">
                              {tab.description}
                            </span>
                          </span>
                        </button>
                      </Tab>
                    ))}
                  </TabList>
                </div>
                                <div>
                  <p className="mb-4 font-nacelle text-gray-200">
                    "Treza eliminates the complexity of managing secure infrastructure and key custody. We can focus on building our agents instead of worrying about dev ops and security vulnerabilities."
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      className="inline-flex shrink-0 rounded-full"
                      src={SmallTestimonialImg}
                      width={24}
                      height={24}
                      alt="Small testimonial"
                    />
                    <div className="text-sm font-medium text-gray-200">
                      <span>David Kim</span>
                      <span className="text-gray-700"> - </span>
                      <span className="text-indigo-200/65">Head of Engineering</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <TabPanels className="shrink-0 md:w-[540px]" data-aos="fade-up">
                <div className="relative flex flex-col">
                  {tabs.map((tab, index) => (
                    <Transition
                      key={index}
                      as="div"
                      show={selectedTab === index}
                      className={`transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-translate-y-6 data-leave:data-closed:translate-y-12 data-closed:opacity-0 data-enter:duration-500 data-leave:duration-300`}
                      unmount={false}
                      appear={true}
                    >
                      <TabPanel as={Fragment} static={true}>
                        <Image
                          width={540}
                          height={520}
                          src={tab.img}
                          alt={tab.imgAlt}
                        />
                      </TabPanel>
                    </Transition>
                  ))}
                </div>
              </TabPanels>
            </div>
          </div>
        </div>
      </TabGroup>
    </section>
  );
}
