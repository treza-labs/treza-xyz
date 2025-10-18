export const metadata = {
  title: "TREZA Tokenomics - Token Distribution Analysis",
  description: "Explore TREZA token allocation and distribution with interactive visualizations.",
  openGraph: {
    title: "TREZA Tokenomics - Token Distribution Analysis",
    description: "Explore TREZA token allocation and distribution with interactive visualizations.",
    url: "/images/hero-meta.png",
    siteName: "Treza Network",
    images: [
      {
        url: "/images/treza-banner.png",
        width: 1200,
        height: 630,
        alt: "TREZA Tokenomics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TREZA Tokenomics - Token Distribution Analysis",
    description: "Explore TREZA token allocation and distribution with interactive visualizations.",
    images: ["/images/treza-banner.png"],
  },
};

import PageIllustration from "@/components/page-illustration";
import TokenomicsChart from "@/components/tokenomics-chart";

export default function TokenomicsPage() {
  // Move tokenAllocations to the client component to avoid passing icon functions
  const tokenAllocations = [
    {
      category: "Initial Liquidity",
      percentage: 35,
      amount: "35,000,000",
      color: "#4F46E5", // indigo-600
      iconName: "Coins",
      description: "Tokens allocated for initial DEX liquidity and market making"
    },
    {
      category: "Team",
      percentage: 20,
      amount: "20,000,000",
      color: "#7C3AED", // violet-600
      iconName: "Users",
      description: "Core team allocation with vesting schedule for alignment"
    },
    {
      category: "Treasury",
      percentage: 20,
      amount: "20,000,000",
      color: "#2563EB", // blue-600
      iconName: "Building",
      description: "Protocol treasury for governance and ecosystem development"
    },
    {
      category: "Partnerships & Grants",
      percentage: 10,
      amount: "10,000,000",
      color: "#DC2626", // red-600
      iconName: "Handshake",
      description: "Strategic partnerships and community grants"
    },
    {
      category: "R&D",
      percentage: 5,
      amount: "5,000,000",
      color: "#059669", // emerald-600
      iconName: "Lightbulb",
      description: "Research and development initiatives"
    },
    {
      category: "Marketing & Operations",
      percentage: 10,
      amount: "10,000,000",
      color: "#D97706", // amber-600
      iconName: "Megaphone",
      description: "Marketing campaigns and operational expenses"
    }
  ];

  return (
    <>
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              TREZA Tokenomics
            </h1>
            <p className="text-lg text-indigo-200/65">
              Explore the distribution and allocation breakdown of the TREZA token 
              with interactive visualizations and detailed analysis.
            </p>
          </div>

          {/* Interactive Pie Chart Section */}
          <div className="mb-12">
            <div className="mb-8 text-center">
              <h2 className="mb-4 font-nacelle text-3xl font-semibold text-white">Token Allocation</h2>
              <p className="text-indigo-200/65">Interactive breakdown of TREZA token distribution</p>
            </div>
            
            <TokenomicsChart allocations={tokenAllocations} />
          </div>

          {/* Allocation Details Grid */}
          <div className="mb-12">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-white">Allocation Details</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tokenAllocations.map((allocation, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div 
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: allocation.color }}
                    >
                      {/* Icon placeholder - will be handled in the chart component */}
                      <div className="h-5 w-5 rounded bg-white/20" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{allocation.category}</h4>
                      <div className="text-sm text-indigo-200/65">{allocation.percentage}% • {allocation.amount} TREZA</div>
                    </div>
                  </div>
                  <p className="text-sm text-indigo-200/65">{allocation.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}