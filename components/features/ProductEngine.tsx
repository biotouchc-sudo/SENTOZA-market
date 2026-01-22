"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useInventory } from "@/store/useInventory"; 

const STATIC_CATEGORIES = [
  { id: "all", name: "الكل" },
  { id: "hard", name: "سكاكر صلبة" },
  { id: "soft", name: "محاشي وجلي" },
  { id: "chocolate", name: "شوكولا فاخرة" },
  { id: "sour", name: "حامض" },
];

export function ProductEngine() {
  const { products } = useInventory(); // DYNAMIC
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.categoryId === activeCategory || p.category.toLowerCase().includes(activeCategory));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }

    return result;
  }, [products, activeCategory, searchQuery]);

  return (
    <div className="space-y-8" dir="rtl">
      
      {/* CONTROLS */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between sticky top-20 z-40 py-4 glass rounded-2xl px-4 md:px-6">
        
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-hide">
          {STATIC_CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full transition-all duration-[200ms] border border-transparent font-medium",
                activeCategory === cat.id
                  ? "bg-[var(--candy-pink)] text-white shadow-lg shadow-[var(--candy-pink)]/40 border-[var(--candy-pink)]"
                  : "text-white/60 hover:text-[var(--candy-pink)] hover:border-[var(--candy-pink)]/30"
              )}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                <Icon name="Search" size={16} />
            </div>
            <Input
                type="text" 
                placeholder="ابحث عن صنف..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-9 h-10 rounded-xl bg-black/40 border-white/10 focus:border-[var(--candy-blue)] text-right"
            />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in relative z-10"> 
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-24 glass rounded-3xl border-dashed border-white/10">
            <div className="inline-flex justify-center items-center p-4 bg-white/5 rounded-full mb-4 animate-bounce">
                <Icon name="Cookie" size={32} className="text-[var(--wat-text-muted)]" />
            </div>
            <h3 className="text-xl font-medium text-[var(--wat-text-muted)]">المخزون فارغ.</h3>
            <p className="text-sm text-white/30 mt-2">حاول تغيير خيارات البحث.</p>
        </div>
      )}
    </div>
  );
}
