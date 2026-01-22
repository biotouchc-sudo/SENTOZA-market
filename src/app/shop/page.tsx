"use client";

import { ProductEngine } from "@/components/features/ProductEngine";

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-20">
            <h1 className="text-4xl font-bold gradient-text mb-8 text-center md:text-right">المتجر الشامل</h1>
            <ProductEngine />
        </div>
    );
}
