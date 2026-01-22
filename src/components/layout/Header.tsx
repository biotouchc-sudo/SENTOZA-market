"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { title: "الرئيسية", href: "/" },
        { title: "المتجر", href: "/shop" },
        { title: "العروض", href: "/offers" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* LOGO - SENTOZA 3D */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="logo-3d text-[var(--wat-primary)]">
                            <Icon name="Hexagon" size={28} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl md:text-2xl font-bold gradient-text tracking-tight group-hover:opacity-80 transition-opacity">
                            SENTOZA
                        </span>
                    </Link>

                    {/* DESKTOP NAV (Localized) */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                variant="ghost"
                                asChild
                                className="text-white/80 hover:text-[var(--wat-primary)] font-bold text-lg"
                            >
                                <Link href={item.href}>
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </nav>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-white/80 hover:text-[var(--wat-primary)]">
                            <Icon name="Search" size={20} />
                        </Button>

                        <Button variant="ghost" size="icon" className="relative text-white/80 hover:text-[var(--wat-primary)]">
                            <Icon name="ShoppingBag" size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--wat-primary)] rounded-full animate-[pulseSlow_4s_ease-in-out_infinite]"></span>
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white"
                        >
                            <Icon name={isOpen ? "X" : "Menu"} size={24} />
                        </Button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={cn(
                        "md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-t border-white/5",
                        isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <nav className="flex flex-col gap-1 py-4">
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                variant="ghost"
                                asChild
                                className="justify-start w-full text-white/80 hover:text-[var(--wat-primary)] hover:bg-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                <Link href={item.href}>
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
