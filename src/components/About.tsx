"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { personalInfo } from "@/data";

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 py-24 px-6 bg-[#0A0F1A] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />

            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="text-center"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 flex items-center justify-center mb-6"
                    >
                        <User size={24} className="text-[#38BDF8]" />
                    </motion.div>

                    <span className="text-[#38BDF8] text-sm font-medium tracking-widest uppercase mb-3 block">Background</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#E5E7EB] mb-10">About Me</h2>

                    <div className="glass-card rounded-2xl p-8 md:p-12 text-left">
                        <p className="text-base md:text-lg text-[#8B95A9] leading-[1.8]">
                            {personalInfo.about}
                        </p>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/5">
                            {[
                                { value: "4th", label: "Year Student" },
                                { value: "3+", label: "Projects Built" },
                                { value: "2+", label: "Years NGO Exp." },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-2xl font-bold text-gradient font-[family-name:var(--font-syne)]">{stat.value}</div>
                                    <div className="text-xs text-[#8B95A9] mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
