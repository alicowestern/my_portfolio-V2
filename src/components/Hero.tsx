"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Github, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";

export default function Hero() {
    const textToType = "into reliable software systems.";
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < textToType.length) {
                setTypedText(textToType.substring(0, i + 1));
                i++;
                setTimeout(typeWriter, 80);
            } else {
                setIsTyping(false);
            }
        };
        // Start typing after initial load animation
        setTimeout(typeWriter, 600);
    }, []);

    const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col justify-center">

            {/* Aurora Background */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                <div
                    className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background: "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)",
                        animation: "aurora 8s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(129, 140, 248, 0.4) 0%, transparent 70%)",
                        animation: "aurora 10s ease-in-out infinite reverse",
                    }}
                />
                <div
                    className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] rounded-full opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(52, 211, 153, 0.4) 0%, transparent 70%)",
                        animation: "aurora 12s ease-in-out infinite",
                    }}
                />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container mx-auto max-w-5xl relative z-10 flex-grow flex items-center">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 w-full">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="flex-1 space-y-8 text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight font-[family-name:var(--font-syne)] min-h-[140px] md:min-h-0">
                            <span className="text-[#E5E7EB] block mb-2">Turning complex requirements </span>
                            <span className={`text-gradient ${isTyping ? 'typewriter-cursor' : ''}`}>
                                {typedText}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#8B95A9] leading-relaxed max-w-xl mx-auto md:mx-0">
                            {personalInfo.subHeadline}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
                        >
                            <a
                                href="#projects"
                                onClick={scrollToProjects}
                                className="group flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#0A0F1A] px-8 py-3.5 rounded-full font-bold hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:scale-105 transition-all"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-[#E5E7EB] glass-card hover:border-[#38BDF8]/30 transition-all"
                            >
                                <Github size={18} />
                                GitHub
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
                        className="w-full md:w-[320px] flex-shrink-0 flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-64 h-64 md:w-80 md:h-80 group"
                        >
                            {/* Multi-layer glow */}
                            <div className="absolute inset-[-20px] bg-gradient-to-br from-[#38BDF8]/20 via-[#818CF8]/10 to-[#34D399]/20 rounded-full blur-3xl group-hover:opacity-100 opacity-60 transition-all duration-700" />

                            {/* Spinning gradient ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-4px] rounded-full"
                                style={{
                                    background: "conic-gradient(from 0deg, #38BDF8, #818CF8, #34D399, #38BDF8)",
                                    opacity: 0.3,
                                }}
                            />

                            {/* Inner border */}
                            <div className="absolute inset-0 rounded-full border border-white/10" />

                            <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-[#0A0F1A] shadow-2xl bg-[#0F1629]">
                                <Image
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-medium text-[#8B95A9] tracking-[0.2em] uppercase">Scroll</span>
                <div className="w-8 h-12 rounded-full border border-white/10 flex justify-center p-1 bg-white/[0.02] backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-bounce-gentle mt-1" />
                </div>
            </motion.div>
        </section>
    );
}
