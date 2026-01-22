// templates/page.template.tsx
// Standard page template - Copy and customize

import type { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: "Page Title | Brand",
    description: "Page description (150-160 characters)",
    openGraph: {
        title: "Page Title",
        description: "Description for social sharing",
        images: ["/og-image.jpg"],
    },
};

// Page Component
export default function PageName() {
    return (
        <main className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="mb-16">
                <h1 className="text-4xl font-bold mb-4">
                    Main Heading (One per page)
                </h1>
                <p className="text-lg text-gray-600">
                    Supporting text that explains the page purpose.
                </p>
            </section>

            {/* Content Sections */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">Section Title</h2>
                {/* Content goes here */}
            </section>

            {/* CTA Section */}
            <section className="text-center">
                <button className="px-6 py-3 bg-primary text-white rounded-lg">
                    Primary Action
                </button>
            </section>
        </main>
    );
}
