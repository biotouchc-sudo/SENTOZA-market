/**
 * SANTOZA GLOBAL CONSTANTS (2026)
 * Source of Truth: PROJECT.CONTEXT.md
 */

export const STORE_NAME = "سنتوزا للتجارة والتوزيع";

export const STORE_CONFIG = {
  name: "سنتوزا",
  fullName: "سنتوزا للتجارة والتوزيع",
  location: "حلب - صلاح الدين",
  whatsapp: "963940285006",
  currency: "ل.س",
  currencySecondary: "T.L"
};

export const WHATSAPP_NUMBER = STORE_CONFIG.whatsapp;
export const STORE_LOCATION = STORE_CONFIG.location;

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "الكل" },
  { id: "karamella", name: "كراميلا" },
  { id: "biscuit", name: "بسكويت" },
  { id: "chocolate", name: "شوكولا" },
  { id: "misc", name: "مواد مختلفة" },
] as const;

export type CategoryId = typeof PRODUCT_CATEGORIES[number]['id'];

// Keep legacy export for backward compatibility if needed
export const CATEGORIES = PRODUCT_CATEGORIES.map(c => c.name);
