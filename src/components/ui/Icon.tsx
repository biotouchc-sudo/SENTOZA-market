"use client";

import { icons } from "lucide-react";
import { cn } from "@/lib/utils";

// Define valid icon names from Lucide
export type IconName = keyof typeof icons;

interface IconProps {
    name: IconName;
    size?: number; // Default 20px
    className?: string;
    strokeWidth?: number;
}

export function Icon({ name, size = 20, className, strokeWidth = 2 }: IconProps) {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <LucideIcon
            size={size}
            className={cn("transition-colors duration-200", className)} // Micro-interaction timing (200ms)
            strokeWidth={strokeWidth}
        />
    );
}
