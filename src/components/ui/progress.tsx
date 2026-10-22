import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

/**
 * Progress component with Gold Gradient fill on a Navy-100 track.
 */
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={cn(
          "relative h-3 w-full overflow-hidden rounded-full bg-[var(--navy-100)]",
          className
        )}
        {...props}
      >
        <div
          className="h-full w-full flex-1 transition-all duration-500 ease-out"
          style={{
            transform: `translateX(-${100 - percentage}%)`,
            background: "var(--gradient-gold)",
          }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";
