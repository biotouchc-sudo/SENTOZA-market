/**
 * SANTOZA DATABASE SCHEMA (Drizzle ORM)
 * Source of Truth: @/lib/schema/product.schema.ts (Zod)
 * Standard: 2026 Senate Protocol
 * 
 * IMPORTANT: Field names MUST match Zod schema for consistency:
 * - image (not image_url)
 * - is_out_of_stock (not is_available)
 */

import { pgTable, uuid, text, integer, boolean, timestamp, pgEnum } from 'drizzle-orm/pg-core';

// Category Enum (Based on Santoza's product lines)
export const categoryEnum = pgEnum('category', ['كراميلا', 'بسكويت', 'شكولا', 'مواد مختلفة']);

// Products Table (Aligned with Zod ProductSchema)
export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  category: categoryEnum('category').notNull(),
  price_syp: integer('price_syp').notNull(),
  price_try: integer('price_try').notNull(),
  packing_carton: text('packing_carton').notNull(),
  packing_inner: text('packing_inner').notNull(),
  image: text('image').default('/placeholder.png'),
  notes: text('notes'),
  is_out_of_stock: boolean('is_out_of_stock').default(false).notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// Type Inference for TypeScript
export type DrizzleProduct = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
