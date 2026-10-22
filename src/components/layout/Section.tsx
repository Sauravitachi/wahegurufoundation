import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  variant?: "bg" | "surface" | "navy" | "gradientNavy";
  spacing?: "sm" | "md" | "lg" | "none";
}

export function Section({
  as: Component = "section",
  variant = "bg",
  spacing = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  const variantClasses = {
    bg: "bg-[var(--bg)] text-[var(--text)]",
    surface: "bg-[var(--surface)] text-[var(--text)]",
    navy: "bg-[var(--navy-900)] text-white",
    gradientNavy: "gradient-navy-bg text-white",
  };

  const spacingClasses = {
    none: "",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
  };

  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden transition-colors",
        variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
