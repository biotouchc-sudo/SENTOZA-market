"use client";

/**
 * CART FLOATING BAR COMPONENT
 * Fixed bottom bar showing cart summary and WhatsApp checkout
 * Standard: 2026 Senate Protocol (Zero-Friction, Thumb-First)
 * Premium Upgrade: Glassmorphism + Elevation
 */

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Send, ArrowRight } from "lucide-react";
import { useMarketStore } from "@/lib/store";
import { generateWhatsAppUrl } from "@/lib/utils/whatsapp";
import { Magnetic } from "@/components/ui/Magnetic";

export function CartFloatingBar() {
    const cart = useMarketStore((state) => state.cart);
    const getTotalItems = useMarketStore((state) => state.getTotalItems);
    const getTotalPriceSYP = useMarketStore((state) => state.getTotalPriceSYP);
    const openCart = useMarketStore((state) => state.openCart);

    const totalItems = getTotalItems();
    const totalPrice = getTotalPriceSYP();

    if (totalItems === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-6"
            >
                {/* Floating Glass Container */}
                <div className="
                    container mx-auto 
                    bg-white/90 backdrop-blur-xl
                    border border-white/50
                    shadow-[0_-8px_32px_rgba(0,0,0,0.08)]
                    rounded-2xl p-3
                    flex items-center gap-3
                ">
                    {/* Cart Summary - Clickable to open drawer */}
                    <button
                        onClick={openCart}
                        className="
                            flex items-center gap-4 flex-1 
                            bg-gray-50/50 hover:bg-gray-100/80 
                            rounded-xl p-3 
                            transition-colors duration-200
                            group
                        "
                    >
                        <div className="relative">
                            <div className="
                                bg-white p-2.5 rounded-full shadow-sm 
                                group-hover:scale-110 transition-transform duration-200
                            ">
                                <ShoppingCart className="w-5 h-5 text-gray-700" />
                            </div>
                            <span className="
                                absolute -top-1 -right-1 
                                bg-[#D91C24] text-white text-[10px] font-bold 
                                w-5 h-5 rounded-full 
                                flex items-center justify-center
                                shadow-sm border border-white
                            ">
                                {totalItems}
                            </span>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-gray-500 font-medium">مجموع السلة</div>
                            <div className="font-black text-gray-900 text-lg leading-none mt-0.5">
                                {totalPrice.toLocaleString()}
                                <span className="text-xs text-gray-500 font-normal mr-1">ل.س</span>
                            </div>
                        </div>
                    </button>

                    <Magnetic>
                        <motion.a
                            href={generateWhatsAppUrl(cart)}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.95 }}
                            className="
                                flex items-center gap-2 
                                bg-[#25D366] text-white 
                                px-6 py-3.5 rounded-xl font-bold 
                                shadow-[0_4px_12px_rgba(37,211,102,0.3)]
                                hover:bg-[#128C7E] hover:shadow-[0_6px_16px_rgba(37,211,102,0.4)]
                                transition-all duration-200
                            "
                        >
                            <span>إرسال الطلب</span>
                            <Send className="w-5 h-5 rtl:rotate-180" />
                        </motion.a>
                    </Magnetic>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
