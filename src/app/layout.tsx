import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientShell } from "@/components/layout/ClientShell";
import { CartSheet } from "@/components/cart/CartSheet";
import { ParticleEffect } from "@/components/smart/ParticleEffect";
import { WhatsAppNotification } from "@/components/smart/WhatsAppNotification";
import { BackToTop } from "@/components/smart/BackToTop";
import { LazyFeature } from "@/components/ui/LazyFeature";
import { SkipLink } from "@/components/ui/SkipLink";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

// 📱 2. SMART VIEWPORT META
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#050505",
};

// 🎯 19. SMART SEO META TAGS
export const metadata: Metadata = {
    title: {
        template: "%s | SENTOZA",
        default: "شركة سنتوزا للتجارة والتوزيع | Sentoza",
    },
    description: "بوابة المستقبل للحلويات الفاخرة. تجربة تسوق سكاكر وبسكويت وشوكولا بمفهوم 2026.",
    keywords: ["Sentoza", "Sweets", "Candy", "Luxury", "Saudi Arabia", "سنتوزا", "حلويات", "سكاكر"],
    authors: [{ name: "Sentoza Team" }],
    openGraph: {
        title: "SENTOZA - Sugar Pharmacy",
        description: "مستقبل الحلويات الفاخرة.",
        type: "website",
        locale: "ar_SA",
        siteName: "SENTOZA",
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" className="dark scroll-smooth">
            <head>
                {/* ⚡ 10. SMART PERFORMANCE HINTS */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            </head>
            <body className={`${inter.variable} antialiased bg-[var(--wat-bg)] text-[var(--wat-text-main)] overflow-x-hidden relative`}>

                {/* 🎯 11. SMART SKIP LINK (A11y) */}
                <SkipLink />

                <ParticleEffect />

                {/* ID for SkipLink target */}
                <div id="main-content">
                    {children}
                </div>

                <CartSheet />

                <LazyFeature minLevel="low">
                    <WhatsAppNotification />
                </LazyFeature>

                <LazyFeature minLevel="medium">
                    <BackToTop />
                </LazyFeature>

            </body>
        </html>
    );
}
