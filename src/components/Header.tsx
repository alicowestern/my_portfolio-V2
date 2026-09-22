"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data";

const navLinks = [
    { href: "#focus", label: "Focus" },
    { href: "#projects", label: "Projects" },
    { href: "#process", label: "Process" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "backdrop-blur-2xl bg-[#F5F5F0]/70 border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-tight font-[family-name:var(--font-syne)] text-gradient hover:opacity-80 transition-opacity"
                    >
                        Ale&apos;s Dev
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-[#52525B] hover:text-[#18181B] transition-colors rounded-lg hover:bg-black/5"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        {/* Resume Download */}
                        <a
                            href={personalInfo.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 text-sm font-medium text-[#FAFAFA] bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-4 py-2 rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all hover:scale-105"
                        >
                            <FileText size={14} />
                            View Resume
                        </a>
                        {/* GitHub */}
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#52525B] hover:text-[#38BDF8] transition-colors p-2 rounded-lg hover:bg-black/5"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        {/* Hamburger Button (mobile) */}
                        <button
                            className="md:hidden text-[#18181B] p-2 rounded-lg hover:bg-black/5 transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[45] bg-white/80 backdrop-blur-sm md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Slide-in Panel */}
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 z-[55] w-[280px] bg-white/95 backdrop-blur-2xl border-l border-black/5 shadow-[-10px_0_40px_rgba(0,0,0,0.5)] md:hidden flex flex-col"
                        >
                            {/* Close Button */}
                            <div className="flex items-center justify-between px-6 h-16 border-b border-black/5">
                                <span className="text-sm font-bold text-gradient font-[family-name:var(--font-syne)]">Menu</span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[#52525B] hover:text-[#18181B] p-2 rounded-lg hover:bg-black/5 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div className="flex-1 py-6 px-4 space-y-1">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block px-4 py-3 text-base font-medium text-[#52525B] hover:text-[#18181B] hover:bg-black/5 rounded-xl transition-all"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Actions */}
                            <div className="px-4 pb-8 space-y-3 border-t border-black/5 pt-6">
                                <a
                                    href={personalInfo.cvUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-sm font-bold text-[#FAFAFA] bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-4 py-3 rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all w-full"
                                >
                                    <FileText size={16} />
                                    View Resume
                                </a>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-sm font-medium text-[#52525B] hover:text-[#18181B] border border-white/10 px-4 py-3 rounded-full hover:bg-black/5 transition-all w-full"
                                >
                                    <Github size={16} />
                                    GitHub Profile
                                </a>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
