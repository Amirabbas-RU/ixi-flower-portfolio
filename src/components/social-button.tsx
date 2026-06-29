"use client";

import React from "react";

interface BrandColors {
  from: string;
  to: string;
  shadow: string;
}

interface SocialButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  icon: React.ReactNode;
  colors?: BrandColors;
}

const defaultColors: BrandColors = {
  from: "#5B21B6",
  to: "#7C3AED",
  shadow: "#7C3AED",
};

const brandColors: Record<string, BrandColors> = {
  GitHub: { from: "#1F2937", to: "#374151", shadow: "#1F2937" },
  Telegram: { from: "#006fa0", to: "#0088cc", shadow: "#0088cc" },
  Email: { from: "#c5221f", to: "#EA4335", shadow: "#EA4335" },
  LinkedIn: { from: "#004182", to: "#0A66C2", shadow: "#0A66C2" },
  YouTube: { from: "#cc0000", to: "#FF0000", shadow: "#FF0000" },
};

export default function SocialButton({
  href,
  label,
  icon,
  colors,
  ...props
}: SocialButtonProps) {
  const c = colors ?? brandColors[label] ?? defaultColors;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl
        border border-white/15
        transition-all duration-200 ease-out
        active:scale-90
        after:absolute after:top-[2px] after:left-1/4 after:w-1/2 after:h-[1px]
        after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent
        hover:brightness-110
      "
      style={{
        background: `radial-gradient(95% 60% at 50% 75%, ${c.from} 0%, ${c.to} 100%)`,
        boxShadow: `0px 2px 20px -8px ${c.shadow}, inset 0px 1px 4px -2px rgba(255,255,255,0.25)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0px 4px 24px -6px ${c.shadow}, inset 0px 1px 4px -2px rgba(255,255,255,0.25)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0px 2px 20px -8px ${c.shadow}, inset 0px 1px 4px -2px rgba(255,255,255,0.25)`;
      }}
      {...props}
    >
      <span className="text-white/90 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
        {icon}
      </span>
    </a>
  );
}
