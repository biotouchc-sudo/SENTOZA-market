"use client";

/**
 * CATEGORY FILTER COMPONENT
 * Horizontal scrollable pills for filtering products
 * Standard: 2026 Senate Protocol (Mobile-First, Touch-Friendly)
 * Premium Upgrade: Glassmorphism + Motion
 */

import { motion } from "framer-motion";
import { CATEGORIES, CategoryId, PRODUCT_CATEGORIES } from "@/lib/constants";

interface CategoryFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
    // Categories list combined
    const allCategories = PRODUCT_CATEGORIES;

    return (
        <div className="overflow-x-auto scrollbar-hide py-4 -mx-4 px-4 sticky top-16 z-30 bg-gradient-to-b from-[#F8F9FA] to-[#F8F9FA]/0">
            <div className="flex gap-3 min-w-max pb-2">
                {allCategories.map((cat) => {
                    const isActive = activeCategory === cat.name; // Logic currently uses names
                    return (
                        <motion.button
                            key={cat.id}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => onCategoryChange(cat.name)}
                            className={`
                                relative px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap
                                transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                                shadow-sm border
                                ${isActive
                                    ? "bg-[#D91C24] text-white border-[#D91C24] shadow-[0_4px_12px_rgba(217,28,36,0.3)]"
                                    : "bg-white/80 backdrop-blur-md text-gray-600 border-gray-100 hover:border-[#D91C24]/30 hover:shadow-md"
                                }
                            `}
                        >
                            {cat.name}
                            {isActive && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
