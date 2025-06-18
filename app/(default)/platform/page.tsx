'use client';

import Link from 'next/link';
import { 
  Server, 
  Shield, 
  Zap, 
  Monitor, 
  Code, 
  Database, 
  Network, 
  Lock,
  Activity,
  Cloud,
  Cpu,
  Key,
  Clock,
  BarChart3,
  Settings,
  Layers,
  Terminal,
  GitBranch,
  Workflow,
  CheckCircle,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

export default function PlatformPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const platformFeatures = [
    {
      title: 'Agent Orchestration',
      description: 'Deploy, schedule, and manage agent lifecycles with automated retry logic and task coordination.',
      icon: Workflow,
      link: '/docs/orchestration',
      color: 'text-indigo-400',
      category: 'execution',
      isNew: true,
      stats: 'Real-time Scheduling'
    },
    {
      title: 'Secure Compute Enclaves',
      description: 'Tamper-proof execution environments with cryptographic attestation and zero network exposure.',
      icon: Shield,
      link: '/docs/secure-compute',
      color: 'text-indigo-400',
      category: 'security',
      isPopular: true,
      stats: 'Hardware-level Security'
    },
    {
      title: 'Delegated Wallet Signing',
      description: 'Multi-key custody solutions with programmable signing policies and transaction approval workflows.',
      icon: Key,
      link: '/docs/wallet-delegation',
      color: 'text-indigo-400',
      category: 'security',
      stats: 'Multi-sig Support'
    },
    {
      title: 'Event-Based Triggers',
      description: 'React to market signals, on-chain events, and system alerts with configurable trigger conditions.',
      icon: Zap,
      link: '/docs/event-triggers',
      color: 'text-indigo-400',
      category: 'execution',
      isNew: true,
      stats: 'Sub-second Response'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Comprehensive observability with execution metrics, performance analytics, and audit trails.',
      icon: Monitor,
      link: '/docs/monitoring',
      color: 'text-indigo-400',
      category: 'monitoring',
      stats: 'Complete Visibility'
    },
    {
      title: 'Developer SDK',
      description: 'Full-featured development kit with APIs, libraries, and tools for seamless agent integration.',
      icon: Code,
      link: '/docs/sdk',
      color: 'text-indigo-400',
      category: 'developer',
      isPopular: true,
      stats: 'Multiple Languages'
    },
    {
      title: 'Resource Allocation',
      description: 'Token-governed compute distribution with priority queues and dynamic pricing mechanisms.',
      icon: Cpu,
      link: '/docs/resource-allocation',
      color: 'text-indigo-400',
      category: 'execution',
      isNew: true,
      stats: 'Dynamic Pricing'
    },
    {
      title: 'Network Orchestration',
      description: 'Distributed execution across multiple nodes with load balancing and fault tolerance.',
      icon: Network,
      link: '/docs/network',
      color: 'text-indigo-400',
      category: 'execution',
      stats: 'Global Distribution'
    },
    {
      title: 'Cryptographic Attestation',
      description: 'Verifiable proof of execution integrity with tamper-resistant logging and audit capabilities.',
      icon: Lock,
      link: '/docs/attestation',
      color: 'text-indigo-400',
      category: 'security',
      stats: 'Cryptographic Proof'
    },
    {
      title: 'Performance Analytics',
      description: 'Deep insights into execution performance, resource utilization, and optimization opportunities.',
      icon: BarChart3,
      link: '/docs/analytics',
      color: 'text-indigo-400',
      category: 'monitoring',
      stats: 'Advanced Metrics'
    },
    {
      title: 'Configuration Management',
      description: 'Centralized configuration with environment-specific settings and version control integration.',
      icon: Settings,
      link: '/docs/configuration',
      color: 'text-indigo-400',
      category: 'developer',
      stats: 'GitOps Ready'
    },
    {
      title: 'Multi-Layer Security',
      description: 'Defense in depth with encryption, access controls, and runtime security monitoring.',
      icon: Layers,
      link: '/docs/security',
      color: 'text-indigo-400',
      category: 'security',
      stats: 'Zero Trust'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Features', count: platformFeatures.length },
    { id: 'execution', name: 'Execution', count: platformFeatures.filter(f => f.category === 'execution').length },
    { id: 'security', name: 'Security', count: platformFeatures.filter(f => f.category === 'security').length },
    { id: 'monitoring', name: 'Monitoring', count: platformFeatures.filter(f => f.category === 'monitoring').length },
    { id: 'developer', name: 'Developer', count: platformFeatures.filter(f => f.category === 'developer').length }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? platformFeatures 
    : platformFeatures.filter(feature => feature.category === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-8">
      <div className="py-12 md:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Execution Platform
            </span>
          </div>
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Secure infrastructure for autonomous agents
          </h1>
          <p className="text-lg text-indigo-200/65">
            Deploy, monitor, and scale crypto agents with enterprise-grade security, real-time orchestration, and verifiable execution environments.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-4xl pb-12 md:pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-800/50 bg-gray-900/20 p-6 text-center backdrop-blur-sm">
              <div className="mb-2 text-2xl font-bold text-indigo-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="rounded-2xl border border-gray-800/50 bg-gray-900/20 p-6 text-center backdrop-blur-sm">
              <div className="mb-2 text-2xl font-bold text-indigo-400">&lt;100ms</div>
              <div className="text-sm text-gray-400">Execution Latency</div>
            </div>
            <div className="rounded-2xl border border-gray-800/50 bg-gray-900/20 p-6 text-center backdrop-blur-sm">
              <div className="mb-2 text-2xl font-bold text-indigo-400">1M+</div>
              <div className="text-sm text-gray-400">Tasks/Day</div>
            </div>
            <div className="rounded-2xl border border-gray-800/50 bg-gray-900/20 p-6 text-center backdrop-blur-sm">
              <div className="mb-2 text-2xl font-bold text-indigo-400">100%</div>
              <div className="text-sm text-gray-400">Verifiable</div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="pb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gray-700/50 hover:text-gray-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Platform Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Link
                key={index}
                href={feature.link}
                className="group relative rounded-2xl border border-gray-800/50 bg-gray-900/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-gray-800/30"
              >
                {/* Status badges */}
                <div className="absolute right-4 top-4 flex gap-2">
                  {feature.isNew && (
                    <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                      New
                    </span>
                  )}
                  {feature.isPopular && (
                    <span className="rounded-full bg-orange-500/20 px-2 py-1 text-xs font-medium text-orange-400">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-4 flex items-center gap-3">
                  <div className={`rounded-lg bg-indigo-500/10 p-2 ${feature.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 group-hover:text-indigo-300 transition-colors">
                      {feature.title}
                    </h3>
                    <div className="text-xs text-indigo-400/70">{feature.stats}</div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-4 flex items-center text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  Learn more
                  <svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto max-w-3xl pt-16 text-center">
          <div className="rounded-2xl border border-gray-800/50 bg-gray-900/20 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Ready to build with Treza?
            </h3>
            <p className="mb-6 text-gray-400">
              Get started with our developer SDK and deploy your first agent in minutes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
              >
                Get Started
              </Link>
              <Link
                href="/docs/api-reference"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-800/50"
              >
                API Reference
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 