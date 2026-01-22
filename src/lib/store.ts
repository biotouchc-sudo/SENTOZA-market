import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product, CartItem } from './schema/product.schema';
import productsData from '@/data/products.json'; // Initial Data

// ----------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------
interface MarketState {
  // Catalog (Editable via Admin)
  products: Product[];
  updateProduct: (id: string, updates: Partial<Product>) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, action: 'increment' | 'decrement') => void;
  clearCart: () => void;

  // Computed Methods (getters)
  getTotalItems: () => number;
  getTotalPriceSYP: () => number;

  // UI State
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

// ----------------------------------------------------------------------
// Store Implementation
// ----------------------------------------------------------------------
export const useMarketStore = create<MarketState>()(
  persist(
    (set, get) => ({
      // --- Catalog State ---
      products: productsData as Product[], // Load initial JSON
      
      updateProduct: (id, updates) => set((state) => ({
        products: state.products.map(p => p.id === id ? { ...p, ...updates } : p)
      })),

      // --- Cart State ---
      cart: [],

      addToCart: (product) => set((state) => {
        const existing = state.cart.find((item) => item.id === product.id);
        if (existing) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),

      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
      })),

      updateQuantity: (productId, action) => set((state) => ({
        cart: state.cart.map((item) => {
          if (item.id === productId) {
            const newQty = action === 'increment' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: Math.max(1, newQty) };
          }
          return item;
        }),
      })),

      clearCart: () => set({ cart: [] }),

      // --- Computed ---
      getTotalItems: () => {
        return get().cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      getTotalPriceSYP: () => {
        return get().cart.reduce((acc, item) => acc + (item.price_syp * item.quantity), 0);
      },

      // --- UI State ---
      isCartOpen: false,
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

    }),
    {
      name: 'santoza-market-storage', // Key in localStorage
      storage: createJSONStorage(() => localStorage), // Persist to browser
      partialize: (state) => ({ cart: state.cart, products: state.products }), // Persist both cart and admin edits
    }
  )
);
