"use client";
import { motion } from "framer-motion";
import { tools } from "@/data";

export default function Tools() {
    // Flatten all tech items into a single array
    const allTechItems = tools.flatMap(group => group.items);
    
    // Split the items into two rows
    const half = Math.ceil(allTechItems.length / 2);
    const row1Items = allTechItems.slice(0, half);
    const row2Items = allTechItems.slice(half);

    // Duplicate arrays multiple times to ensure it fills ultra-wide screens seamlessly
    const marqueeRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
    const marqueeRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

    return (
        <section className="py-12 md:py-16 px-0 md:px-6 relative overflow-hidden">
            {/* Section glow divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#818CF8]/20 to-transparent" />

            <div className="container mx-auto max-w-5xl px-6 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-12"
                >
                    <span className="text-[#818CF8] text-sm font-medium tracking-widest uppercase mb-3 block">Tech Stack</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">Tools & Technologies</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#818CF8] to-[#34D399] rounded-full"></div>
                </motion.div>
            </div>

            {/* Infinite Marquee Container */}
            <div 
                className="relative w-full py-4 mt-2 flex flex-col gap-6"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
            >
                {/* Row 1 - Moves Left */}
                <motion.div
                    className="flex gap-4 md:gap-6 w-max pl-4 md:pl-0"
                    animate={{ x: [0, "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                >
                    {marqueeRow1.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl glass-card hover:-translate-y-1 transition-all duration-300 group cursor-default"
                        >
                            <div className="relative w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    width={32}
                                    height={32}
                                    className="object-contain w-full h-full"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-sm font-bold text-[#52525B] group-hover:text-[#18181B] transition-colors duration-300">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 - Moves Right */}
                <motion.div
                    className="flex gap-4 md:gap-6 w-max pl-4 md:pl-0"
                    animate={{ x: ["-50%", 0] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                >
                    {marqueeRow2.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl glass-card hover:-translate-y-1 transition-all duration-300 group cursor-default"
                        >
                            <div className="relative w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    width={32}
                                    height={32}
                                    className="object-contain w-full h-full"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-sm font-bold text-[#52525B] group-hover:text-[#18181B] transition-colors duration-300">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

