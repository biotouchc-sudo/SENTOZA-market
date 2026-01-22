'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Home, Info, Phone, Shield, FileText } from 'lucide-react';
import { useMarketStore } from '@/lib/store';
import { STORE_CONFIG } from '@/lib/constants';

const navLinks = [
    { href: '/', label: 'الرئيسية', icon: Home },
    { href: '/about', label: 'من نحن', icon: Info },
    { href: '/contact', label: 'تواصل معنا', icon: Phone },
    { href: '/privacy', label: 'الخصوصية', icon: Shield },
    { href: '/terms', label: 'الشروط', icon: FileText },
];

export function SmartHeader() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Add Active Link Logic
    const pathname = usePathname();

    const openCart = useMarketStore((state) => state.openCart);
    const cartItems = useMarketStore((state) => state.cart);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Smart hide/show on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > lastScrollY;
            const scrolledPastThreshold = currentScrollY > 100;

            if (scrolledPastThreshold) {
                setIsVisible(!scrollingDown);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Header */}
            <motion.header
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
                className="
          fixed top-0 left-0 right-0 z-50
          bg-white/90 backdrop-blur-xl
          border-b border-gray-100/50
          shadow-[0_1px_3px_rgba(0,0,0,0.04)]
        "
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm">
                                <Image
                                    src="/logo.png"
                                    alt={STORE_CONFIG.name}
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="font-bold text-gray-900 text-lg leading-tight">
                                    {STORE_CONFIG.name}
                                </h1>
                                <p className="text-xs text-gray-500">للتجارة والتوزيع</p>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`
                                            relative px-4 py-2 text-sm font-medium rounded-lg 
                                            transition-all duration-[200ms]
                                            ${isActive
                                                ? 'text-[#D91C24] bg-[#D91C24]/5'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }
                                        `}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="desktop-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D91C24] rounded-full mx-3"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            {/* Cart Button */}
                            <button
                                onClick={openCart}
                                className="
                  relative p-2.5 rounded-xl
                  bg-gray-100 hover:bg-gray-200
                  transition-all duration-[120ms]
                "
                                aria-label="سلة المشتريات"
                            >
                                <ShoppingCart className="w-5 h-5 text-gray-700" />
                                {cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="
                      absolute -top-1 -right-1
                      min-w-[20px] h-5 px-1.5
                      bg-[#D91C24] text-white text-xs font-bold
                      rounded-full flex items-center justify-center
                      shadow-[0_2px_8px_rgba(217,28,36,0.4)]
                    "
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="
                  md:hidden p-2.5 rounded-xl
                  bg-gray-100 hover:bg-gray-200
                  transition-all duration-[120ms]
                "
                                aria-label="القائمة"
                            >
                                {isMenuOpen ? (
                                    <X className="w-5 h-5 text-gray-700" />
                                ) : (
                                    <Menu className="w-5 h-5 text-gray-700" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="
                fixed top-0 right-0 bottom-0 z-50 w-72
                bg-white shadow-2xl md:hidden
              "
                        >
                            <div className="p-4 border-b">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-lg">القائمة</span>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 rounded-lg hover:bg-gray-100"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`
                                                flex items-center gap-3 px-4 py-3
                                                font-medium rounded-xl transition-colors
                                                ${isActive
                                                    ? 'bg-[#D91C24]/5 text-[#D91C24]'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                                }
                                            `}
                                        >
                                            <link.icon className={`w-5 h-5 ${isActive ? 'text-[#D91C24]' : 'text-gray-500'}`} />
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer for fixed header */}
            <div className="h-16" />
        </>
    );
}
