import { pgTable, text, integer, boolean, uuid, timestamp } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  price_syp: integer("price_syp").notNull(),
  price_try: integer("price_try").notNull(),
  category: text("category").notNull(),
  categoryId: text("category_id").notNull(),
  image: text("image").notNull(),
  packing_carton: text("packing_carton").notNull(),
  packing_inner: text("packing_inner").notNull(),
  isOffer: boolean("is_offer").default(false),
  is_out_of_stock: boolean("is_out_of_stock").default(false),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type ProductModel = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
