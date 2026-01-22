"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingCart, Trash2, Send, Plus, Minus } from "lucide-react"
import { useMarketStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface CartDrawerProps {
    isOpen: boolean
    onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    // Fix: Use individual selectors to prevent getServerSnapshot loop
    const cart = useMarketStore((state) => state.cart);
    const removeFromCart = useMarketStore((state) => state.removeFromCart);
    const updateQuantity = useMarketStore((state) => state.updateQuantity);
    const getTotalPriceSYP = useMarketStore((state) => state.getTotalPriceSYP);
    const getTotalItems = useMarketStore((state) => state.getTotalItems);

    const [name, setName] = React.useState("")
    const [centerName, setCenterName] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [notes, setNotes] = React.useState("")

    const totalPrice = getTotalPriceSYP();
    const totalItems = getTotalItems();

    const handleCheckout = () => {
        const phoneNumber = "963940285006"; // Primary Santoza Number

        // --- WhatsApp Logic (Gate 1 Core Function) ---
        const header = `🛒 *طلب جديد من متجر سنتوزا*`;

        const itemsList = cart
            .map((item) => {
                const itemTotal = (item.price_syp * item.quantity).toLocaleString();
                return `▪️ ${item.name} \n   └ ${item.quantity} × ${item.price_syp} = ${itemTotal} ل.س`;
            })
            .join("\n");

        const customerSection = `👤 *معلومات الزبون:*\nالاسم: ${name}\nالمركز: ${centerName}\nالعنوان: ${address}`;

        if (notes) {
            customerSection.concat(`\nملاحظات: ${notes}`);
        }

        const footer = `💰 *المجموع النهائي: ${totalPrice.toLocaleString()} ل.س*`;
        const date = `📅 ${new Date().toLocaleDateString('ar-SY')}`;

        const message = encodeURIComponent(
            `${header}\n${date}\n\n${itemsList}\n\n${footer}\n\n----------------\n${customerSection}`
        );

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }

    // Prevent scroll
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => { document.body.style.overflow = "unset" }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed left-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col border-r border-gray-100"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#F8F9FA]">
                            <h2 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                                <span className="bg-[#D91C24] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">{totalItems}</span>
                                سلة الطلبات
                            </h2>
                            <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-200 rounded-full">
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-5 no-scrollbar">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                                        <ShoppingCart className="w-10 h-10 opacity-20" />
                                    </div>
                                    <p className="font-medium">السلة فارغة حالياً</p>
                                    <Button variant="outline" onClick={onClose} className="border-[#D91C24] text-[#D91C24] hover:bg-red-50">
                                        تصفح المنتجات
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {/* Items List */}
                                    <div className="space-y-4">
                                        {cart.map((item) => (
                                            <motion.div layout key={item.id} className="flex gap-4 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                                <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0 relative">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                                                        <p className="text-sm text-[#D91C24] font-semibold">{item.price_syp.toLocaleString()} ل.س</p>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-2">
                                                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                                            <button
                                                                className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-[#D91C24] transition-colors"
                                                                onClick={() => updateQuantity(item.id, 'decrement')}
                                                            ><Minus className="w-3 h-3" /></button>
                                                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                            <button
                                                                className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-green-600 transition-colors"
                                                                onClick={() => updateQuantity(item.id, 'increment')}
                                                            ><Plus className="w-3 h-3" /></button>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50"
                                                            onClick={() => removeFromCart(item.id)}
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Summary Block */}
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center text-lg font-bold">
                                        <span className="text-gray-600">المجموع التقديري:</span>
                                        <span className="text-[#D91C24]">{totalPrice.toLocaleString()} ل.س</span>
                                    </div>

                                    {/* Form Section */}
                                    <div className="space-y-4 border-t border-gray-100 pt-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1 h-5 bg-[#D91C24] rounded-full"></div>
                                            <h3 className="font-bold text-gray-900">معلومات التوصيل</h3>
                                        </div>

                                        <div className="grid gap-4">
                                            <div className="space-y-1.5">
                                                <Label className="text-xs text-gray-500">الاسم الكريم</Label>
                                                <Input
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="bg-gray-50 border-gray-200 focus:border-[#D91C24] focus:ring-[#D91C24]/20"
                                                    placeholder="مثال: محمد الأحمد"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs text-gray-500">اسم المركز / المحل</Label>
                                                <Input
                                                    value={centerName}
                                                    onChange={(e) => setCenterName(e.target.value)}
                                                    className="bg-gray-50 border-gray-200 focus:border-[#D91C24] focus:ring-[#D91C24]/20"
                                                    placeholder="مثال: سوبر ماركت البركة"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs text-gray-500">العنوان بالتفصيل</Label>
                                                <Textarea
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    className="bg-gray-50 border-gray-200 focus:border-[#D91C24] focus:ring-[#D91C24]/20 resize-none h-20"
                                                    placeholder="المدينة، الحي، جانب..."
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs text-gray-500">ملاحظات إضافية (اختياري)</Label>
                                                <Input
                                                    value={notes}
                                                    onChange={(e) => setNotes(e.target.value)}
                                                    className="bg-gray-50 border-gray-200"
                                                    placeholder="وقت التوصيل المفضل..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Actions */}
                        <div className="p-4 border-t border-gray-100 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                            <Button
                                className={cn(
                                    "w-full h-14 text-lg font-bold shadow-lg transition-all",
                                    !name || !centerName || !address || cart.length === 0
                                        ? "bg-gray-200 text-gray-400"
                                        : "bg-[#25D366] hover:bg-[#128C7E] text-white shadow-green-200 hover:shadow-green-300 transform hover:-translate-y-1"
                                )}
                                onClick={handleCheckout}
                                disabled={cart.length === 0 || !name || !centerName || !address}
                            >
                                <Send className="w-5 h-5 ml-2" />
                                إرسال الطلب عبر واتساب
                            </Button>

                            {(cart.length > 0) && (!name || !centerName || !address) && (
                                <p className="text-[10px] text-red-500 text-center mt-3 animate-pulse">
                                    يرجى تعبئة الاسم واسم المركز والعنوان لإكمال الطلب
                                </p>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
