"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

export default function Section({ children, id, className, delay = 0 }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20", className)}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}
