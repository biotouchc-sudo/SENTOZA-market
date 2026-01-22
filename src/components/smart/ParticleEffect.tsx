"use client";

import { useEffect, useRef, useState } from "react";
import { getDeviceCapabilities, getParticleCount } from "@/lib/performance";

export function ParticleEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const caps = getDeviceCapabilities();
        const particleCount = getParticleCount(caps.level);

        if (particleCount === 0) return;
        setShouldRender(true);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // 🍬 CANDY COLORS
        const colors = ["#E6D5AC", "#FF69B4", "#00FFFF", "#BD00FF"]; // Gold, Pink, Cyan, Purple

        const particles: Array<{
            x: number;
            y: number;
            dx: number;
            dy: number;
            size: number;
            color: string;
            alpha: number;
        }> = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3, // Slightly larger sugar grains
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: Math.random() * 0.4 + 0.1
            })
        }

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();
                ctx.globalAlpha = 1.0;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-60"
        />
    );
}
