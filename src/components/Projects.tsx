"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Shield } from "lucide-react";
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
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[#38BDF8]/30 via-black/[0.06] to-[#818CF8]/30 group-hover:from-[#38BDF8]/50 group-hover:to-[#818CF8]/50 transition-all duration-500">
                <div className="absolute inset-[1px] rounded-2xl bg-white" />
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
                            <h3 className="text-2xl font-bold text-[#18181B] group-hover:text-gradient transition-all font-[family-name:var(--font-syne)]">
                                {project.title}
                            </h3>
                        </div>
                        <div className="flex gap-2">
                            {project.demoUrl && project.demoUrl !== "#" && !project.demoUrl.startsWith("Deployed") ? (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#FAFAFA] px-4 py-2 rounded-full text-xs font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-all"
                                >
                                    <ExternalLink size={14} />
                                    Live
                                </a>
                            ) : project.demoUrl && project.demoUrl.startsWith("Deployed") ? (
                                <span className="flex items-center gap-2 bg-[#34D399]/10 text-[#34D399] px-4 py-2 rounded-full text-xs font-bold border border-[#34D399]/20">
                                    <Shield size={14} />
                                    Internal
                                </span>
                            ) : null}
                            {project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 glass-card text-[#52525B] hover:text-[#38BDF8] px-3 py-2 rounded-full text-xs font-medium transition-all"
                                    aria-label="View Code"
                                >
                                    <Github size={14} />
                                    Code
                                </a>
                            )}
                        </div>
                    </div>

                    {(project.role || project.timeline || project.team) && (
                        <div className="flex flex-wrap gap-2 text-xs text-[#52525B]">
                            {project.role && (
                                <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02]">
                                    Role: {project.role}
                                </span>
                            )}
                            {project.timeline && (
                                <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02]">
                                    Timeline: {project.timeline}
                                </span>
                            )}
                            {project.team && (
                                <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02]">
                                    Team: {project.team}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold mb-2">Problem</h4>
                            <p className="text-[#52525B] text-sm leading-relaxed">{project.problem}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#60A5FA] font-bold mb-2">Requirements</h4>
                                <p className="text-[#52525B] text-sm leading-relaxed">{project.requirements}</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#818CF8] font-bold mb-2">Solution</h4>
                                <p className="text-[#52525B] text-sm leading-relaxed">{project.solution}</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#34D399] font-bold mb-2">Outcome</h4>
                                <p className="text-[#52525B] text-sm leading-relaxed">{project.outcome}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-5 border-t border-black/[0.04] mt-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] mb-3 block">Built With</span>
                        <div className="flex flex-wrap gap-2.5 items-center">
                            {project.tech.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.85, y: 8 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ 
                                        scale: 1.08, 
                                        y: -3,
                                    }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 22, 
                                        delay: i * 0.05 
                                    }}
                                    className="tech-tag flex items-center gap-2.5 bg-gradient-to-br from-[#F8FAFC] to-[#F0F9FF]/80 px-4 py-2 rounded-xl border border-[#E2E8F0] backdrop-blur-sm cursor-default"
                                >
                                    <div className="relative w-[18px] h-[18px] flex items-center justify-center">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={18}
                                            height={18}
                                            className="object-contain w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-xs font-semibold text-[#3F3F46]">{tech.name}</span>
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
        <section id="projects" className="scroll-mt-24 py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-16"
                >
                    <span className="text-[#38BDF8] text-sm font-medium tracking-widest uppercase mb-3 block">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">Selected Projects</h2>
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
