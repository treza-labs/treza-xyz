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

export default function AgentsPage() {
  const strategies = [
    {
      title: 'Technical Analysis Strategy',
      description: 'An agent that uses multiple technical indicators and market sentiment to identify trading opportunities.',
      icon: BarChart2,
      link: '/?agent=technical-analysis',
      color: 'text-indigo-400',
      type: 'technical-analysis',
      isNew: true,
      stats: '20+ Indicators'
    }, 
    {
      title: 'Chart Pattern Recognition',
      description: 'An agent that analyzes TradingView charts to identify patterns and potential breakout opportunities.',
      icon: LineChart,
      isNew: true,
      link: '/?agent=chart-patterns',
      color: 'text-indigo-400',
      type: 'chart-patterns',
      isPopular: true,
      stats: 'Pattern Analysis'
    },     
    {
      title: 'Arbitrage Strategy',
      description: 'An agent that identifies and executes profitable token swaps across different exchanges.',
      icon: ArrowLeftRight,
      link: '/?agent=arbitrage',
      color: 'text-indigo-400',
      type: 'arbitrage',
      isPopular: true,
      stats: 'Cross-Exchange'
    },
    {
      title: 'Asset Discovery',
      description: 'An agent that searches and analyzes emerging tokens and market opportunities.',
      icon: Search,
      link: '/?agent=asset-discovery',
      color: 'text-indigo-400',
      type: 'asset-discovery',
      stats: 'Market Research'
    },    
    {
      title: 'News Trading Strategy',
      description: 'An agent that analyzes market news and sentiment to make informed trading decisions.',
      icon: Newspaper,
      link: '/?agent=news-trading',
      color: 'text-indigo-400',
      type: 'news-trading',
      stats: 'AI-Powered'
    },    
    {
      title: 'Web Research Strategy',
      description: 'An agent that performs deep web research to gather market insights and trading signals.',
      icon: Globe,
      link: '/?agent=web-research',
      color: 'text-indigo-400',
      type: 'web-research',
      stats: 'Multi-source'
    },
    {
      title: 'Sentiment Analysis Strategy',
      description: 'An agent that tracks market sentiment using the Fear & Greed Index for contrarian trading.',
      icon: Gauge,
      link: '/?agent=sentiment-analysis',
      color: 'text-indigo-400',
      type: 'sentiment-analysis',
      stats: 'Market Sentiment'
    },
    {
      title: 'Momentum Trading Strategy',
      description: 'An agent that identifies and trades with market momentum across different timeframes.',
      icon: TrendingUpIcon2,
      link: '/?agent=momentum',
      color: 'text-indigo-400',
      type: 'momentum',
      stats: 'Real-time Updates'
    },
    {
      title: 'Stock Market Strategy',
      description: 'An agent that analyzes stocks using financial metrics and analyst consensus.',
      icon: TrendingUp,
      link: '/?agent=stock-market',
      color: 'text-indigo-400',
      type: 'stock-market',
      stats: 'Real-time Data'
    },
    {
      title: 'GDP Trading Strategy',
      description: 'An agent that uses GDP data and economic trends to make macro trading decisions.',
      icon: DollarSign,
      link: '/?agent=gdp-trading',
      color: 'text-indigo-400',
      type: 'gdp-trading',
      isNew: true,
      stats: 'Economic Data'
    },
    {
      title: 'Employment Market Strategy',
      description: 'An agent that trades based on unemployment trends and labor market indicators.',
      icon: Building2,
      link: '/?agent=employment-market',
      color: 'text-indigo-400',
      type: 'employment-market',
      isNew: true,
      stats: 'Labor Market'
    },
    {
      title: 'Inflation Trading Strategy',
      description: 'An agent that monitors and trades based on inflation metrics and price trends.',
      icon: Banknote,
      link: '/?agent=inflation-trading',
      color: 'text-indigo-400',
      type: 'inflation-trading',
      isNew: true,
      stats: 'Price Trends'
    },
    {
      title: 'Interest Rate Strategy',
      description: 'An agent that trades based on Federal Reserve rates and bond market movements.',
      icon: LineChartIcon,
      link: '/?agent=interest-rates',
      color: 'text-indigo-400',
      type: 'interest-rates',
      isNew: true,
      stats: 'Rate Data'
    },
    {
      title: 'Real Estate Strategy',
      description: 'An agent that analyzes housing market indicators for related trading opportunities.',
      icon: Home,
      link: '/?agent=real-estate',
      color: 'text-indigo-400',
      type: 'real-estate',
      isNew: true,
      stats: 'Real Estate'
    },
    {
      title: 'Consumer Spending Strategy',
      description: 'An agent that trades based on retail sales data and consumer behavior trends.',
      icon: ShoppingCart,
      link: '/?agent=consumer-spending',
      color: 'text-indigo-400',
      type: 'consumer-spending',
      isNew: true,
      stats: 'Consumer Data'
    },
    {
      title: 'Monetary Policy Strategy',
      description: 'An agent that trades based on money supply changes and monetary policy shifts.',
      icon: Scale,
      link: '/?agent=monetary-policy',
      color: 'text-indigo-400',
      type: 'monetary-policy',
      isNew: true,
      stats: 'Monetary Data'
    },
    {
      title: 'Industrial Activity Strategy',
      description: 'An agent that trades based on manufacturing output and industrial activity data.',
      icon: Activity,
      link: '/?agent=industrial-activity',
      color: 'text-indigo-400',
      type: 'industrial-activity',
      isNew: true,
      stats: 'Manufacturing'
    },
    {
      title: 'S&P 500 Strategy',
      description: 'An agent that trades based on S&P 500 index movements and market trends.',
      icon: LineChartIcon,
      link: '/?agent=sp500',
      color: 'text-indigo-400',
      type: 'sp500',
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
                Trading Agents
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              AI-Powered Trading Strategies
            </h2>
            <p className="text-lg text-indigo-200/65">
              Deploy specialized AI agents that use advanced strategies to analyze markets and execute trades automatically.
            </p>
          </div>

          {/* Strategies Grid */}
          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((strategy) => (
              <Link
                key={strategy.title}
                href={strategy.link}
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
                      <strategy.icon className={`w-6 h-6 ${strategy.color}`} />
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {strategy.stats}
                        </span>
                      </span>
                      {strategy.isNew && (
                        <span className="btn-sm relative rounded-full bg-yellow-500/20 px-2.5 py-0.5 text-xs font-normal text-yellow-400">
                          <Sparkles className="w-3 h-3 inline mr-1" />
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                      {strategy.title}
                    </h3>
                    <p className="text-indigo-200/65">
                      {strategy.description}
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
