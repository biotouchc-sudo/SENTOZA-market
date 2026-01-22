/**
 * SANTOZA SHARED TYPES (2026)
 * Source of Truth: @/lib/schema/product.schema.ts
 * 
 * This file re-exports types from Zod schemas to ensure type consistency.
 */

// Re-export all types from the Zod schema (Single Source of Truth)
export { 
  type Product, 
  type CartItem, 
  type OrderModel as Order 
} from '@/lib/schema/product.schema';

// Re-export schemas for runtime validation
export {
  ProductSchema,
  CartItemSchema,
  OrderSchema
} from '@/lib/schema/product.schema';

// Category type union (for type-safe category handling)
export type ProductCategory = 'كراميلا' | 'بسكويت' | 'شكولا' | 'مواد مختلفة';
