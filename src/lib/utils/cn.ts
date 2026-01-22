// lib/utils/cn.ts
// Utility for merging Tailwind classes safely

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes without conflicts
 * @example cn("px-4", "px-6") → "px-6"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
