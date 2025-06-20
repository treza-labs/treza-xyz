interface PlaceholderAvatarProps {
  size?: number;
  className?: string;
}

export default function PlaceholderAvatar({ size = 80, className = "" }: PlaceholderAvatarProps) {
  const logoSize = size * 0.4; // Slightly smaller for better proportions
  
  return (
    <div 
      className={`bg-gray-800 rounded-full flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Treza logo in grayscale - properly centered */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={logoSize} 
        height={logoSize} 
        viewBox="0 0 32 32"
        fill="none"
        className="opacity-60 flex-shrink-0"
      >
        <path 
          fill="#9CA3AF" 
          d="M25.46 10.467a5.509 5.509 0 0 1 3.909 1.617l-1.62-1.62-7.847-7.844a5.533 5.533 0 0 0-9.445 3.911v3.934l15.002.002Z"
        />
        <path 
          fill="#6B7280" 
          d="M10.463 6.534a5.518 5.518 0 0 1 1.617-3.91l-1.62 1.62-7.84 7.843a5.534 5.534 0 0 0 3.911 9.445h3.934l-.002-14.998ZM21.528 25.465a5.507 5.507 0 0 1-1.618 3.91l1.62-1.62 7.847-7.847a5.534 5.534 0 0 0-3.913-9.445H21.53l-.002 15.002Z"
        />
        <path 
          fill="#9CA3AF" 
          d="M6.529 21.532a5.507 5.507 0 0 1-3.908-1.618l1.62 1.62 7.845 7.847a5.533 5.533 0 0 0 9.445-3.914v-3.935H6.529Z"
        />
      </svg>
    </div>
  );
} 