"use client";

import { volunteering } from "@/data";
import Section from "@/components/ui/Section";
import { HandHeart, ExternalLink } from "lucide-react";

export default function Volunteering() {
    return (
        <Section id="volunteering">
            <div className="flex flex-col items-center mb-12 text-center">
                <h2 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-50">Volunteering & Leadership</h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {volunteering.map((role, index) => (
                    <div key={index} className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 leading-tight">{role.role}</h3>
                                <p className="text-amber-600 dark:text-amber-500 font-medium mt-1">{role.organization}</p>
                            </div>
                            <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded-full text-amber-600 dark:text-amber-500">
                                <HandHeart size={24} />
                            </div>
                        </div>

                        <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-4 uppercase tracking-wide">
                            {role.date}
                        </p>

                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                            {role.description}
                        </p>

                        {role.links && role.links.length > 0 && (
                            <div className="flex gap-3">
                                {role.links.map(link => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-500 transition-colors"
                                    >
                                        {link.label} <ExternalLink size={14} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}
