"use client";
import { motion } from "framer-motion";
import { tools } from "@/data";

export default function Tools() {
    return (
        <section className="py-24 px-6 bg-[#0A0F1A] relative">
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
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#E5E7EB] mb-4">Tools & Technologies</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#818CF8] to-[#34D399] rounded-full"></div>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid md:grid-cols-3 gap-4">
                    {tools.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 80, damping: 15, delay: groupIndex * 0.1 }}
                            className={`glass-card rounded-2xl p-6 ${groupIndex === 0 ? "md:row-span-1" : ""}`}
                        >
                            <h3 className="text-xs font-bold text-[#8B95A9] uppercase tracking-widest mb-6 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8]" />
                                {group.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-2">
                                {group.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.03 }}
                                        className="flex flex-col items-center justify-center p-3 bg-white/[0.02] rounded-xl border border-white/5 group hover:border-[#38BDF8]/20 hover:bg-white/[0.04] transition-all cursor-default"
                                    >
                                        <div className="relative w-7 h-7 mb-2 opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 flex items-center justify-center">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                width={28}
                                                height={28}
                                                className="object-contain w-full h-full"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-[10px] font-medium text-[#8B95A9] group-hover:text-[#E5E7EB] transition-colors text-center">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
