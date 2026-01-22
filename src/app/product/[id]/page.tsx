"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Phone, ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/store/useCart";
import { useInventory } from "@/store/useInventory";
import { Icon } from "@/components/ui/Icon";

export default function ProductPage() {
    const params = useParams();
    const id = params?.id as string;

    // Connect to stores
    const { products } = useInventory();
    const { addItem, items } = useCart();

    // Local state to handle hydration match
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="min-h-screen bg-[var(--wat-bg)]" />;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <Link href="/shop">
                    <Button>Return to Shop</Button>
                </Link>
            </div>
        );
    }

    const isInCart = items.some((item) => item.id === product.id);

    // Filter related products
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-[var(--wat-bg)] pb-20">
            {/* Back Navigation */}
            <div className="sticky top-0 z-40 bg-[var(--wat-bg)]/80 backdrop-blur-md border-b border-[var(--wat-glass-border)]">
                <div className="container px-4 py-3">
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 text-[var(--wat-text-muted)] hover:text-[var(--wat-primary)] transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5" />
                        <span>العودة للمنتجات</span>
                    </Link>
                </div>
            </div>

            <main className="container px-4 py-6 pt-20">
                {/* Product Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid gap-8 lg:grid-cols-2"
                >
                    {/* Product Image */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-[var(--wat-glass-border)] group">
                        <Image
                            src={product.image || "/placeholder.png"}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                        {product.is_out_of_stock && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white text-xl font-bold bg-red-500/80 px-4 py-2 rounded-lg border border-red-400">
                                    غير متوفر
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-6">
                        {/* Category Badge */}
                        <span className="inline-flex w-fit px-3 py-1 rounded-full bg-[var(--wat-primary-glow)] text-[var(--wat-primary)] text-sm font-medium border border-[var(--wat-primary)]/20">
                            {product.category}
                        </span>

                        {/* Name & Price */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--wat-text-main)] mb-2">
                                {product.name}
                            </h1>
                            <p className="text-3xl font-bold text-[var(--wat-primary)] gradient-text">
                                ${product.price_syp.toLocaleString()}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 mt-4">
                            <Button
                                size="lg"
                                className="w-full h-14 text-lg gap-2 font-bold shadow-[0_0_20px_rgba(255,105,180,0.3)] hover:shadow-[0_0_30px_rgba(255,105,180,0.5)] transition-all"
                                onClick={() => addItem(product)}
                                disabled={product.is_out_of_stock || isInCart}
                            >
                                <Icon name="ShoppingBag" size={20} />
                                {isInCart
                                    ? "موجود في السلة"
                                    : product.is_out_of_stock
                                        ? "نفذت الكمية"
                                        : "أضف للسلة"}
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full h-14 text-lg gap-2 border-[var(--wat-primary)]/30 hover:border-[var(--wat-primary)] text-[var(--wat-primary)]"
                                asChild
                            >
                                <a
                                    href={`https://wa.me/?text=استفسار عن المنتج: ${product.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon name="Phone" size={20} />
                                    استفسار عبر واتساب
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mt-20"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold gradient-text">منتجات قد تعجبك</h2>
                            <Link
                                href="/shop"
                                className="text-[var(--wat-primary)] hover:underline inline-flex items-center gap-1"
                            >
                                عرض الكل
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedProducts.map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/product/${relatedProduct.id}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 mb-3 border border-[var(--wat-glass-border)] group-hover:border-[var(--wat-primary)]/50 transition-colors">
                                        <Image
                                            src={relatedProduct.image || "/placeholder.png"}
                                            alt={relatedProduct.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="font-medium text-sm line-clamp-1 text-[var(--wat-text-main)] group-hover:text-[var(--wat-primary)] transition-colors">
                                        {relatedProduct.name}
                                    </h3>
                                    <p className="text-[var(--wat-text-muted)] font-bold text-sm">
                                        ${relatedProduct.price_syp.toLocaleString()}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </motion.section>
                )}
            </main>
        </div>
    );
}
