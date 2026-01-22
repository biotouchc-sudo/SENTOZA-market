/**
 * SANTOZA DATABASE SEED SCRIPT
 * Migrates data from products.json to Neon Database
 */

import { db } from './index';
import { products } from './schema';
import productsData from '../data/products.json';

async function seed() {
  console.log('🌱 Seeding Santoza database...');

  try {
    // Clear existing products (optional, for clean seed)
    await db.delete(products);

    // Insert products from JSON
    for (const product of productsData) {
      await db.insert(products).values({
        name: product.name,
        category: product.category as 'كراميلا' | 'بسكويت' | 'شكولا' | 'مواد مختلفة',
        price_syp: product.price_syp,
        price_try: product.price_try,
        packing_carton: product.packing_carton,
        packing_inner: product.packing_inner,
        image: product.image,
        notes: product.notes || null,
        is_out_of_stock: false, // Default: all products available
      });
      console.log(`  ✅ Inserted: ${product.name}`);
    }

    console.log('🎉 Seeding complete!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
