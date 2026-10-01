import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const kbdVariants = cva(
  "inline-flex items-center justify-center font-mono font-medium select-none pointer-events-none rounded border border-[#e8e8e8] bg-[#f3f3f3] text-[#0a0a0a]",
  {
    variants: {
      size: {
        xs: "h-4 min-w-4 px-1 text-[10px]",
        sm: "h-5 min-w-5 px-1.5 text-xs",
        default: "h-6 min-w-6 px-2 text-xs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(kbdVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Kbd.displayName = "Kbd";
