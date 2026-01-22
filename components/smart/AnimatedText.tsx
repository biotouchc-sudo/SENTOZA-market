"use client";

import { cn } from "@/lib/utils";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
    return (
        <div className={cn("inline-block overflow-hidden", className)}>
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    style={{
                        animationDelay: `${delay + i * 0.05}s`,
                        display: "inline-block",
                    }}
                    className={cn(
                        "animate-fade-in opacity-0 translate-y-4 fill-mode-forwards",
                        char === " " ? "w-[0.3em]" : ""
                    )}
                >
                    {char}
                </span>
            ))}
        </div>
    );
}
