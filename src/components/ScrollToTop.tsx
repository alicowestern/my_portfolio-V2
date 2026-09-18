"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPx = window.scrollY;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollPx / winHeightPx) * 100;
            
            setScrollProgress(scrolled);
            setIsVisible(scrollPx > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[90] bg-[#0F1629] text-[#38BDF8] p-3 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-shadow flex items-center justify-center group outline-none"
                    aria-label="Scroll to top"
                    style={{ borderRadius: "50%" }}
                >
                    {/* SVG Progress Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="48"
                            stroke="rgba(56, 189, 248, 0.1)"
                            strokeWidth="4"
                            fill="none"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="48"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray="301.59"
                            strokeDashoffset={301.59 - (301.59 * scrollProgress) / 100}
                            className="transition-all duration-300"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#38BDF8" />
                                <stop offset="100%" stopColor="#34D399" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="relative z-10 p-1 group-hover:-translate-y-1 transition-transform">
                        <ArrowUp size={20} />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
