'use client';

import Link from 'next/link';
import { 
  BarChart2, 
  ArrowLeftRight, 
  Search, 
  TrendingUp, 
  Newspaper, 
  Globe, 
  LineChart, 
  BookOpenIcon,
  Sparkles,
  Clock,
  Zap,
  Activity,
  TrendingUp as TrendingUpIcon,
  ArrowUpRight,
  PlusCircle,
  Gauge,
  TrendingUp as TrendingUpIcon2,
  LineChartIcon,
  DollarSign,
  Building2,
  Banknote,
  Home,
  ShoppingCart,
  Scale
} from 'lucide-react';
import { useState } from 'react';

export default function ToolsPage() {
  const tools = [
    {
      title: 'Technical Analysis',
      description: 'Get detailed technical analysis for any asset with multiple indicators and market sentiment.',
      icon: BarChart2,
      link: '/?tool=technical-analysis',
      color: 'text-indigo-400',
      type: 'technical-analysis',
      isNew: true,
      stats: '20+ Indicators'
    }, 
    {
      title: 'TradingView Chart',
      description: 'View interactive TradingView charts for any asset with multiple timeframes.',
      icon: LineChart,
      isNew: true,
      link: '/?tool=tradingview-chart',
      color: 'text-indigo-400',
      type: 'tradingview-chart',
      isPopular: true,
      stats: 'Live Charts'
    },     
    {
      title: 'Swap Tool',
      description: 'Execute token swaps with your agents directly from the chat interface with real-time quotes.',
      icon: ArrowLeftRight,
      link: '/?tool=swap',
      color: 'text-indigo-400',
      type: 'swap',
      isPopular: true,
      stats: '10K+ Assets'
    },
    {
      title: 'Asset Search',
      description: 'Search and analyze any cryptocurrency or token with detailed market data.',
      icon: Search,
      link: '/?tool=search-tokens',
      color: 'text-indigo-400',
      type: 'asset-search',
      stats: '10K+ Assets'
    },    
    {
      title: 'News Analysis',
      description: 'Analyze market news and get sentiment analysis for better decision making.',
      icon: Newspaper,
      link: '/?tool=news-analysis',
      color: 'text-indigo-400',
      type: 'news-analysis',
      stats: 'AI-Powered'
    },    
    {
      title: 'Web Research',
      description: 'Perform web research and get summarized insights from multiple sources.',
      icon: Globe,
      link: '/?tool=web-research',
      color: 'text-indigo-400',
      type: 'web-research',
      stats: 'Multi-source'
    },
    {
      title: 'Fear & Greed Index',
      description: 'Track market sentiment with the Crypto Fear & Greed Index and historical data.',
      icon: Gauge,
      link: '/?tool=fear-greed',
      color: 'text-indigo-400',
      type: 'fear-greed',
      stats: 'Market Sentiment'
    },
    {
      title: 'Market Movers',
      description: 'Discover top gainers, losers, and trending assets across different timeframes.',
      icon: TrendingUpIcon2,
      link: '/?tool=market-movers',
      color: 'text-indigo-400',
      type: 'market-movers',
      stats: 'Real-time Updates'
    },
    {
      title: 'Stock Analysis',
      description: 'Get comprehensive analysis of stocks including financial metrics and analyst consensus.',
      icon: TrendingUp,
      link: '/?tool=stock-analysis',
      color: 'text-indigo-400',
      type: 'stock-analysis',
      stats: 'Real-time Data'
    },
    {
      title: 'GDP Analysis',
      description: 'Access real-time GDP data and analysis from FRED with interactive charts and historical trends.',
      icon: DollarSign,
      link: '/?tool=fred-gdp',
      color: 'text-indigo-400',
      type: 'fred-gdp',
      isNew: true,
      stats: 'Economic Data'
    },
    {
      title: 'Unemployment Rate',
      description: 'Track unemployment trends with FRED data, including interactive visualizations and analysis.',
      icon: Building2,
      link: '/?tool=fred-unemployment',
      color: 'text-indigo-400',
      type: 'fred-unemployment',
      isNew: true,
      stats: 'Labor Market'
    },
    {
      title: 'Inflation Data',
      description: 'Monitor inflation metrics with FRED data, including CPI and PCE price indices.',
      icon: Banknote,
      link: '/?tool=fred-inflation',
      color: 'text-indigo-400',
      type: 'fred-inflation',
      isNew: true,
      stats: 'Price Trends'
    },
    {
      title: 'Interest Rates',
      description: 'Track Federal Reserve interest rates and bond yields with FRED data.',
      icon: LineChartIcon,
      link: '/?tool=fred-interest-rates',
      color: 'text-indigo-400',
      type: 'fred-interest-rates',
      isNew: true,
      stats: 'Rate Data'
    },
    {
      title: 'Housing Market',
      description: 'Analyze housing market indicators including starts, permits, and prices.',
      icon: Home,
      link: '/?tool=fred-housing',
      color: 'text-indigo-400',
      type: 'fred-housing',
      isNew: true,
      stats: 'Real Estate'
    },
    {
      title: 'Retail Sales',
      description: 'Monitor consumer spending trends with FRED retail sales data.',
      icon: ShoppingCart,
      link: '/?tool=fred-retail',
      color: 'text-indigo-400',
      type: 'fred-retail',
      isNew: true,
      stats: 'Consumer Data'
    },
    {
      title: 'Money Supply',
      description: 'Track M2 money supply and other monetary aggregates from FRED.',
      icon: Scale,
      link: '/?tool=fred-money',
      color: 'text-indigo-400',
      type: 'fred-money',
      isNew: true,
      stats: 'Monetary Data'
    },
    {
      title: 'Industrial Production',
      description: 'Monitor manufacturing output and industrial activity with FRED data.',
      icon: Activity,
      link: '/?tool=fred-industrial',
      color: 'text-indigo-400',
      type: 'fred-industrial',
      isNew: true,
      stats: 'Manufacturing'
    },
    {
      title: 'S&P 500 Index',
      description: 'Track the S&P 500 index and its historical performance with FRED data.',
      icon: LineChartIcon,
      link: '/?tool=fred-sandp500',
      color: 'text-indigo-400',
      type: 'fred-sandp500',
      isNew: true,
      stats: 'Stock Market'
    }
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Market Tools
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Powerful Tools for Market Analysis
            </h2>
            <p className="text-lg text-indigo-200/65">
              Access a suite of powerful tools that help you analyze markets, execute trades, and make informed decisions.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.link}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Arrow */}
                  <div
                    className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <tool.icon className={`w-6 h-6 ${tool.color}`} />
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {tool.stats}
                        </span>
                      </span>
                      {tool.isNew && (
                        <span className="btn-sm relative rounded-full bg-yellow-500/20 px-2.5 py-0.5 text-xs font-normal text-yellow-400">
                          <Sparkles className="w-3 h-3 inline mr-1" />
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                      {tool.title}
                    </h3>
                    <p className="text-indigo-200/65">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
