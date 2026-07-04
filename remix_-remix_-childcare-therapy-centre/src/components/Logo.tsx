import React from "react";

interface LogoProps {
  variant?: "horizontal" | "stacked" | "icon-only";
  className?: string;
  iconSize?: number;
}

export default function Logo({ variant = "horizontal", className = "", iconSize = 72 }: LogoProps) {
  // SVG Icon representing the cupped hands and two active/joyful children
  const LogoIcon = () => (
    <img 
      src="/logo.png" 
      alt="Childcare Therapy Centre Logo" 
      width={iconSize} 
      height={iconSize} 
      className="flex-shrink-0 object-contain"
      style={{ width: iconSize, height: iconSize }}
    />
  );

  if (variant === "icon-only") {
    return <LogoIcon />;
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`} id="brand-logo-stacked">
        <LogoIcon />
        <div className="mt-3">
          <h1 className="font-display font-extrabold text-2xl tracking-tight leading-none text-slate-900 dark:text-white">
            <span className="text-[#008ED6]">CHILD</span>
            <span className="text-[#72B124]">CARE</span>
          </h1>
          <p className="font-display font-bold text-[11px] text-slate-700 dark:text-slate-300 uppercase tracking-[0.25em] mt-1">
            THERAPY CENTRE
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`} id="brand-logo-horizontal">
      <LogoIcon />
      <div className="text-left">
        <div className="flex items-baseline">
          <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight leading-none">
            <span className="text-[#008ED6]">CHILD</span>
            <span className="text-[#72B124]">CARE</span>
          </span>
        </div>
        <p className="font-display font-bold text-[10px] md:text-xs text-slate-700 dark:text-slate-300 uppercase tracking-[0.22em] leading-none mt-1">
          THERAPY CENTRE
        </p>
      </div>
    </div>
  );
}
