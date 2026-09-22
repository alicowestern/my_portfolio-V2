"use client";
import { motion } from "framer-motion";
import { Search, FileSearch, Palette, Code, RefreshCw } from "lucide-react";
import { processSteps } from "@/data";

const icons = [Search, FileSearch, Palette, Code, RefreshCw];

export default function Process() {
    return (
        <section id="process" className="scroll-mt-24 py-24 px-6 bg-[#F5F5F0] relative">
            {/* Subtle section divider glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-16"
                >
                    <span className="text-[#38BDF8] text-sm font-medium tracking-widest uppercase mb-3 block">Workflow</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">My Process</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full"></div>
                </motion.div>

                {/* Desktop: Horizontal timeline */}
                <div className="hidden md:block relative">
                    {/* Timeline connector */}
                    <div className="absolute top-[44px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#38BDF8]/20 via-[#818CF8]/20 to-[#34D399]/20" />

                    <div className="grid grid-cols-5 gap-6">
                        {processSteps.map((step, index) => {
                            const Icon = icons[index];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.1 }}
                                    className="relative text-center group"
                                >
                                    {/* Step circle on timeline */}
                                    <div className="relative z-10 mx-auto w-[88px]">
                                        <motion.div
                                            whileHover={{ scale: 1.15 }}
                                            className="w-[22px] h-[22px] mx-auto rounded-full bg-[#F5F5F0] border-2 border-[#38BDF8]/30 group-hover:border-[#38BDF8] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all flex items-center justify-center"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#38BDF8]/50 group-hover:bg-[#38BDF8] transition-all" />
                                        </motion.div>
                                    </div>

                                    <div className="mt-8 space-y-3">
                                        <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 flex items-center justify-center group-hover:from-[#38BDF8]/20 group-hover:to-[#818CF8]/20 transition-all">
                                            <Icon size={18} className="text-[#38BDF8]" />
                                        </div>
                                        <div className="text-xs font-bold text-[#38BDF8]/40 tracking-widest">
                                            0{index + 1}
                                        </div>
                                        <h3 className="text-base font-bold text-[#18181B] group-hover:text-[#38BDF8] transition-colors font-[family-name:var(--font-syne)]">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-[#52525B] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile: Vertical timeline */}
                <div className="md:hidden space-y-8">
                    {processSteps.map((step, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 80, delay: index * 0.1 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 flex items-center justify-center flex-shrink-0">
                                        <Icon size={18} className="text-[#38BDF8]" />
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="w-[1px] h-8 bg-gradient-to-b from-[#38BDF8]/20 to-transparent mt-2" />
                                    )}
                                </div>
                                <div className="pt-1">
                                    <span className="text-xs font-bold text-[#38BDF8]/40 tracking-widest">0{index + 1}</span>
                                    <h3 className="text-lg font-bold text-[#18181B] font-[family-name:var(--font-syne)]">{step.title}</h3>
                                    <p className="text-sm text-[#52525B] leading-relaxed mt-1">{step.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
