"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-[var(--radius-sm)] border border-[var(--wat-glass-border)] bg-black/20 px-3 py-2 text-sm text-[var(--wat-text-main)]",
                    "placeholder:text-[var(--wat-text-muted)]",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--wat-primary)] focus-visible:border-[var(--wat-primary)]",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "transition-all duration-[var(--duration-micro)] ease-[var(--ease-subtle)]",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
