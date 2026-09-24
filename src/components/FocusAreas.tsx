"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Target, Layers, Puzzle } from "lucide-react";
import { focusAreas } from "@/data";

const icons = [Target, Layers, Puzzle];

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            ref.current?.style.setProperty("--x", `${x}px`);
            ref.current?.style.setProperty("--y", `${y}px`);
        });
    };

    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Spotlight gradient */}
            {isHovering && (
                <div
                    className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                    style={{
                        background: "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(56, 189, 248, 0.08), transparent 60%)",
                    }}
                />
            )}
            {children}
        </div>
    );
}

export default function FocusAreas() {
    return (
        <section id="focus" className="scroll-mt-24 py-12 md:py-16 px-6 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-16"
                >
                    <span className="text-[#38BDF8] text-sm font-medium tracking-widest uppercase mb-3 block">Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">What I Focus On</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full"></div>
                </motion.div>

                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {focusAreas.map((area, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                                className="w-[85vw] max-w-[340px] snap-center md:w-auto md:max-w-none md:min-w-0 flex-shrink-0"
                            >
                                <SpotlightCard className="glass-card rounded-2xl p-8 h-full group">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 flex items-center justify-center mb-6 group-hover:from-[#38BDF8]/20 group-hover:to-[#818CF8]/20 transition-all">
                                            <Icon size={24} className="text-[#38BDF8]" />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#18181B] mb-4 group-hover:text-gradient transition-colors font-[family-name:var(--font-syne)]">
                                            {area.title}
                                        </h3>
                                        <p className="text-[#52525B] leading-relaxed text-sm">
                                            {area.description}
                                        </p>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

