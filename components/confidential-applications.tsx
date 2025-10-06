"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ShieldCheck,
  BarChart3,
  HeartPulse,
  Video
} from "lucide-react";

// Application categories
const categories = [
  { id: "all", name: "All Applications" },
  { id: "finance", name: "Finance" },
  { id: "ai", name: "AI & ML" },
  { id: "crypto", name: "Crypto" },
  { id: "data", name: "Data" },
  { id: "media", name: "Media" },
  { id: "security", name: "Security" },
];

// Application data
const applications = [
  {
    id: "docker-container",
    name: "Docker Container Runtime",
    category: "security",
    description: "Run containerized applications in secure enclaves",
    icon: "/providers/docker-mark-blue.svg",
    pricing: "$0.15/hour",
  },
  {
    id: "aws-nitro-enclave",
    name: "AWS Nitro Enclave",
    category: "security",
    description: "Deploy applications on AWS Nitro with hardware isolation",
    icon: "/providers/aws-nitro.svg",
    pricing: "$0.25/hour",
  },
  {
    id: "gcp-confidential-vm",
    name: "GCP Confidential VM",
    category: "security",
    description: "Secure compute on Google Cloud with confidential computing",
    icon: "/providers/google-cloud.png",
    pricing: "$0.28/hour",
  },
  {
    id: "openai-inference",
    name: "Private GPT Inference",
    category: "ai",
    description: "Run OpenAI-compatible models privately with no data leakage",
    icon: "/providers/openai-white-logomark.svg",
    pricing: "$0.25/hour",
  },
  {
    id: "claude-inference",
    name: "Private Claude Inference", 
    category: "ai",
    description: "Execute Claude-compatible models in secure enclaves",
    icon: "/providers/claude.svg",
    pricing: "$0.22/hour",
  },
  {
    id: "deepseek-inference",
    name: "Private DeepSeek Inference",
    category: "ai", 
    description: "Run DeepSeek models with guaranteed input/output privacy",
    icon: "/providers/deepseek.svg",
    pricing: "$0.18/hour",
  },
  {
    id: "ethereum-node",
    name: "Ethereum RPC Node",
    category: "crypto",
    description: "Private Ethereum node with secure RPC access",
    icon: "/providers/ethereum-eth-logo-diamond.svg",
    pricing: "$0.30/hour",
  },
  {
    id: "solana-node",
    name: "Solana RPC Node",
    category: "crypto",
    description: "High-performance Solana RPC with private access",
    icon: "/providers/solana-sol-logo.svg",
    pricing: "$0.28/hour",
  },
  {
    id: "media-rendering",
    name: "Secure Media Rendering",
    category: "media",
    description: "Render sensitive video content with cryptographic proof of confidentiality",
    icon: "video",
    pricing: "$0.45/hour",
  },
  {
    id: "risk-model",
    name: "Risk Assessment Model",
    category: "finance",
    description: "Calculate VaR and risk metrics with cryptographic proof",
    icon: "shield-check",
    pricing: "$0.18/hour",
  },
  {
    id: "trading-algorithm",
    name: "Trading Algorithm",
    category: "finance", 
    description: "Execute private trading strategies with secure execution",
    icon: "chart-bar",
    pricing: "$0.22/hour",
  },
  {
    id: "hipaa-data-processing",
    name: "HIPAA Compliant Data Processing",
    category: "data",
    description: "Process healthcare data with HIPAA compliance and cryptographic privacy",
    icon: "heart-pulse",
    pricing: "$0.24/hour",
  },
];

export default function ConfidentialApplications() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredApplications = activeCategory === "all" 
    ? applications 
    : applications.filter(app => app.category === activeCategory);

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
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
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

          {/* Category filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "bg-gray-800/40 text-indigo-200/65 hover:bg-gray-800/60 hover:text-indigo-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Applications grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredApplications.map((app) => (
              <div
                key={app.id}
                className="group relative rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all hover:from-gray-800/60 hover:to-gray-900/60 h-80 flex flex-col"
                data-aos="fade-up"
              >
                {/* Application content */}
                <div className="text-center flex flex-col h-full">
                        <div className="mb-4 flex justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 p-3">
                            {app.icon.startsWith('/') ? (
                              <Image
                                src={app.icon}
                                alt={app.name}
                                width={24}
                                height={24}
                                className="object-contain"
                              />
                            ) : (
                        <div className="flex items-center justify-center w-full h-full">
                          {app.icon === 'shield-check' && (
                            <ShieldCheck className="w-6 h-6 text-indigo-400" />
                          )}
                          {app.icon === 'chart-bar' && (
                            <BarChart3 className="w-6 h-6 text-indigo-400" />
                          )}
                          {app.icon === 'heart-pulse' && (
                            <HeartPulse className="w-6 h-6 text-indigo-400" />
                          )}
                          {app.icon === 'video' && (
                            <Video className="w-6 h-6 text-indigo-400" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-semibold text-gray-200">{app.name}</h3>
                  <p className="mb-4 text-sm text-indigo-200/65 flex-grow">{app.description}</p>
                  
                  <div className="mb-6 text-indigo-400 font-medium">{app.pricing}</div>

                  <a
                    href="/contact"
                    className="block w-full rounded-lg border border-gray-600 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:bg-gray-800/30 hover:text-gray-200 mt-auto"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              * Pricing estimates based on standard compute resources. Actual costs may vary.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-4 text-xl font-semibold text-gray-200">
                Need a custom application?
              </h3>
              <p className="mb-6 text-indigo-200/65">
                Our team can help you build and deploy custom confidential applications tailored to your specific requirements.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="btn bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-lg hover:from-indigo-700 hover:to-indigo-600"
                >
                  Request Custom Demo
                </a>
                <a
                  href="https://docs.trezalabs.com/"
                  className="btn border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-gray-200"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
