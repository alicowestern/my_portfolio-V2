"use client";
import { motion } from "framer-motion";
import { tools } from "@/data";

const categoryAccents = [
    { from: "#38BDF8", to: "#818CF8" },
    { from: "#818CF8", to: "#34D399" },
    { from: "#34D399", to: "#38BDF8" },
    { from: "#F59E0B", to: "#EF4444" },
];

export default function Tools() {
    return (
        <section className="py-24 px-6 relative">
            {/* Section glow divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#818CF8]/20 to-transparent" />

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-16"
                >
                    <span className="text-[#818CF8] text-sm font-medium tracking-widest uppercase mb-3 block">Tech Stack</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">Tools & Technologies</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#818CF8] to-[#34D399] rounded-full"></div>
                </motion.div>

                {/* Column Layout — stacked vertically */}
                <div className="flex flex-col gap-6">
                    {tools.map((group, groupIndex) => {
                        const accent = categoryAccents[groupIndex] || categoryAccents[0];
                        return (
                            <motion.div
                                key={groupIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 80, damping: 18, delay: groupIndex * 0.08 }}
                                className="rounded-3xl p-6 md:p-8 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/60 transition-all duration-500"
                            >
                                <h3 className="text-xs font-bold text-[#3F3F46] uppercase tracking-widest mb-5 flex items-center gap-2.5">
                                    <div
                                        className="w-2 h-2 rounded-full"
                                        style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                                    />
                                    {group.category}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="tech-card flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/60 hover:bg-white border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
                                        >
                                            <div className="tech-icon relative w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    width={24}
                                                    height={24}
                                                    className="object-contain w-full h-full"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-[#52525B] group-hover:text-[#18181B] transition-colors duration-300">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
