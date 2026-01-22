"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function SearchBar({
    value,
    onChange,
    placeholder = "ابحث عن منتج...",
}: SearchBarProps) {
    const [localValue, setLocalValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    // Sync with external value
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    // Shake logic
    const triggerShake = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 400);
    };

    // Debounced onChange
    const handleChange = (newValue: string) => {
        setLocalValue(newValue);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            onChange(newValue);
        }, 300);
    };

    const handleClear = () => {
        setLocalValue("");
        onChange("");
        inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !localValue.trim()) {
            triggerShake();
        }
    };

    return (
        <motion.div
            initial={false}
            animate={{
                scale: isFocused ? 1.02 : 1,
                x: isShaking ? [0, -5, 5, -5, 5, 0] : 0,
                boxShadow: isFocused
                    ? "0 4px 20px rgba(0, 0, 0, 0.1)"
                    : "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md mx-auto"
        >
            {/* Search Icon */}
            <Search
                className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-200 ${isFocused ? "text-primary" : "text-muted-foreground"
                    }`}
            />

            {/* Input */}
            <input
                ref={inputRef}
                type="text"
                value={localValue}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                className={`w-full h-12 pl-10 pr-10 rounded-xl border bg-background text-base
                   placeholder:text-muted-foreground
                   focus:outline-none focus:ring-2 focus:ring-primary/20 
                   transition-all duration-200
                   ${isShaking ? 'border-red-400' : 'border-input focus:border-primary'}
                   `}
                dir="rtl"
            />

            {/* Clear Button */}
            <AnimatePresence>
                {localValue && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15 }}
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full
                       hover:bg-muted transition-colors"
                        aria-label="مسح البحث"
                    >
                        <X className="h-4 w-4 text-muted-foreground" />
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
