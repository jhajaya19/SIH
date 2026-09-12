import { Shield } from "lucide-react";

interface BrandLogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  showText = true,
  size = "md",
}: BrandLogoProps) {
  const sizeClasses = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-16 w-16",
  };

  const iconSizes = {
    sm: 19,
    md: 23,
    lg: 34,
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex ${sizeClasses[size]} items-center justify-center rounded-xl bg-[#0F1D33]`}
      >
        <Shield
          size={iconSizes[size]}
          strokeWidth={2}
          className="text-[#00C7A5]"
        />
      </div>

      {showText && (
        <div className="text-2xl font-extrabold tracking-tight">
          <span className="text-[#0F1D33]">RE</span>
          <span className="text-[#2563EB]">settle</span>
          <span className="text-[#2563EB]">AI</span>
        </div>
      )}
    </div>
  );
}