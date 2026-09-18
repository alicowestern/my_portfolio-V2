"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            ref.current?.style.setProperty("--x", `${x}px`);
            ref.current?.style.setProperty("--y", `${y}px`);
        });
    };

    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative rounded-2xl overflow-hidden group"
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[#38BDF8]/20 via-transparent to-[#818CF8]/20 group-hover:from-[#38BDF8]/40 group-hover:to-[#818CF8]/40 transition-all duration-500">
                <div className="absolute inset-[1px] rounded-2xl bg-[#0F1629]" />
            </div>

            {/* Flashlight effect */}
            {isHovering && (
                <div
                    className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-200"
                    style={{
                        background: "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(56, 189, 248, 0.06), transparent 50%)",
                    }}
                />
            )}

            <div className="relative z-20 p-8">
                <div className="flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            <span className="text-xs font-medium text-[#38BDF8]/60 tracking-widest uppercase">
                                Project {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-2xl font-bold text-[#E5E7EB] group-hover:text-gradient transition-all font-[family-name:var(--font-syne)]">
                                {project.title}
                            </h3>
                        </div>
                        <div className="flex gap-2">
                            {project.demoUrl && project.demoUrl !== "#" && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#0A0F1A] px-4 py-2 rounded-full text-xs font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-all"
                                >
                                    <ExternalLink size={14} />
                                    Live
                                </a>
                            )}
                            {project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 glass-card text-[#8B95A9] hover:text-[#38BDF8] px-3 py-2 rounded-full text-xs font-medium transition-all"
                                    aria-label="View Code"
                                >
                                    <Github size={14} />
                                    Code
                                </a>
                            )}
                        </div>
                    </div>

                    {(project.role || project.timeline || project.team) && (
                        <div className="flex flex-wrap gap-2 text-xs text-[#8B95A9]">
                            {project.role && (
                                <span className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.03]">
                                    Role: {project.role}
                                </span>
                            )}
                            {project.timeline && (
                                <span className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.03]">
                                    Timeline: {project.timeline}
                                </span>
                            )}
                            {project.team && (
                                <span className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.03]">
                                    Team: {project.team}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold mb-2">Problem</h4>
                            <p className="text-[#8B95A9] text-sm leading-relaxed">{project.problem}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#60A5FA] font-bold mb-2">Requirements</h4>
                                <p className="text-[#8B95A9] text-sm leading-relaxed">{project.requirements}</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#818CF8] font-bold mb-2">Solution</h4>
                                <p className="text-[#8B95A9] text-sm leading-relaxed">{project.solution}</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#34D399] font-bold mb-2">Outcome</h4>
                                <p className="text-[#8B95A9] text-sm leading-relaxed">{project.outcome}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-white/5 mt-2">
                        <div className="flex flex-wrap gap-3 items-center">
                            {project.tech.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5 hover:border-[#38BDF8]/20 transition-all"
                                >
                                    <div className="relative w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-[#8B95A9]">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-24 py-24 px-6 bg-[#0A0F1A]">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-16"
                >
                    <span className="text-[#38BDF8] text-sm font-medium tracking-widest uppercase mb-3 block">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#E5E7EB] mb-4">Selected Projects</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full"></div>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
