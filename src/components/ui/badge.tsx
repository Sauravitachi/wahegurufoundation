import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--navy-100)] text-[var(--navy-800)] border border-[var(--navy-100)]",
        gold:
          "bg-[var(--gold-100)] text-[var(--navy-900)] border border-[var(--gold-300)] font-medium",
        urgent:
          "bg-amber-100 text-amber-900 border border-amber-300",
        outline:
          "border border-[var(--border)] text-[var(--navy-700)] bg-transparent",
        dark:
          "bg-[var(--navy-800)] text-white border border-[var(--navy-700)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
