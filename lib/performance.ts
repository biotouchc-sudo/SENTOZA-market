"use client";

// 🎯 TYPES
export type PerformanceLevel = "low" | "medium" | "high";

interface DeviceCapabilities {
  devicePower: number;
  memory: number | undefined;
  connection: string | undefined;
  level: PerformanceLevel;
}

// 🎯 UTILITY: Detect Device Capabilities
export const getDeviceCapabilities = (): DeviceCapabilities => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return { devicePower: 4, memory: 4, connection: "4g", level: "medium" };
  }

  // Hardware Concurrency (Cores)
  const devicePower = navigator.hardwareConcurrency || 4;
  
  // Device Memory (RAM in GB) - Chrome/Edge only
  // @ts-ignore
  const memory = (navigator.deviceMemory as number) || 4;
  
  // Network Information
  // @ts-ignore
  const connection = (navigator.connection?.effectiveType as string) || "4g";

  let level: PerformanceLevel = "high";

  if (devicePower < 4 || memory < 4 || connection === "slow-2g" || connection === "2g") {
    level = "low";
  } else if (devicePower < 8 || memory < 8 || connection === "3g") {
    level = "medium";
  }

  return { devicePower, memory, connection, level };
};

// 🎯 CONFIG: Performance Budget (Reference)
export const PERFORMANCE_BUDGET = {
  javascript: 250, // KB
  css: 50, // KB
  images: 500, // KB
  fonts: 100, // KB
  maxAnimationDuration: 400, // ms
};

// 🎯 HOOK: Dynamic Performance Loading
export const shouldLoadHeavyFeature = (level: PerformanceLevel): boolean => {
  return level === "high"; // Only load heavy stuff on high-end
};

export const getParticleCount = (level: PerformanceLevel): number => {
  switch (level) {
    case "low": return 0; // Disable
    case "medium": return 20; // Reduced
    case "high": return 60; // Full
  }
};
