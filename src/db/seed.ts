
import { db } from "./index";
import { products } from "./schema";

const DEFAULT_PRODUCTS = [
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

async function seed() {
  console.log("🌱 Seeding database...");
  try {
    for (const product of DEFAULT_PRODUCTS) {
      await db.insert(products).values(product).onConflictDoNothing();
    }
    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
  process.exit(0);
}

seed();
