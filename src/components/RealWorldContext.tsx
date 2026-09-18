"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { realWorldContext } from "@/data";

export default function RealWorldContext() {
    return (
        <section className="py-24 px-6 bg-[#0A0F1A] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#34D399]/20 to-transparent" />

            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="relative"
                >
                    {/* Gradient border wrapper */}
                    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#38BDF8]/20 via-[#818CF8]/10 to-[#34D399]/20">
                        <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
                            {/* Background glow */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#38BDF8]/5 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#818CF8]/5 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#34D399]/10 to-[#38BDF8]/10 flex items-center justify-center">
                                        <Quote size={18} className="text-[#34D399]" />
                                    </div>
                                    <span className="text-[#34D399] font-bold text-sm tracking-widest uppercase font-[family-name:var(--font-syne)]">
                                        Real-World Context
                                    </span>
                                </div>

                                <p className="text-lg md:text-xl leading-relaxed text-[#E5E7EB]/90 font-light">
                                    &ldquo;{realWorldContext.content}&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
