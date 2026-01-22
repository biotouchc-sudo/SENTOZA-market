"use client";

import Image from "next/image";
import { useCart } from "@/store/useCart";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CartSheet() {
    const { items, isOpen, toggleCart, removeItem, updateQuantity, totalPrice } = useCart();

    // GENETIC TRAIT: Backdrop Blur (Glass)
    if (!isOpen) return null;

    return (
        <>
            {/* BACKDROP */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-fade-in"
                onClick={toggleCart}
            />

            {/* DRAWER */}
            <div className={cn(
                "fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-[var(--wat-surface)] border-l border-[var(--wat-glass-border)] shadow-2xl",
                "animate-slide-in-right transition-transform duration-[var(--duration-standard)] ease-[var(--ease-confident)]"
            )}>
                <div className="flex flex-col h-full">

                    {/* HEADER */}
                    <div className="flex items-center justify-between p-6 border-b border-[var(--wat-glass-border)]">
                        <h2 className="text-xl font-bold gradient-text">Your Artifacts</h2>
                        <Button variant="ghost" size="icon" onClick={toggleCart}>
                            <Icon name="X" size={24} />
                        </Button>
                    </div>

                    {/* ITEMS LIST */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {items.length === 0 ? (
                            <div className="text-center py-20 opacity-50">
                                <Icon name="ShoppingBag" size={48} className="mx-auto mb-4" />
                                <p>Your inventory is empty.</p>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="flex gap-4 animate-fade-in">
                                    {/* Image */}
                                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white/5 flex-shrink-0 border border-[var(--wat-glass-border)]">
                                        <div className="absolute inset-0 flex items-center justify-center text-xs text-white/20 font-bold">Item</div>
                                        {/* Image component would go here */}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium text-[var(--wat-text-main)]">{item.name}</h3>
                                            <p className="text-sm text-[var(--wat-primary)]">${item.price_syp}</p>
                                        </div>
                                        <div className="flex items-center justify-between bg-white/5 rounded-lg p-1 w-max">
                                            <Button size="iconSm" variant="ghost" onClick={() => updateQuantity(item.id, -1)}>
                                                <Icon name="Minus" size={14} />
                                            </Button>
                                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                                            <Button size="iconSm" variant="ghost" onClick={() => updateQuantity(item.id, 1)}>
                                                <Icon name="Plus" size={14} />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Remove */}
                                    <Button size="iconSm" variant="ghost" className="text-red-500 hover:text-red-400" onClick={() => removeItem(item.id)}>
                                        <Icon name="Trash2" size={16} />
                                    </Button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* FOOTER */}
                    <div className="p-6 border-t border-[var(--wat-glass-border)] bg-[var(--wat-surface)] space-y-4">
                        <div className="flex items-center justify-between text-lg font-medium">
                            <span>Total</span>
                            <span className="text-[var(--wat-primary)]">${totalPrice().toLocaleString()}</span>
                        </div>
                        <Button className="w-full h-12 text-lg font-bold" disabled={items.length === 0}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>

            {/* Dynamic Slide Animation Keyframe for Drawer */}
            <style jsx global>{`
        @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
        .animate-slide-in-right {
            animation: slideInRight 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
        </>
    );
}
