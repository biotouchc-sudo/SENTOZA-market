"use client";

import { useState, useEffect } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";

export function WhatsAppNotification() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // 🎯 Smart Delay: Show after 15 seconds
        const timer = setTimeout(() => {
            setShow(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed bottom-24 right-4 z-[80] max-w-sm animate-bounce-in">
            <div className="glass p-4 rounded-xl shadow-2xl border border-[var(--wat-primary-dim)]/30 flex items-start gap-3 relative">
                <button
                    onClick={() => setShow(false)}
                    className="absolute -top-2 -left-2 bg-black text-white rounded-full p-1 border border-[var(--wat-glass-border)] hover:scale-110 transition-transform"
                >
                    <Icon name="X" size={12} />
                </button>

                <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                    <Icon name="MessageCircle" size={24} />
                </div>

                <div>
                    <h4 className="font-bold text-sm text-[var(--wat-text-main)] mb-1">Need assistance?</h4>
                    <p className="text-xs text-[var(--wat-text-muted)] mb-3">Our concierge is ready to help you.</p>
                    <Button
                        size="sm"
                        className="w-full bg-green-600 hover:bg-green-500 text-white border-none shadow-lg shadow-green-900/20"
                        onClick={() => window.open('https://wa.me/966500000000', '_blank')}
                    >
                        Start Chat
                    </Button>
                </div>
            </div>
        </div>
    );
}
