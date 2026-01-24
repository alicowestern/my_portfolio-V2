"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md border-stone-200 dark:border-stone-800 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <a
                        href="#"
                        className="text-xl font-bold font-serif tracking-tight text-stone-900 dark:text-stone-50"
                    >
                        Alem<span className="text-amber-600 dark:text-amber-500">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/cv.pdf"
                            className="px-4 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-colors"
                        >
                            Download CV
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-4 flex flex-col items-center">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/cv.pdf"
                                className="w-full text-center px-4 py-2 text-base font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
