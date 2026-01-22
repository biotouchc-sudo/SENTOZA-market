// templates/component.template.tsx
// Standard component template - Copy and customize

import { cn } from "@/lib/utils";

// Types
interface ComponentNameProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

// Component
export function ComponentName({
    children,
    variant = "primary",
    className,
}: ComponentNameProps) {
    return (
        <div
            className={cn(
                // Base styles
                "rounded-lg p-4",
                // Variant styles
                variant === "primary" && "bg-primary text-white",
                variant === "secondary" && "bg-gray-100 text-gray-900",
                // Custom classes
                className
            )}
        >
            {children}
        </div>
    );
}

// Default export for lazy loading
export default ComponentName;
