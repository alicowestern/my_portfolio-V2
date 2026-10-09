"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Shield, Images, X, Play, Code2, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { projects } from "@/data";

/* ─── Media Modal ─── */
function MediaModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
    const allMedia: { type: "video" | "image"; src: string }[] = [];
    if (project.media?.video) allMedia.push({ type: "video", src: project.media.video });
    if (project.media?.images) project.media.images.forEach(src => allMedia.push({ type: "image", src }));

    const [current, setCurrent] = useState(0);

    const prev = useCallback(() => setCurrent(i => (i === 0 ? allMedia.length - 1 : i - 1)), [allMedia.length]);
    const next = useCallback(() => setCurrent(i => (i === allMedia.length - 1 ? 0 : i + 1)), [allMedia.length]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
    }, [onClose, prev, next]);

    const item = allMedia[current];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full h-full flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                {/* Top Bar */}
                <div className="flex justify-between items-center p-4 md:px-8 w-full bg-[#18181B]">
                    <h3 className="text-white font-bold text-lg font-[family-name:var(--font-syne)]">{project.title}</h3>
                    <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md">
                        <X size={24} />
                    </button>
                </div>

                {/* Media Display */}
                <div className="flex-1 w-full flex items-center justify-center p-4">
                    {item.type === "video" ? (
                        <video src={item.src} autoPlay muted loop playsInline controls className="max-w-full max-h-[calc(100vh-160px)] object-contain rounded-lg" />
                    ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.src} alt={`${project.title} screenshot`} className="max-w-full max-h-[calc(100vh-160px)] object-contain rounded-lg shadow-2xl" />
                    )}
                </div>

                {/* Thumbnail strip & Counter */}
                <div className="w-full flex flex-col items-center justify-center pb-6 pt-2 gap-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    {allMedia.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto px-4 [&::-webkit-scrollbar]:hidden">
                            {allMedia.map((m, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                                        idx === current
                                            ? "bg-white text-black"
                                            : "bg-white/10 text-white/60 hover:bg-white/20"
                                    }`}
                                >
                                    {m.type === "video" ? <Play size={12} /> : <Images size={12} />}
                                    {m.type === "video" ? "Demo" : `Screenshot ${idx}`}
                                </button>
                            ))}
                        </div>
                    )}
                    <span className="text-white/50 text-xs font-medium tracking-widest">{current + 1} / {allMedia.length}</span>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─── Project Card ─── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [showModal, setShowModal] = useState(false);
    const previewImage = project.media?.images?.[0] ?? null;

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl"
            >
                <div className="absolute inset-0 rounded-2xl bg-black/[0.08] p-px transition-colors duration-500 group-hover:bg-black/[0.12]">
                    <div className="absolute inset-px rounded-2xl bg-white" />
                </div>

                <div className="relative z-10 p-5 md:p-8">
                    <div className="flex flex-col gap-5 md:gap-6">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                            <div className="space-y-2">
                                <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                                    Project {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#18181B] transition-all group-hover:text-gradient">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="flex shrink-0 gap-2">
                                {project.demoUrl && project.demoUrl !== "#" && !project.demoUrl.startsWith("Deployed") ? (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-full bg-[#18181B] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-black hover:shadow-md"
                                    >
                                        <ExternalLink size={14} />
                                        Live
                                    </a>
                                ) : project.demoUrl?.startsWith("Deployed") ? (
                                    <span className="flex items-center gap-2 rounded-full bg-[#18181B] px-4 py-2 text-xs font-bold text-white">
                                        <Shield size={14} />
                                        Internal
                                    </span>
                                ) : null}
                                {project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-card flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-[#52525B] transition-colors hover:text-[#0284C7]"
                                        aria-label="View source code"
                                    >
                                        <Github size={14} />
                                        Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {(project.role || project.team) && (
                            <div className="flex flex-wrap gap-2 text-xs text-[#52525B]">
                                {project.role && <span className="rounded-full bg-black/[0.03] px-3 py-1">Role: {project.role}</span>}
                                {project.team && <span className="rounded-full bg-black/[0.03] px-3 py-1">Client: {project.team}</span>}
                            </div>
                        )}

                        {previewImage ? (
                            <button
                                type="button"
                                onClick={() => setShowModal(true)}
                                className="group/preview relative h-40 w-full overflow-hidden rounded-2xl border border-black/10 bg-[#F5F5F0] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2 md:h-72"
                                aria-label={`Open ${project.title} demo and gallery`}
                            >
                                <Image
                                    src={previewImage}
                                    alt={`${project.title} product interface`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 960px"
                                    className="object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.025]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white md:p-5">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Product Preview</span>
                                        <p className="mt-1 text-sm font-semibold">See the working interface</p>
                                    </div>
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur-md transition-colors group-hover/preview:bg-white group-hover/preview:text-[#18181B]">
                                        <Play size={13} />
                                        Open
                                    </span>
                                </div>
                            </button>
                        ) : (
                            <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-[#38BDF8]/20 bg-gradient-to-br from-[#E0F2FE] via-white to-[#ECFDF5] md:h-72">
                                <div
                                    className="absolute inset-0 opacity-40"
                                    style={{
                                        backgroundImage: "linear-gradient(to right, rgba(56,189,248,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,.18) 1px, transparent 1px)",
                                        backgroundSize: "32px 32px",
                                    }}
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                                    <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0284C7] shadow-sm">
                                        <Code2 size={21} />
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0284C7]">Live Product</span>
                                    <p className="mt-2 font-[family-name:var(--font-syne)] text-lg font-bold text-[#18181B]">Operations, orders, and farmer services</p>
                                </div>
                            </div>
                        )}

                        <p className="line-clamp-3 max-w-3xl text-[15px] leading-relaxed text-[#52525B]">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.highlights.slice(0, 4).map((highlight) => (
                                <span key={highlight} className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#3F3F46] shadow-sm">
                                    <CheckCircle2 size={12} className="text-[#0284C7]" />
                                    {highlight}
                                </span>
                            ))}
                        </div>

                        <div>
                            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA]">Built With</span>
                            <div className="flex flex-wrap items-center gap-2">
                                {project.tech.map((tech) => (
                                    <span key={tech.name} className="flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-gradient-to-br from-[#F8FAFC] to-[#F0F9FF]/80 px-2.5 py-1.5 text-[11px] font-semibold text-[#3F3F46] md:px-3 md:py-2 md:text-xs">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={tech.icon} alt="" width={15} height={15} className="h-[15px] w-[15px] object-contain" loading="lazy" />
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Media Modal */}
            <AnimatePresence>
                {showModal && <MediaModal project={project} onClose={() => setShowModal(false)} />}
            </AnimatePresence>
        </>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-24 py-12 md:py-16 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-12 md:mb-16"
                >
                    <span className="text-[#0284C7] text-sm font-semibold tracking-widest uppercase mb-3 block">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">Selected Projects</h2>
                    <div className="h-1 w-16 bg-[#38BDF8] rounded-full"></div>
                    <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-[#52525B]">
                        A closer look at the problems, engineering decisions, and practical value behind the products I have built.
                    </p>
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
