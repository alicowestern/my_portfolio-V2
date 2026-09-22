"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { realWorldContext } from "@/data";

export default function RealWorldContext() {
    return (
        <section className="py-24 px-6 bg-[#F5F5F0] relative">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="relative text-center"
                >
                    <div className="flex flex-col items-center justify-center">
                        <Quote size={32} className="text-[#34D399]/30 mb-8" />
                        
                        <h3 className="text-[#34D399] font-bold text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-syne)] mb-6">
                            Real-World Context
                        </h3>
                        
                        <p className="text-xl md:text-2xl leading-relaxed text-[#18181B] font-[family-name:var(--font-syne)] max-w-3xl font-medium">
                            &ldquo;{realWorldContext.content}&rdquo;
                        </p>

                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#34D399]/40 to-transparent mt-12" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
