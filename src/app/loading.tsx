/**
 * LOADING STATE
 * Skeleton screens for product loading
 * Standard: 2026 Senate Protocol
 */

export default function Loading() {
    return (
        <main className="min-h-screen pb-32">
            {/* Header Skeleton */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="container mx-auto px-4 py-4 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gray-200 animate-pulse" />
                    <div className="space-y-2">
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                        <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
                    </div>
                </div>
            </header>

            {/* Filter Skeleton */}
            <div className="bg-white border-b border-gray-50 py-4">
                <div className="container mx-auto px-4 flex gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-10 w-20 bg-gray-100 rounded-full animate-pulse" />
                    ))}
                </div>
            </div>

            {/* Products Skeleton */}
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                            <div className="aspect-square bg-gray-100 animate-pulse" />
                            <div className="p-4 space-y-3">
                                <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
                                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                                <div className="h-10 w-full bg-gray-100 rounded-xl animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
