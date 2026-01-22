"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function getProductsAction() {
  try {
    const data = await db.select().from(products);
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return { success: false, data: [] };
  }
}

export async function addToInventory(product: any) {
  try {
    await db.insert(products).values(product);
    revalidatePath("/shop"); // Revalidate shop page
    return { success: true };
  } catch (error) {
    console.error("Failed to add product:", error);
    return { success: false, error: "Failed to add product" };
  }
}

export async function deleteFromInventory(id: string) {
  try {
    await db.delete(products).where(eq(products.id, id));
    revalidatePath("/shop");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete product:", error);
    return { success: false, error: "Failed to delete" };
  }
}

export async function updateProductAction(id: string, updates: any) {
  try {
    await db.update(products).set(updates).where(eq(products.id, id));
    revalidatePath("/shop");
    return { success: true };
  } catch (error) {
    console.error("Failed to update product:", error);
    return { success: false, error: "Failed to update" };
  }
}
