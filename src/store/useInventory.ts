"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Product {
  id: string;
  name: string;
  price_syp: number;
  price_try: number;
  category: string;
  categoryId: string;
  image: string;
  packing_carton: string;
  packing_inner: string;
  isOffer?: boolean;
  is_out_of_stock?: boolean;
  notes?: string | null;
}

export type ProductDraft = Omit<Product, "id">;

interface InventoryState {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  resetDefaults: () => void;
  setProducts: (products: Product[]) => void;
}

const DEFAULT_PRODUCTS: Product[] = [
  { 
    id: "1", 
    name: "Nebula Lollipops", 
    category: "Hard Candy", 
    price_syp: 12500,
    price_try: 25,
    image: "/p1.jpg", 
    categoryId: "hard", 
    isOffer: true,
    packing_carton: "12 boxes",
    packing_inner: "24 pcs"
  },
  { 
    id: "2", 
    name: "Quantum Gummies", 
    category: "Gummies", 
    price_syp: 8500,
    price_try: 17,
    image: "/p2.jpg", 
    categoryId: "soft",
    packing_carton: "24 bags",
    packing_inner: "500g" 
  },
  { 
    id: "3", 
    name: "Golden Truffles", 
    category: "Chocolate", 
    price_syp: 24000,
    price_try: 48,
    image: "/p3.jpg", 
    categoryId: "chocolate",
    packing_carton: "6 tins",
    packing_inner: "1kg" 
  },
  { 
    id: "4", 
    name: "Cyber Sour Belts", 
    category: "Sour", 
    price_syp: 6500,
    price_try: 13,
    image: "/p4.jpg", 
    categoryId: "sour", 
    isOffer: true,
    packing_carton: "12 tubs",
    packing_inner: "100 pcs" 
  },
  { 
    id: "5", 
    name: "Plasma Chews", 
    category: "Soft Candy", 
    price_syp: 5500,
    price_try: 11,
    image: "/p5.jpg", 
    categoryId: "soft",
    packing_carton: "18 boxes",
    packing_inner: "24 bars" 
  },
  { 
    id: "6", 
    name: "Void Dark Choco", 
    category: "Chocolate", 
    price_syp: 18000,
    price_try: 36,
    image: "/p6.jpg", 
    categoryId: "chocolate",
    packing_carton: "12 bars",
    packing_inner: "100g" 
  },
];

export const useInventory = create<InventoryState>()(
  persist(
    (set, get) => ({
      products: DEFAULT_PRODUCTS,
      setProducts: (products) => set({ products }),

      addProduct: (product) => {
        const newProduct = { ...product, id: Math.random().toString(36).substr(2, 9) };
        set({ products: [...get().products, newProduct] });
      },

      updateProduct: (id, updates) => {
        set({
          products: get().products.map((p) => (p.id === id ? { ...p, ...updates } : p)),
        });
      },

      deleteProduct: (id) => {
        set({ products: get().products.filter((p) => p.id !== id) });
      },



      resetDefaults: () => set({ products: DEFAULT_PRODUCTS }),
    }),
    {
      name: "nexus-inventory-storage",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") return localStorage;
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
    }
  )
);
