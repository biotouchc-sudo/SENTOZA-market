'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage for consent
        const consent = localStorage.getItem('santoza-cookie-consent');
        if (!consent) {
            // Delay showing banner slightly for better UX
            setTimeout(() => setIsVisible(true), 1500);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('santoza-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    className="fixed bottom-0 left-0 right-0 z-[60] p-4 pointer-events-none"
                >
                    <div className="
            pointer-events-auto
            container mx-auto max-w-4xl
            bg-gray-900/90 backdrop-blur-md text-white
            p-5 rounded-2xl shadow-2xl
            flex flex-col md:flex-row items-center gap-4 md:gap-8
            border border-white/10
          ">
                        <div className="flex-1 text-sm md:text-base text-center md:text-right">
                            <p>
                                🍪 نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك في التصفح وضمان عمل الموقع بشكل صحيح.
                                بالمتابعة، أنت توافق على <Link href="/privacy" className="underline hover:text-gray-300">سياسة الخصوصية</Link>.
                            </p>
                        </div>

                        <button
                            onClick={acceptCookies}
                            className="
                whitespace-nowrap px-6 py-2.5 
                bg-white text-gray-900 
                font-bold text-sm rounded-xl
                hover:bg-gray-100 transition-colors
                shadow-lg
              "
                        >
                            موافق، شكراً
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
