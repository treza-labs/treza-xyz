"use client";

import { useState } from "react";
import {
  Coins,
  Users,
  Building,
  Handshake,
  Lightbulb,
  Megaphone
} from "lucide-react";
// Note: Install these dependencies with: 
// npm install @visx/pie @visx/group @visx/shape @visx/scale @visx/responsive @visx/text

// For now, we'll create a simple responsive pie chart that works without visx
// Once visx is installed, we can enhance this with the full visx implementation

interface Allocation {
  category: string;
  percentage: number;
  amount: string;
  color: string;
  iconName: string;
  description: string;
}

interface TokenomicsChartProps {
  allocations: Allocation[];
}

export default function TokenomicsChart({ allocations }: TokenomicsChartProps) {
  const [selectedAllocation, setSelectedAllocation] = useState<Allocation | null>(null);
  const [hoveredAllocation, setHoveredAllocation] = useState<Allocation | null>(null);

  // Icon mapping for client-side rendering
  const getIcon = (iconName: string) => {
    const iconMap = {
      Coins,
      Users,
      Building,
      Handshake,
      Lightbulb,
      Megaphone
    };
    return iconMap[iconName as keyof typeof iconMap] || Coins;
  };

  // Calculate cumulative percentages for SVG path creation
  const cumulativePercentages = allocations.reduce((acc, allocation, index) => {
    const start = index === 0 ? 0 : acc[index - 1].end;
    const end = start + allocation.percentage;
    acc.push({ start, end, allocation });
    return acc;
  }, [] as { start: number; end: number; allocation: Allocation }[]);

  // Convert percentage to angle (360 degrees = 100%)
  const percentageToAngle = (percentage: number) => (percentage / 100) * 360;

  // Create SVG path for pie slice
  const createPieSlice = (startPercentage: number, endPercentage: number, radius: number, innerRadius: number = 0) => {
    const startAngle = percentageToAngle(startPercentage) - 90; // Start from top
    const endAngle = percentageToAngle(endPercentage) - 90;
    
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = radius + radius * Math.cos(startAngleRad);
    const y1 = radius + radius * Math.sin(startAngleRad);
    const x2 = radius + radius * Math.cos(endAngleRad);
    const y2 = radius + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    if (innerRadius > 0) {
      // Donut chart
      const x3 = radius + innerRadius * Math.cos(endAngleRad);
      const y3 = radius + innerRadius * Math.sin(endAngleRad);
      const x4 = radius + innerRadius * Math.cos(startAngleRad);
      const y4 = radius + innerRadius * Math.sin(startAngleRad);
      
      return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
    } else {
      // Regular pie chart
      return `M ${radius} ${radius} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
    }
  };

  const radius = 160;
  const innerRadius = 60;
  const center = radius;

  return (
    <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        
        {/* Interactive Pie Chart */}
        <div className="flex justify-center">
          <div className="relative">
            <svg width={radius * 2} height={radius * 2} className="overflow-visible">
              {cumulativePercentages.map(({ start, end, allocation }, index) => {
                const isHovered = hoveredAllocation?.category === allocation.category;
                const isSelected = selectedAllocation?.category === allocation.category;
                const scale = isHovered || isSelected ? 1.05 : 1;
                
                return (
                  <g key={index}>
                    <path
                      d={createPieSlice(start, end, radius, innerRadius)}
                      fill={allocation.color}
                      stroke="#1F2937"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-200"
                      style={{
                        transform: `scale(${scale})`,
                        transformOrigin: `${center}px ${center}px`,
                        filter: isHovered || isSelected ? 'brightness(1.1)' : 'none'
                      }}
                      onMouseEnter={() => setHoveredAllocation(allocation)}
                      onMouseLeave={() => setHoveredAllocation(null)}
                      onClick={() => setSelectedAllocation(
                        selectedAllocation?.category === allocation.category ? null : allocation
                      )}
                    />
                  </g>
                );
              })}
              
              {/* Center text */}
              <text
                x={center}
                y={center - 10}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="24"
                fontWeight="bold"
              >
                100M
              </text>
              <text
                x={center}
                y={center + 15}
                textAnchor="middle"
                fill="#A5B4FC"
                fontSize="14"
              >
                TREZA
              </text>
            </svg>
            
            {/* Hover/Selected Info */}
            {(hoveredAllocation || selectedAllocation) && (
              <div className="absolute -bottom-4 left-1/2 w-64 -translate-x-1/2 rounded-lg bg-gray-800 p-3 text-center shadow-lg">
                <div className="text-sm font-semibold text-white">
                  {(hoveredAllocation || selectedAllocation)?.category}
                </div>
                <div className="text-xs text-indigo-200">
                  {(hoveredAllocation || selectedAllocation)?.percentage}% • {(hoveredAllocation || selectedAllocation)?.amount} TREZA
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          <h4 className="mb-4 font-semibold text-white">Token Distribution</h4>
          {allocations.map((allocation, index) => {
            const isSelected = selectedAllocation?.category === allocation.category;
            const isHovered = hoveredAllocation?.category === allocation.category;
            const IconComponent = getIcon(allocation.iconName);
            
            return (
              <div
                key={index}
                className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-all duration-200 ${
                  isSelected || isHovered
                    ? 'bg-gray-800/50 scale-105'
                    : 'hover:bg-gray-800/30'
                }`}
                onMouseEnter={() => setHoveredAllocation(allocation)}
                onMouseLeave={() => setHoveredAllocation(null)}
                onClick={() => setSelectedAllocation(
                  selectedAllocation?.category === allocation.category ? null : allocation
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: allocation.color }}
                  />
                  <div 
                    className="flex h-6 w-6 items-center justify-center rounded"
                    style={{ backgroundColor: allocation.color }}
                  >
                    <IconComponent className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">
                    {allocation.category}
                  </div>
                  <div className="text-xs text-indigo-200/65">
                    {allocation.percentage}% • {allocation.amount} TREZA
                  </div>
                </div>
                <div className="text-lg font-bold text-white">
                  {allocation.percentage}%
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Allocation Details */}
      {selectedAllocation && (
        <div className="mt-8 rounded-lg bg-gray-800/50 p-6">
          <h5 className="mb-3 font-semibold text-white">{selectedAllocation.category}</h5>
          <p className="text-sm text-indigo-200/65">{selectedAllocation.description}</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-white">{selectedAllocation.percentage}%</div>
              <div className="text-xs text-indigo-200/65">of Total Supply</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">{selectedAllocation.amount}</div>
              <div className="text-xs text-indigo-200/65">TREZA Tokens</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}