"use server";

/**
 * SANTOZA PRODUCT SERVER ACTIONS
 * Standard: 2026 Senate Protocol (Zero-Trust, Zod Validated)
 * 
 * IMPORTANT: Field names match Zod schema:
 * - image (not image_url)
 * - is_out_of_stock (not is_available)
 */

import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { products, NewProduct } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

// ----------------------------------------------------------------------
// Zod Schemas (Input Validation - Security First)
// ----------------------------------------------------------------------
const ProductInputSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  category: z.enum(["كراميلا", "بسكويت", "شكولا", "مواد مختلفة"]),
  price_syp: z.coerce.number().positive("السعر يجب أن يكون موجباً"),
  price_try: z.coerce.number().positive("السعر بالتركي يجب أن يكون موجباً"),
  packing_carton: z.string().min(1, "تفاصيل التعبئة مطلوبة"),
  packing_inner: z.string().min(1, "تفاصيل التعبئة الداخلية مطلوبة"),
  image: z.string().optional(),
  notes: z.string().optional(),
});

// ----------------------------------------------------------------------
// Response Type (Consistent API)
// ----------------------------------------------------------------------
type ActionResponse = {
  success: boolean;
  message: string;
  data?: unknown;
};

// ----------------------------------------------------------------------
// CREATE PRODUCT
// ----------------------------------------------------------------------
export async function createProduct(
  _prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validated = ProductInputSchema.safeParse(rawData);

    if (!validated.success) {
      return {
        success: false,
        message: validated.error.issues[0]?.message || "بيانات غير صالحة",
      };
    }

    const newProduct: NewProduct = {
      ...validated.data,
      id: crypto.randomUUID(),
      categoryId: "general", // Required by schema
      image: validated.data.image || "/placeholder.png", // Fallback for notNull
      is_out_of_stock: false,
    };

    await db.insert(products).values(newProduct);
    revalidatePath("/admin/products");
    revalidatePath("/");

    return { success: true, message: "تم إضافة المنتج بنجاح ✅" };
  } catch (error) {
    console.error("Create Product Error:", error);
    return { success: false, message: "حدث خطأ أثناء الإضافة" };
  }
}

// ----------------------------------------------------------------------
// UPDATE PRODUCT
// ----------------------------------------------------------------------
export async function updateProduct(
  productId: string,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validated = ProductInputSchema.partial().safeParse(rawData);

    if (!validated.success) {
      return {
        success: false,
        message: validated.error.issues[0]?.message || "بيانات غير صالحة",
      };
    }

    await db.update(products).set(validated.data).where(eq(products.id, productId));
    revalidatePath("/admin/products");
    revalidatePath("/");

    return { success: true, message: "تم تحديث المنتج بنجاح ✅" };
  } catch (error) {
    console.error("Update Product Error:", error);
    return { success: false, message: "حدث خطأ أثناء التحديث" };
  }
}

// ----------------------------------------------------------------------
// DELETE PRODUCT
// ----------------------------------------------------------------------
export async function deleteProduct(productId: string): Promise<ActionResponse> {
  try {
    await db.delete(products).where(eq(products.id, productId));
    revalidatePath("/admin/products");
    revalidatePath("/");

    return { success: true, message: "تم حذف المنتج ✅" };
  } catch (error) {
    console.error("Delete Product Error:", error);
    return { success: false, message: "حدث خطأ أثناء الحذف" };
  }
}

// ----------------------------------------------------------------------
// TOGGLE AVAILABILITY (Quick Action) - Uses is_out_of_stock
// ----------------------------------------------------------------------
export async function toggleAvailability(productId: string): Promise<ActionResponse> {
  try {
    const product = await db.query.products.findFirst({
      where: eq(products.id, productId),
    });

    if (!product) {
      return { success: false, message: "المنتج غير موجود" };
    }

    // Toggle: is_out_of_stock = !is_out_of_stock
    await db
      .update(products)
      .set({ is_out_of_stock: !product.is_out_of_stock })
      .where(eq(products.id, productId));

    revalidatePath("/admin/products");
    revalidatePath("/");

    return {
      success: true,
      message: product.is_out_of_stock ? "تم تفعيل المنتج" : "تم تعليق المنتج",
    };
  } catch (error) {
    console.error("Toggle Availability Error:", error);
    return { success: false, message: "حدث خطأ" };
  }
}

// ----------------------------------------------------------------------
// GET ALL PRODUCTS (For Server Components)
// ----------------------------------------------------------------------
export async function getProducts() {
  try {
    return await db.query.products.findMany({
      orderBy: (products, { desc }) => [desc(products.created_at)],
    });
  } catch (error) {
    console.error("Get Products Error:", error);
    return [];
  }
}

// ----------------------------------------------------------------------
// GET PRODUCT BY ID
// ----------------------------------------------------------------------
export async function getProductById(id: string) {
  try {
    return await db.query.products.findFirst({
      where: eq(products.id, id),
    });
  } catch (error) {
    console.error("Get Product By ID Error:", error);
    return null;
  }
}
