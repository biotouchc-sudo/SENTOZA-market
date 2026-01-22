"use client";

import { useState } from "react";
import { useInventory, Product, ProductDraft } from "@/store/useInventory"; // Verify exports in next step
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@/components/ui/Icon";
import { Category } from "@/lib/schema/product.schema"; // Verify exports

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState("");
    const { products, addProduct, updateProduct, deleteProduct, resetDefaults } = useInventory();

    // Local state for new product form
    const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "soft" });

    // 🔒 SIMPLE AUTH
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--wat-bg)] relative overflow-hidden">
                {/* Background Candy Grid */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="glass p-8 rounded-[var(--radius-xl)] w-full max-w-md text-center space-y-6 relative z-10 animate-fade-in">
                    <div className="mx-auto w-16 h-16 bg-[var(--candy-pink)] rounded-full flex items-center justify-center shadow-[0_0_20px_var(--candy-pink)] mb-4">
                        <Icon name="Lock" size={32} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-bold gradient-text">Command Center</h1>
                    <p className="text-[var(--wat-text-muted)]">Enter secure PIN to verify access.</p>

                    <div className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Enter PIN (Try 1234)"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            className="text-center text-lg tracking-widest"
                        />
                        <Button
                            className="w-full font-bold bg-[var(--wat-primary)] text-black hover:bg-[var(--candy-pink)] hover:text-white transition-colors"
                            onClick={() => {
                                if (pin === "1234") setIsAuthenticated(true);
                                else alert("Access Denied");
                            }}
                        >
                            Unlock System
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // 🔓 DASHBOARD
    return (
        <div className="min-h-screen bg-[var(--wat-bg)] p-4 md:p-8 pt-24 pb-20">
            <div className="container mx-auto max-w-5xl">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold gradient-text">Inventory Manager</h1>
                        <p className="text-[var(--wat-text-muted)]">Manage your sweet empire.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={resetDefaults}>
                            <Icon name="RefreshCw" size={16} className="mr-2" /> Reset Data
                        </Button>
                        <Button variant="destructive" onClick={() => setIsAuthenticated(false)}>
                            Lock System
                        </Button>
                    </div>
                </div>

                {/* ➕ ADD PRODUCT FORM */}
                <div className="glass p-6 rounded-[var(--radius-md)] mb-8 border border-[var(--wat-glass-border)]">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Icon name="Plus" className="text-[var(--candy-blue)]" /> Add New Artifact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Input
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder="Category (soft, hard...)"
                            value={newProduct.category}
                            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        />
                        <Input
                            type="number"
                            placeholder="Price ($)"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Button
                            onClick={() => {
                                if (!newProduct.name || !newProduct.price) return;

                                const categoryInput = newProduct.category.toLowerCase();
                                const validCategories: Category[] = ["hard", "soft", "chocolate", "sour", "other"];
                                const categoryToUse: Category = validCategories.includes(categoryInput as Category)
                                    ? (categoryInput as Category)
                                    : "other";

                                addProduct({
                                    name: newProduct.name,
                                    category: categoryToUse,
                                    price_syp: parseFloat(newProduct.price),
                                    price_try: 0,
                                    packing_carton: "N/A",
                                    packing_inner: "N/A",
                                    categoryId: "general",
                                    image: "", // Placeholder
                                    notes: null,
                                    is_out_of_stock: false
                                });
                                setNewProduct({ name: "", price: "", category: "soft" });
                            }}
                            className="bg-[var(--candy-blue)] text-black hover:bg-white"
                        >
                            Add Product
                        </Button>
                    </div>
                </div>

                {/* 📋 PRODUCTS TABLE */}
                <div className="candy-glass rounded-[var(--radius-lg)] overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10 text-[var(--wat-text-muted)] text-sm uppercase tracking-wider">
                                <th className="p-4">Product Name</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Price</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="p-4 font-medium text-[var(--wat-text-main)]">{product.name}</td>
                                    <td className="p-4 text-sm text-[var(--wat-text-muted)]">{product.category}</td>
                                    <td className="p-4 font-bold text-[var(--wat-primary)]">
                                        ${product.price_syp.toFixed(0)}
                                    </td>
                                    <td className="p-4 text-right flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button size="iconSm" variant="ghost" onClick={() => {
                                            const newPrice = prompt("New Price?", product.price_syp.toString());
                                            if (newPrice) updateProduct(product.id, { price_syp: parseFloat(newPrice) });
                                        }}>
                                            <Icon name="Pencil" size={14} />
                                        </Button>
                                        <Button size="iconSm" variant="ghost" className="text-red-500 hover:bg-red-500/10" onClick={() => deleteProduct(product.id)}>
                                            <Icon name="Trash2" size={14} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {products.length === 0 && (
                        <div className="p-8 text-center text-[var(--wat-text-muted)]">
                            Inventory is empty. Start adding sweets!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
