import { z } from 'zod';

// ----------------------------------------------------------------------
// 1. Product Schema (The Gold Standard)
// ----------------------------------------------------------------------
export const ProductSchema = z.object({
  id: z.string().min(1, "Product ID is required"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  category: z.enum(['hard', 'soft', 'chocolate', 'sour', 'other', 'كراميلا', 'بسكويت', 'شكولا', 'مواد مختلفة']), // Enhanced enum to cover both systems
  price_syp: z.number().positive("Price (SYP) must be positive"),
  price_try: z.number().positive("Price (TRY) must be positive"),
  packing_carton: z.string().min(1, "Carton packing details required"),
  packing_inner: z.string().min(1, "Inner packing details required"),
  image: z.string().default("/placeholder.png"),
  notes: z.string().optional(),
  is_out_of_stock: z.boolean().default(false), // Admin Control
  categoryId: z.string().optional(), // For compatibility
});

export type Category = z.infer<typeof ProductSchema>['category'];
export type Product = z.infer<typeof ProductSchema>;

// ----------------------------------------------------------------------
// 2. Cart Schema (The Trading Logic)
// ----------------------------------------------------------------------
export const CartItemSchema = ProductSchema.extend({
  quantity: z.number().int().positive().default(1),
});

export type CartItem = z.infer<typeof CartItemSchema>;

// ----------------------------------------------------------------------
// 3. Order Schema (The WhatsApp Payload)
// ----------------------------------------------------------------------
export const OrderSchema = z.object({
  customerName: z.string().min(2, "الاسم مطلوب"),
  centerName: z.string().min(2, "اسم المركز مطلوب"),
  address: z.string().min(5, "العنوان بالتفصيل مطلوب"),
  items: z.array(CartItemSchema).min(1, "السلة فارغة"),
  total_syp: z.number(),
});

export type OrderModel = z.infer<typeof OrderSchema>;
