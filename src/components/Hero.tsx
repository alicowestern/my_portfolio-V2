"use client";
import { useState, useEffect } from "react";
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
        <section className="relative h-[calc(100vh-80px)] min-h-[500px] md:min-h-[600px] pt-12 md:pt-20 pb-10 px-6 overflow-hidden flex flex-col justify-center">

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



            <div className="container mx-auto max-w-5xl relative z-10 flex-grow flex items-center">
                <div className="flex flex-col items-start justify-center w-full mt-10 md:mt-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="flex-1 space-y-8 text-left max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight font-[family-name:var(--font-syne)] min-h-[120px] md:min-h-0">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-[#38BDF8] block mb-2"
                            >
                                Turning complex requirements 
                            </motion.span>
                            <span className={`text-gradient ${isTyping ? 'typewriter-cursor' : ''}`}>
                                {typedText}
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-[#52525B] leading-relaxed max-w-2xl">
                            {personalInfo.subHeadline}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
                            className="flex flex-wrap items-center justify-start gap-6 pt-4"
                        >
                            <a
                                href="#projects"
                                onClick={scrollToProjects}
                                className="group flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#FAFAFA] px-8 py-3.5 rounded-full font-bold hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:scale-105 transition-all"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-[#18181B] glass-card hover:border-[#38BDF8]/30 transition-all"
                            >
                                <Github size={18} />
                                GitHub
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
