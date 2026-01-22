import { Header } from "@/components/layout/Header";
import { ProductEngine } from "@/components/features/ProductEngine";
import { AnimatedText } from "@/components/smart/AnimatedText";

export default function Home() {
    return (
        <div className="min-h-screen pb-20 overflow-hidden">

            {/* 1. NERVOUS SYSTEM */}
            <Header />

            <main className="container mx-auto px-4 pt-28 md:pt-40 relative z-10">

                {/* HERO SECTION (Smart Localized) */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--wat-primary)] to-[var(--wat-primary-dim)] fluid-heading">
                            SENTOZA 2026
                        </span>
                    </h1>

                    {/* ✨ 1. Smart Animated Text (Arabic) */}
                    <div className="h-8 md:h-10 mb-2" dir="rtl">
                        <AnimatedText
                            text="مستقبل الحلويات الفاخرة"
                            className="text-[var(--wat-text-muted)] text-lg md:text-xl font-medium"
                            delay={0.5}
                        />
                    </div>

                    <p className="text-sm text-white/40 max-w-md mx-auto animate-fade-in opacity-0 mt-4" style={{ animationDelay: '1.5s' }}>
                        اندماج جيني بين الفخامة، السرعة، والذكاء الصناعي.
                    </p>
                </div>

                {/* 2. BRAIN (Interaction Engine) */}
                <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                    <ProductEngine />
                </div>

            </main>
        </div>
    );
}
