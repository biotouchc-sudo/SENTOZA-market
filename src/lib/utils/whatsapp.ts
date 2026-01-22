/**
 * WHATSAPP UTILITY FUNCTIONS
 * Generates order message and WhatsApp URL
 * Standard: 2026 Senate Protocol
 */

import { CartItem } from "@/lib/schema/product.schema";
import { STORE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

/**
 * Generates a formatted order string for WhatsApp
 */
export function generateOrderString(cart: CartItem[]): string {
  const header = `🛒 *طلب جديد من ${STORE_NAME}*`;
  const date = `📅 ${new Date().toLocaleDateString('ar-SY')}`;
  
  const itemsList = cart
    .map((item) => {
      const itemTotal = (item.price_syp * item.quantity).toLocaleString();
      return `▪️ ${item.name}\n   └ ${item.quantity} × ${item.price_syp.toLocaleString()} = ${itemTotal} ل.س`;
    })
    .join("\n");

  const total = cart.reduce((acc, item) => acc + item.price_syp * item.quantity, 0);
  const footer = `💰 *المجموع: ${total.toLocaleString()} ل.س*`;

  return `${header}\n${date}\n\n${itemsList}\n\n${footer}`;
}

/**
 * Generates WhatsApp URL with encoded order message
 */
export function generateWhatsAppUrl(cart: CartItem[]): string {
  const message = generateOrderString(cart);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
