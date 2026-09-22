"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section className="py-24 px-6 bg-[#F5F5F0] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#818CF8]/20 to-transparent" />

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-12"
                >
                    <span className="text-[#818CF8] text-sm font-medium tracking-widest uppercase mb-3 block">Academic</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">Education</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#818CF8] to-[#34D399] rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#818CF8]/10 to-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                            <GraduationCap size={24} className="text-[#818CF8]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#18181B] font-[family-name:var(--font-syne)] mb-1">
                                Bachelor of Science in Software Engineering
                            </h3>
                            <div className="text-[#52525B] font-medium">Mekelle University</div>
                            <div className="flex items-center gap-3 mt-2 text-sm text-[#52525B]/80">
                                <span>2019–2027</span>
                                <span className="w-1 h-1 rounded-full bg-[#818CF8]/50" />
                                <span>5th Year</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:text-right border-t md:border-t-0 md:border-l border-black/5 pt-4 md:pt-0 md:pl-8">
                        <div className="text-sm text-[#52525B] uppercase tracking-widest font-medium mb-1">GPA</div>
                        <div className="text-3xl font-bold font-[family-name:var(--font-syne)] text-[#18181B]">
                            3.45 <span className="text-[#52525B] text-lg">/ 4.00</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
