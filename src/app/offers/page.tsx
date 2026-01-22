"use client";

import { ProductEngine } from "@/components/features/ProductEngine";

export default function OffersPage() {
    // In a real app, we would pass a filter prop like <ProductEngine filter="offers" />
    // For now, the user uses the engine directly.
    return (
        <div className="container mx-auto px-4 pt-32 pb-20">
            <h1 className="text-4xl font-bold gradient-text mb-2 text-center md:text-right">عروض خاصة</h1>
            <p className="text-[var(--wat-text-muted)] text-center md:text-right mb-8">خصومات حصرية للأعضاء المميزين</p>

            <div className="p-4 bg-[var(--candy-pink)]/10 border border-[var(--candy-pink)] rounded-xl mb-8 text-center text-[var(--candy-pink)]">
                ✨ استخدم كود <strong>SENTOZA2026</strong> للحصول على خصم 20%
            </div>

            <ProductEngine />
        </div>
    );
}
