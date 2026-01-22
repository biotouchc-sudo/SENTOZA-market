'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 50% of viewport height
            const scrollPercentage = window.scrollY / window.innerHeight;
            setIsVisible(scrollPercentage > 0.5);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
                    onClick={scrollToTop}
                    className="
            fixed bottom-24 left-4 z-40
            p-3 rounded-full
            bg-white/90 backdrop-blur-sm
            border border-gray-200
            shadow-lg hover:shadow-xl
            transition-shadow duration-[160ms]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
          "
                    aria-label="العودة للأعلى"
                >
                    <ArrowUp className="w-5 h-5 text-gray-700" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
