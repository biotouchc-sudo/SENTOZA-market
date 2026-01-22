"use client";

import { useEffect, useState, ReactNode } from "react";
import { getDeviceCapabilities } from "@/lib/performance";

interface LazyFeatureProps {
    children: ReactNode;
    fallback?: ReactNode;
    minLevel?: "low" | "medium" | "high";
}

export function LazyFeature({ children, fallback, minLevel = "medium" }: LazyFeatureProps) {
    const [canLoad, setCanLoad] = useState(false);

    useEffect(() => {
        const caps = getDeviceCapabilities();

        // Check if device meets minimum requirements
        const levels = ["low", "medium", "high"];
        const deviceLevelIdx = levels.indexOf(caps.level);
        const reqLevelIdx = levels.indexOf(minLevel);

        if (deviceLevelIdx >= reqLevelIdx) {
            // Simulate idle callback or interaction delay
            const timer = setTimeout(() => {
                setCanLoad(true);
            }, 1000); // Wait 1s until main thread is clear
            return () => clearTimeout(timer);
        }
    }, [minLevel]);

    if (!canLoad) return <>{fallback || null}</>;

    return <>{children}</>;
}
