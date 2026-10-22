import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Primary button: Navy background, white text, gold on hover
        default:
          "bg-[var(--navy-700)] text-white hover:bg-[var(--gold-500)] hover:text-[var(--navy-900)] shadow-sm",
        // Main CTA button: Gold gradient with navy text (Exclusive to key donation CTAs)
        donate:
          "btn-gold-gradient text-[var(--navy-900)] font-bold tracking-wide shadow-md",
        secondary:
          "bg-[var(--surface)] text-[var(--navy-900)] hover:bg-[var(--navy-100)] border border-[var(--border)]",
        outline:
          "border-2 border-[var(--navy-700)] text-[var(--navy-700)] bg-transparent hover:bg-[var(--navy-700)] hover:text-white",
        outlineGold:
          "border-2 border-[var(--gold-500)] text-[var(--gold-600)] bg-transparent hover:bg-[var(--gold-500)] hover:text-[var(--navy-900)]",
        ghost:
          "text-[var(--navy-900)] hover:bg-[var(--navy-100)] hover:text-[var(--navy-900)]",
        link:
          "text-[var(--navy-700)] underline-offset-4 hover:underline p-0 h-auto font-medium",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-xl px-8 text-base shadow-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Reusable Button component respecting brand tokens and accessibility standards.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
