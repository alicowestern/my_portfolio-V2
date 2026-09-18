"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Download } from "lucide-react";
import { motion } from "framer-motion";
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

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-2xl bg-[#0A0F1A]/70 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
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

                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-[#8B95A9] hover:text-[#E5E7EB] transition-colors rounded-lg hover:bg-white/5"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href={personalInfo.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-sm font-medium text-[#0A0F1A] bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-4 py-2 rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all hover:scale-105"
                    >
                        <Download size={14} />
                        Resume
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B95A9] hover:text-[#38BDF8] transition-colors p-2 rounded-lg hover:bg-white/5"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </motion.header>
    );
}
