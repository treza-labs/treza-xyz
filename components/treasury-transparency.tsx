"use client";

import { useState } from "react";
import { 
  Wallet, 
  Eye, 
  ExternalLink, 
  Copy, 
  CheckCircle,
  Shield,
  Activity,
  BarChart3
} from "lucide-react";

interface TreasuryWallet {
  id: string;
  name: string;
  address: string;
  balance: string;
  percentage: number;
  description: string;
  transactions: number;
}

export default function TreasuryTransparency() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  // Mock data - replace with live contract data
  const treasuryWallets: TreasuryWallet[] = [
    {
      id: "treasury1",
      name: "Treasury Wallet 1",
      address: "0x742d35Cc6634C0532925a3b8D404fAdFCf9014FC",
      balance: "2,847,523",
      percentage: 50,
      description: "Primary treasury for protocol development and operations",
      transactions: 156
    },
    {
      id: "treasury2", 
      name: "Treasury Wallet 2",
      address: "0x8ba1f109551bD432803012645Hac136c22C85478",
      balance: "2,847,523",
      percentage: 50,
      description: "Secondary treasury for governance and community initiatives",
      transactions: 142
    }
  ];

  const handleCopyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const totalBalance = treasuryWallets.reduce((sum, wallet) => 
    sum + parseFloat(wallet.balance.replace(/,/g, '')), 0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="mb-4 font-nacelle text-2xl font-semibold text-white">Treasury Transparency</h3>
        <p className="text-indigo-200/65">
          Real-time visibility into TREZA treasury wallets and fee distribution
        </p>
      </div>

      {/* Treasury Overview */}
      <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                <Wallet className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white">{totalBalance.toLocaleString()}</div>
            <div className="text-sm text-indigo-200/65">Total Treasury Balance</div>
          </div>
          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white">50/50</div>
            <div className="text-sm text-indigo-200/65">Split Distribution</div>
          </div>
          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white">298</div>
            <div className="text-sm text-indigo-200/65">Total Transactions</div>
          </div>
        </div>
      </div>

      {/* Treasury Wallets */}
      <div className="grid gap-6 md:grid-cols-2">
        {treasuryWallets.map((wallet) => (
          <div
            key={wallet.id}
            className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
          >
            {/* Wallet Header */}
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-semibold text-white">{wallet.name}</h4>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-indigo-600 px-2 py-1 text-xs text-white">
                  {wallet.percentage}%
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="mb-4">
              <div className="mb-2 text-sm text-indigo-200/65">Wallet Address</div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 p-3">
                <code className="flex-1 text-sm font-mono text-white">
                  {formatAddress(wallet.address)}
                </code>
                <button
                  onClick={() => handleCopyAddress(wallet.address)}
                  className="rounded p-1 hover:bg-gray-700 transition-colors"
                  title="Copy full address"
                >
                  {copiedAddress === wallet.address ? (
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-400" />
                  )}
                </button>
                <button
                  onClick={() => window.open(`https://etherscan.io/address/${wallet.address}`, '_blank')}
                  className="rounded p-1 hover:bg-gray-700 transition-colors"
                  title="View on Etherscan"
                >
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Balance */}
            <div className="mb-4">
              <div className="mb-2 text-sm text-indigo-200/65">Current Balance</div>
              <div className="text-2xl font-bold text-white">{wallet.balance} TREZA</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-lg font-semibold text-white">{wallet.transactions}</div>
                <div className="text-xs text-indigo-200/65">Transactions</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Active</div>
                <div className="text-xs text-indigo-200/65">Status</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-indigo-200/65">{wallet.description}</p>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => window.open(`https://etherscan.io/address/${wallet.address}`, '_blank')}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white transition-colors hover:bg-indigo-700"
              >
                <Eye className="h-4 w-4" />
                View Transactions
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fee Distribution Info */}
      <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Fee Distribution Mechanism</h4>
            <p className="text-sm text-indigo-200/65">How transaction fees are automatically distributed</p>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-gray-800/50 p-4">
            <h5 className="mb-2 font-medium text-white">Current Fee Rate</h5>
            <div className="text-2xl font-bold text-indigo-400">4%</div>
            <p className="text-xs text-indigo-200/65">Applied to all transfers (adjustable 0-10%)</p>
          </div>
          <div className="rounded-lg bg-gray-800/50 p-4">
            <h5 className="mb-2 font-medium text-white">Distribution Split</h5>
            <div className="text-2xl font-bold text-indigo-400">50/50</div>
            <p className="text-xs text-indigo-200/65">Equal distribution between treasury wallets</p>
          </div>
        </div>
      </div>

      {/* Transparency Note */}
      <div className="rounded-lg bg-indigo-900/20 border border-indigo-500/20 p-4 text-center">
        <p className="text-sm text-indigo-200">
          <strong>Full Transparency:</strong> All treasury transactions are publicly verifiable on the Ethereum blockchain.
          Fee exemptions and treasury addresses are governed by the decentralized timelock controller.
        </p>
      </div>
    </div>
  );
}