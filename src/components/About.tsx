"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";
import { personalInfo } from "@/data";

function Counter({ from, to, suffix = "", duration = 2 }: { from: number; to: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Ease out quad
            const easeOut = 1 - (1 - percentage) * (1 - percentage);
            setCount(Math.floor(from + (to - from) * easeOut));

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, from, to, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
    const stats = [
        { value: 5, suffix: "th", label: "Year Student" },
        { value: 10, suffix: "+", label: "Projects Built" },
        { value: 2, suffix: "+", label: "Years NGO Exp." },
    ];

    return (
        <section id="about" className="scroll-mt-24 py-24 px-6 relative">
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
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-10">About Me</h2>

                    <div className="glass-card rounded-2xl p-8 md:p-12 text-left">
                        <p className="text-base md:text-lg text-[#52525B] leading-[1.8]">
                            {personalInfo.about}
                        </p>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-black/5">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-2xl font-bold text-gradient font-[family-name:var(--font-syne)]">
                                        <Counter from={0} to={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xs text-[#52525B] mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
