import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverted?: boolean; // For dark/navy background sections
  className?: string;
}

/**
 * Standard Section Heading with Gold eyebrow and Navy serif title.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs md:text-sm font-bold uppercase tracking-widest mb-3",
            inverted ? "text-[var(--gold-300)]" : "text-[var(--gold-600)]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
          inverted ? "text-white" : "text-[var(--navy-900)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            inverted ? "text-gray-200" : "text-[var(--text-muted)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
