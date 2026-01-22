import { Metadata } from "next";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { STORE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: `تواصل معنا | ${STORE_CONFIG.name}`,
    description: `تواصل مع ${STORE_CONFIG.name} - نحن هنا لخدمتكم`,
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
                    <p className="text-xl text-muted-foreground">
                        نحن هنا لمساعدتكم - لا تترددوا في التواصل
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/${STORE_CONFIG.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 rounded-2xl border bg-card hover:border-green-500 hover:shadow-lg transition-all text-center"
                        >
                            <div className="w-14 h-14 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                                <MessageCircle className="h-7 w-7 text-green-600" />
                            </div>
                            <h3 className="font-bold mb-2">واتساب</h3>
                            <p className="text-muted-foreground text-sm" dir="ltr">
                                +{STORE_CONFIG.whatsapp}
                            </p>
                        </a>

                        {/* Phone */}
                        <a
                            href={`tel:+${STORE_CONFIG.whatsapp}`}
                            className="group p-6 rounded-2xl border bg-card hover:border-primary hover:shadow-lg transition-all text-center"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                                <Phone className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-bold mb-2">الهاتف</h3>
                            <p className="text-muted-foreground text-sm" dir="ltr">
                                +{STORE_CONFIG.whatsapp}
                            </p>
                        </a>

                        {/* Location */}
                        <div className="p-6 rounded-2xl border bg-card text-center">
                            <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-7 w-7 text-orange-600" />
                            </div>
                            <h3 className="font-bold mb-2">الموقع</h3>
                            <p className="text-muted-foreground text-sm">
                                {STORE_CONFIG.location}
                            </p>
                        </div>

                        {/* Hours */}
                        <div className="p-6 rounded-2xl border bg-card text-center">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-7 w-7 text-blue-600" />
                            </div>
                            <h3 className="font-bold mb-2">أوقات العمل</h3>
                            <p className="text-muted-foreground text-sm">
                                السبت - الخميس
                                <br />
                                9:00 ص - 10:00 م
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-muted/30">
                <div className="container px-4 text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">هل لديك استفسار؟</h2>
                    <p className="text-muted-foreground mb-6">
                        أسرع طريقة للتواصل معنا هي عبر واتساب
                    </p>
                    <a
                        href={`https://wa.me/${STORE_CONFIG.whatsapp}?text=مرحباً، لدي استفسار`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors text-lg"
                    >
                        <MessageCircle className="h-6 w-6" />
                        راسلنا على واتساب
                    </a>
                </div>
            </section>
        </div>
    );
}
