"use client";

import { personalInfo } from "@/data";
import Section from "@/components/ui/Section";
import { Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <Section id="projects" className="bg-stone-900 dark:bg-black text-stone-50 rounded-3xl my-8 py-20 px-8 text-center relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <Github size={300} />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold font-serif">Featured Projects</h2>
                <p className="text-stone-300 text-lg leading-relaxed">
                    I am constantly building and experimenting with new technologies.
                    From humanitarian data tools to secure web applications, my work reflects my passion for impactful engineering.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-8">
                    <div className="p-6 bg-stone-800 rounded-xl border border-stone-700">
                        <h3 className="font-bold text-xl mb-2 text-amber-500">AI & Data Analysis</h3>
                        <p className="text-stone-400 text-sm">Leveraging models for better decision making in humanitarian contexts.</p>
                    </div>
                    <div className="p-6 bg-stone-800 rounded-xl border border-stone-700">
                        <h3 className="font-bold text-xl mb-2 text-amber-500">Full-Stack Web</h3>
                        <p className="text-stone-400 text-sm">Building scalable, secure, and user-friendly digital solutions.</p>
                    </div>
                </div>

                <div className="pt-8">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all transform hover:scale-105"
                    >
                        <Github className="w-5 h-5" />
                        View My GitHub
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </Section>
    );
}
