import Link from "next/link";
import { Home, ArrowRight, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="text-center max-w-md">
                {/* 404 Number */}
                <div className="relative mb-8">
                    <span className="text-[150px] font-black text-muted-foreground/10 leading-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Search className="h-20 w-20 text-muted-foreground/50" />
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-3xl font-bold mb-4">الصفحة غير موجودة</h1>
                <p className="text-muted-foreground text-lg mb-8">
                    عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        <Home className="h-5 w-5" />
                        العودة للرئيسية
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-muted transition-colors"
                    >
                        تواصل معنا
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
