"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// 🦅 GENETIC TRAIT: Button Animation & Style
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--wat-primary)] disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--wat-primary)] text-black shadow-lg hover:bg-[#F0E0B8] hover:scale-105 active:scale-95 duration-[var(--duration-micro)] ease-[var(--ease-subtle)]",
                destructive:
                    "bg-red-500 text-white hover:bg-red-600 duration-[var(--duration-micro)]",
                outline:
                    "border border-[var(--wat-glass-border)] bg-transparent hover:bg-white/5 hover:text-[var(--wat-primary)] duration-[var(--duration-micro)]",
                secondary:
                    "bg-[var(--wat-surface-highlight)] text-white hover:bg-white/20 duration-[var(--duration-micro)]",
                ghost:
                    "hover:bg-white/5 hover:text-[var(--wat-primary)] duration-[var(--duration-micro)]",
                link: "text-[var(--wat-primary)] underline-offset-4 hover:underline",
                glass: "glass hover:bg-white/10 hover:border-[var(--wat-primary-dim)] text-white duration-[var(--duration-micro)]",
                neon: "bg-transparent border border-[var(--wat-primary)] text-[var(--wat-primary)] shadow-[0_0_10px_var(--wat-primary-glow)] hover:shadow-[0_0_20px_var(--wat-primary-glow)] hover:bg-[var(--wat-primary-glow)]",
            },
            size: {
                default: "h-10 px-4 py-2 rounded-[var(--radius-sm)]",
                sm: "h-9 rounded-[var(--radius-sm)] px-3 text-xs",
                lg: "h-12 rounded-[var(--radius-md)] px-8 text-base",
                icon: "h-10 w-10 p-2 rounded-full",
                iconSm: "h-8 w-8 p-1.5 rounded-full",
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = "button";
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
