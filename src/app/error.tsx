"use client";

/**
 * ERROR BOUNDARY
 * Graceful error handling for the app
 * Standard: 2026 Senate Protocol
 */

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log error to analytics/monitoring
        console.error("App Error:", error);
    }, [error]);

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
            <div className="max-w-md w-full text-center space-y-6">
                {/* Error Icon */}
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                </div>

                {/* Error Message */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-gray-900">حدث خطأ غير متوقع</h1>
                    <p className="text-gray-500">نعتذر عن هذا الخطأ. يرجى المحاولة مرة أخرى.</p>
                </div>

                {/* Retry Button */}
                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 bg-[#D91C24] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#B91720] transition-colors"
                >
                    <RefreshCw className="w-5 h-5" />
                    <span>إعادة المحاولة</span>
                </button>

                {/* Error Details (Dev Only) */}
                {process.env.NODE_ENV === "development" && (
                    <div className="mt-8 p-4 bg-gray-100 rounded-xl text-left">
                        <p className="text-xs font-mono text-gray-600 break-all">
                            {error.message}
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
