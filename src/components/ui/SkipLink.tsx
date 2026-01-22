"use client";

import { cn } from "@/lib/utils";

export function SkipLink() {
    return (
        <a
            href="#main-content"
            className={cn(
                "absolute top-[-9999px] left-4 z-[100] bg-[var(--wat-primary)] text-black px-4 py-2 rounded-md font-bold shadow-xl transition-all",
                "focus:top-4 focus:outline-none focus:ring-2 focus:ring-white"
            )}
        >
            Skip to content
        </a>
    );
}
