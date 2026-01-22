import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, Users, Target, Heart } from "lucide-react";
import { STORE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: `من نحن | ${STORE_CONFIG.name}`,
    description: `تعرف على ${STORE_CONFIG.name} للتجارة والتوزيع - رؤيتنا، مهمتنا، وقيمنا`,
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            من نحن
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {STORE_CONFIG.name} للتجارة والتوزيع - شريككم الموثوق في توفير
                            أجود المنتجات بأفضل الأسعار
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Mission */}
                        <div className="p-8 rounded-2xl border bg-card">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <Target className="h-7 w-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">مهمتنا</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                توفير منتجات عالية الجودة للعملاء بأسعار تنافسية، مع الالتزام
                                بأعلى معايير الخدمة والاحترافية في كل تعامل.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="p-8 rounded-2xl border bg-card">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <Heart className="h-7 w-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">رؤيتنا</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                أن نكون الخيار الأول والأفضل للعملاء في مجال التجارة والتوزيع،
                                من خلال الابتكار المستمر وبناء علاقات طويلة الأمد.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-muted/30">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { title: "الجودة", desc: "نلتزم بتوفير أفضل المنتجات" },
                            { title: "الثقة", desc: "نبني علاقات مبنية على الصدق" },
                            { title: "الخدمة", desc: "رضا العميل هو أولويتنا" },
                        ].map((value, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl bg-background border text-center"
                            >
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16">
                <div className="container px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
                    <p className="text-muted-foreground mb-6">
                        نحن هنا لخدمتكم - لا تترددوا في التواصل
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                            <Phone className="h-5 w-5" />
                            تواصل معنا
                        </Link>
                        <a
                            href={`https://wa.me/${STORE_CONFIG.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-muted transition-colors"
                        >
                            واتساب
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
