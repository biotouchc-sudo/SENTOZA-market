"use client";

import { useState, useEffect } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";

export function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            // Show when scrolled 20%
            setShow(scrollY > documentHeight * 0.2);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!show) return null;

    return (
        <Button
            size="icon"
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 z-[70] rounded-full shadow-xl bg-[var(--wat-primary)] text-black hover:scale-110 hover:bg-white animate-fade-in"
            aria-label="Back to Top"
        >
            <Icon name="ArrowUp" size={20} />
        </Button>
    );
}
