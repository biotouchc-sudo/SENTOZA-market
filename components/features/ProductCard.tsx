'use client';

import { motion } from 'framer-motion';
import { Product } from '@/store/useInventory'; // Usin unified definition
import { useCart } from '@/store/useCart'; // Migrated to useCart
import { ShoppingCart, Package, Box } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    // Explicit selector for performance
    const { addItem, openCart } = useCart((state) => ({
        addItem: state.addItem,
        openCart: state.openCart,
    }));

    const handleAdd = () => {
        addItem(product);
        // openCart(); // Handled inside addItem already, but safe to call
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }} // Token: snappy
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full relative group"
        >
            {/* Image Section */}
            <div className="relative aspect-square bg-[#F8F9FA] p-4">
                <div className="relative w-full h-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                {product.is_out_of_stock && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center backdrop-blur-sm">
                        <span className="bg-gray-900 text-white px-3 py-1 text-sm font-bold rounded-full">
                            نفذت الكمية
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4 flex-1 flex flex-col">
                {/* Category Tag */}
                <span className="text-xs font-medium text-[#4A148C] bg-[#4A148C]/10 px-2 py-1 rounded-md w-fit mb-2">
                    {product.category}
                </span>

                {/* Title */}
                <h3 className="font-bold text-gray-900 leading-tight mb-3 min-h-[40px]">
                    {product.name}
                </h3>

                {/* Packing Details (B2B Crucial) */}
                <div className="space-y-1 mb-4 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-2">
                        <Box className="w-3 h-3 text-[#D91C24]" />
                        <span>الطرد: {product.packing_carton || 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Package className="w-3 h-3 text-[#FFC107]" />
                        <span>العبوة: {product.packing_inner || 'N/A'}</span>
                    </div>
                </div>

                {/* Price Section */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between">
                    <div>
                        <div className="text-lg font-black text-[#D91C24]">
                            {product.price_syp?.toLocaleString() || '0'} ل.س
                        </div>
                        <div className="text-sm font-medium text-gray-400">
                            {product.price_try?.toLocaleString() || '0'} T.L
                        </div>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAdd}
                        disabled={product.is_out_of_stock}
                        className="bg-[#D91C24] text-white p-3 rounded-full shadow-lg shadow-red-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#b01017] transition-colors"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
