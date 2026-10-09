"use client";
import { motion } from "framer-motion";
import { BadgeCheck, FileBarChart, Network, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";
import { techStack } from "@/data";

type ExperienceSkill = {
    name: string;
    icon?: string;
    Icon?: LucideIcon;
};

const experienceSkills: ExperienceSkill[] = [
    { name: "Java", icon: techStack.Java.icon },
    { name: "Spring Boot", icon: techStack.SpringBoot.icon },
    { name: "React", icon: techStack.React.icon },
    { name: "PostgreSQL", icon: techStack.PostgreSQL.icon },
    { name: "REST APIs", Icon: Network },
    { name: "Authentication & Authorization", Icon: ShieldCheck },
    { name: "System Workflows", Icon: Workflow },
    { name: "Reporting", Icon: FileBarChart },
    { name: "Software Engineering Practices", Icon: BadgeCheck },
];

export default function Experience() {
    return (
        <section className="py-12 md:py-16 px-6 relative">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="mb-12"
                >
                    <span className="text-[#38BDF8] text-sm font-medium tracking-widest uppercase mb-3 block">Career</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">Professional Experience</h2>
                    <div className="h-1 w-16 bg-[#38BDF8] rounded-full"></div>
                </motion.div>

                {/* Editorial Layout for Experience */}
                <div className="relative pl-6 md:pl-0">
                    {/* Timeline line on mobile */}
                    <div className="absolute left-[11px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-[#38BDF8]/20 to-transparent md:hidden" />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="relative grid md:grid-cols-[1fr_3fr] gap-6 md:gap-12 pb-12"
                    >
                        {/* Mobile Timeline dot */}
                        <div className="absolute -left-[20px] top-1.5 w-3 h-3 rounded-full bg-[#F5F5F0] border-2 border-[#38BDF8] md:hidden" />
                        
                        <div className="md:text-right pt-1">
                            <h3 className="text-xl font-bold text-[#18181B] font-[family-name:var(--font-syne)]">
                                Software Development Intern
                            </h3>
                            <div className="text-[#38BDF8] font-medium mt-1">INSA</div>
                            <div className="text-[#52525B] text-sm mt-1 uppercase tracking-widest font-medium">2026</div>
                        </div>

                        <div className="glass-card rounded-2xl p-6 md:p-8 border-l-2 border-l-[#38BDF8]/50 hover:border-l-[#38BDF8] transition-colors">
                            <p className="text-[#52525B] leading-relaxed mb-6">
                                Focused on building enterprise-grade systems, turning complex requirements into secure, maintainable software. Contributed to critical national infrastructure projects involving strict access controls and automated workflows.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mt-4">
                                {experienceSkills.map(({ name, icon, Icon }) => (
                                    <span key={name} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/[0.02] border border-transparent rounded-full text-xs text-[#52525B] hover:text-[#18181B] hover:border-[#38BDF8]/20 transition-colors">
                                        {icon ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={icon} alt="" width={14} height={14} className="h-3.5 w-3.5 object-contain" loading="lazy" />
                                        ) : Icon ? (
                                            <Icon size={14} className="text-[#0284C7]" aria-hidden="true" />
                                        ) : null}
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

